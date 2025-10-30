import { createClient } from '@supabase/supabase-js'
import { Database } from './data/data.types';

const supabaseUrl: string = process.env.SUPABASE_URL || 'https://vkclxzijteqqywnbmwpv.supabase.co';
const supabaseKey: string = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrY2x4emlqdGVxcXl3bmJtd3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MzM1NjksImV4cCI6MjA3NzQwOTU2OX0.ASLWL8c6u2xZdYhhAIHowpmnFmbBIvZgkvlCnjeDur0';
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;