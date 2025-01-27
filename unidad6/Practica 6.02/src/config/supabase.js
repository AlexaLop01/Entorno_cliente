import {createClient} from "@supabase/supabase-js";

 const supabaseConnection = createClient(
  import.meta.env.supabaseUrl,
  import.meta.env.supabaseKey
); 

export { supabaseConnection };