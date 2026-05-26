import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const resendApiKey = process.env.RESEND_API_KEY || "";

// Create a single supabase client for interacting with your database
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Initialize Resend
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const teamName = formData.get('teamName') as string || "Unnamed Team";
    const membersData = formData.get('members');
    const members = membersData ? JSON.parse(membersData as string) : [];
    const file = formData.get('screenshot') as File | null;
    
    let screenshotUrl = "No screenshot uploaded";

    if (!supabase) {
      console.warn("Supabase keys are missing in .env.local! Data will not be saved.");
    } else if (file) {
      // 1. Upload Image to Supabase Storage
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
      
      const { data, error } = await supabase.storage
        .from('buildx-screenshots')
        .upload(fileName, file, {
          upsert: false
        });
        
      if (error) {
        console.error("Supabase Storage Upload Failed:", error);
      } else {
        // Get the public URL for the uploaded image
        const { data: publicUrlData } = supabase.storage
          .from('buildx-screenshots')
          .getPublicUrl(fileName);
          
        screenshotUrl = publicUrlData.publicUrl;
      }
    }

    // 2. Save data to Supabase Database
    if (supabase) {
      const { error } = await supabase
        .from('buildx_registrations')
        .insert([
          { 
            team_name: teamName, 
            screenshot_url: screenshotUrl,
            m1_name: members[0]?.fullName || "",
            m1_email: members[0]?.email || "",
            m1_phone: members[0]?.phone || "",
            m1_college: members[0]?.college || "",
            m1_dept: members[0]?.department || "",
            m1_year: members[0]?.year || "",
            m2_name: members[1]?.fullName || "",
            m2_email: members[1]?.email || "",
            m2_phone: members[1]?.phone || "",
            m2_college: members[1]?.college || "",
            m2_dept: members[1]?.department || "",
            m2_year: members[1]?.year || "",
            m3_name: members[2]?.fullName || "",
            m3_email: members[2]?.email || "",
            m3_phone: members[2]?.phone || "",
            m3_college: members[2]?.college || "",
            m3_dept: members[2]?.department || "",
            m3_year: members[2]?.year || ""
          }
        ]);
        
      if (error) {
        console.error("Supabase DB Insert Failed:", error);
        return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
      }
      console.log("Successfully saved registration to Supabase!");

      // 3. Send Confirmation Email via Resend
      if (resend) {
        // Send email individually to each teammate
        for (let i = 0; i < members.length; i++) {
          const member = members[i];
          const email = member.email?.trim();
          const fullName = member.fullName?.trim();
          
          if (email && email.length > 0) {
            try {
              const response = await resend.emails.send({
                from: 'BuildX Hackathon <onboarding@resend.dev>',
                to: [email],
                subject: `Registration Confirmed: ${teamName} — BuildX 2026`,
                html: `
                  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; color: #1e293b; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;">
                    <div style="text-align: center; margin-bottom: 25px;">
                      <h1 style="color: #1A4E95; font-size: 28px; margin: 0 0 10px 0;">BuildX Hackathon 2026</h1>
                      <p style="color: #64748b; font-size: 16px; margin: 0;">Registration Confirmed</p>
                    </div>
                    
                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 25px;" />
                    
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hi <strong>${fullName}</strong>,</p>
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thanks for registering for the <strong>BuildX Hackathon 2026</strong>! Your registration is confirmed under the team name <strong>${teamName}</strong> (Team Size: ${members.length} members). We will update you with more details soon.</p>
                    
                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                      <h3 style="color: #2397B8; font-size: 18px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Event Date</h3>
                      <p style="margin: 0; font-size: 15px; color: #0f172a;"><strong>June 27 & 28, 2026</strong></p>
                    </div>

                    <div style="margin-bottom: 25px;">
                      <h3 style="color: #1A4E95; font-size: 18px; margin-top: 0; margin-bottom: 12px;">Follow Us on Social Media</h3>
                      <p style="font-size: 14px; color: #64748b; margin-bottom: 12px;">Stay connected and follow our social handles for real-time announcements and updates:</p>
                      <div style="margin-top: 10px;">
                        <a href="https://www.linkedin.com/company/vernatech/" target="_blank" style="color: #0077b5; text-decoration: none; font-size: 14px; font-weight: bold; margin-right: 15px;">LinkedIn</a>
                        <a href="https://www.instagram.com/vernatech_llp?igsh=Y2wyazB6bTMzOWx0" target="_blank" style="color: #E1306C; text-decoration: none; font-size: 14px; font-weight: bold; margin-right: 15px;">Instagram</a>
                        <a href="https://wa.me/918220012671" target="_blank" style="color: #25D366; text-decoration: none; font-size: 14px; font-weight: bold;">WhatsApp</a>
                      </div>
                    </div>

                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                      <h3 style="color: #2397B8; font-size: 18px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Contact List</h3>
                      <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #475569;">
                        <li><strong>Support Email:</strong> <a href="mailto:support@vernatech.co" style="color: #1A4E95; text-decoration: none;">support@vernatech.co</a></li>
                        <li><strong>Phone Support:</strong> +91 8220012671</li>
                      </ul>
                    </div>

                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 25px;" />
                    
                    <div style="text-align: center; font-size: 14px; color: #94a3b8;">
                      <p style="margin: 0 0 5px 0;">BuildX Hackathon by VernaTech LLP</p>
                    </div>
                  </div>
                `
              });

              if (response.error) {
                console.error(`Resend API returned error for ${email}:`, response.error);
              } else {
                console.log(`Confirmation email sent successfully via Resend to: ${email} (${fullName})`);
              }
            } catch (resendError) {
              console.error(`Resend API failed to send to ${email}:`, resendError);
            }
          }
        }
      }
    }

    return NextResponse.json({ success: true, message: "Registration received!" }, { status: 200 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process registration' }, { status: 500 });
  }
}
