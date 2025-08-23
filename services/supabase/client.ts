import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Supabase Configuration
const supabaseUrl = "https://uemiawsrgqunnnexrelf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlbWlhd3NyZ3F1bm5uZXhyZWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NjEzMTAsImV4cCI6MjA3MTQzNzMxMH0.JFi7UP356fNt_0UWfj8ZHTKET--qwY63F91gEcvhnVE";

// Supabase client'ını oluştur
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
  },
});

// Client'ı export et
export default supabase;
