import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jvyrgsxbzlzokotyzepw.supabase.co";
const supabaseAnonKey = "sb_publishable_i80Lpj4bEIGTUX1_j5vlGQ_4cTESJ2D";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
