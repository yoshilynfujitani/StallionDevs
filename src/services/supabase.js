import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hsbjwkxsouxzllpclsry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYmp3a3hzb3V4emxscGNsc3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0NTU1NTMsImV4cCI6MjAxNDAzMTU1M30.vgnGLNL7eq6i2ppiW50wk-kMPbscX351U1I0GDBzoQo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
