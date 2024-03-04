import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fxnylqflrikrjdurvfbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4bnlscWZscmlrcmpkdXJ2ZmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1MzkzNTcsImV4cCI6MjAyNTExNTM1N30.-LK3bm5dEb4lN1zhHKgktnyUtsGRXGgDcXgjPLfqhQQ'
export const supabase = createClient(supabaseUrl, supabaseKey) 
