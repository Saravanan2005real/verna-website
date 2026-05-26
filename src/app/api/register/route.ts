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
        const recipientEmails: string[] = members
          .map((m: any) => m.email?.trim())
          .filter((email: string) => email && email.length > 0);

        if (recipientEmails.length > 0) {
          try {
            await resend.emails.send({
              from: 'BuildX Hackathon <onboarding@resend.dev>',
              to: recipientEmails,
              subject: `Registration Confirmed: Team ${teamName} — BuildX 2026`,
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; color: #1e293b; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;">
                  <div style="text-align: center; margin-bottom: 25px;">
                    <h1 style="color: #1A4E95; font-size: 28px; margin: 0 0 10px 0;">BuildX Hackathon 2026</h1>
                    <p style="color: #64748b; font-size: 16px; margin: 0;">Registration Success Confirmation</p>
                  </div>
                  
                  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 25px;" />
                  
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hi Team,</p>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Congratulations! Your team <strong>${teamName}</strong> has been successfully registered for the <strong>BuildX Hackathon 2026</strong>.</p>
                  
                  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                    <h3 style="color: #2397B8; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Registration Details</h3>
                    <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8;">
                      <li><strong>Event Dates:</strong> June 27 & 28, 2026</li>
                      <li><strong>Team Name:</strong> ${teamName}</li>
                      <li><strong>Team Size:</strong> ${members.length} members</li>
                    </ul>
                  </div>

                  <h3 style="color: #1A4E95; font-size: 18px; margin-top: 0; margin-bottom: 12px;">Hackathon Structure & Rounds</h3>
                  <div style="border-left: 4px solid #1A4E95; padding-left: 15px; margin-bottom: 15px;">
                    <strong style="display: block; font-size: 15px; color: #0f172a;">Round 1: Idea Pitching & Presentation</strong>
                    <span style="font-size: 14px; color: #64748b;">Pitch your core concept, define the problem statement, and validate the idea.</span>
                  </div>
                  <div style="border-left: 4px solid #2397B8; padding-left: 15px; margin-bottom: 15px;">
                    <strong style="display: block; font-size: 15px; color: #0f172a;">Round 2: Prototype & Tech Evaluation</strong>
                    <span style="font-size: 14px; color: #64748b;">Showcase your system architecture, technical design, and a partially completed prototype.</span>
                  </div>
                  <div style="border-left: 4px solid #10b981; padding-left: 15px; margin-bottom: 20px;">
                    <strong style="display: block; font-size: 15px; color: #0f172a;">Round 3: Final Demo & Business Pitch</strong>
                    <span style="font-size: 14px; color: #64748b;">Present your finalized working prototype, business monetization model, and market viability.</span>
                  </div>

                  <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 25px;">
                    We have successfully received your payment transaction screenshot. Our team will verify the payment and follow up with track selections, official Discord invitations, and rule guidelines as we approach the hackathon.
                  </p>

                  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 25px;" />
                  
                  <div style="text-align: center; font-size: 14px; color: #94a3b8;">
                    <p style="margin: 0 0 5px 0;">BuildX Hackathon by VernaTech LLP</p>
                    <p style="margin: 0;">If you have any questions, please contact support.</p>
                  </div>
                </div>
              `
            });
            console.log("Confirmation emails successfully dispatched via Resend to:", recipientEmails);
          } catch (resendError) {
            console.error("Resend API failed to dispatch emails:", resendError);
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
