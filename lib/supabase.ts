import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gslhhyrwcrbhhofvmhmz.supabase.co';
const supabaseAnonKey = 'sb_publishable_o5UqNJ_GkF3RZEsIqAUMDg_2L-0BMeW';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
