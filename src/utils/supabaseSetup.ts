
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kiaolsfzppdboluwsoib.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYW9sc2Z6cHBkYm9sdXdzb2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDc4OTIsImV4cCI6MjA2MDkyMzg5Mn0.qw948NSs_whx-a85AYABkN0Mngx55fETrdGA9pK3z54";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// SQL for creating the contact_submissions table
const createTableSQL = `
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Allow anonymous inserts
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy allowing anonymous inserts
CREATE POLICY "Allow anonymous inserts" 
  ON contact_submissions 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);
`;

// Function to initialize the database
export const initializeDatabase = async () => {
  try {
    // Execute the SQL to create the table
    const { error } = await supabase.rpc('execute_sql', { sql: createTableSQL });
    
    if (error) {
      console.error('Error creating table:', error);
      // Fallback: try direct SQL execution if RPC not available
      await createTableDirectly();
    } else {
      console.log('Database initialized successfully');
    }
  } catch (error) {
    console.error('Failed to initialize database:', error);
    // Fallback to direct SQL if RPC fails
    await createTableDirectly();
  }
};

// Direct SQL execution fallback
const createTableDirectly = async () => {
  try {
    // We can't execute arbitrary SQL directly from client-side JS
    // This is a fallback that won't work, but we'll leave a message for the admin
    console.warn('Unable to create table automatically. Please create the table manually in Supabase:');
    console.info(`
      Table name: contact_submissions
      Columns:
      - id: serial primary key
      - name: text not null
      - email: text not null
      - company: text
      - subject: text not null
      - message: text not null
      - created_at: timestamp with time zone default current_timestamp
      
      Don't forget to enable RLS and create a policy allowing anonymous inserts!
    `);
  } catch (error) {
    console.error('Direct table creation failed:', error);
  }
};
