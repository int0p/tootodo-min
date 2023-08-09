use postgrest::Postgrest;

let supabaseUrl: String = dotenv::var("SUPABASE_URL").unwrap();
let supabaseKey: String = dotenv::var("SUPABASE_ANON_KEY").unwrap();

pub const client: Postgrest = Postgrest::new(&supabaseUrl)
    .insert_header("apikey", &supabaseKey);

