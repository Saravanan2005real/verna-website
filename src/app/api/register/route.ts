import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Create a single supabase client for interacting with your database
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

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

    }

    return NextResponse.json({ success: true, message: "Registration received!" }, { status: 200 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process registration' }, { status: 500 });
  }
}
