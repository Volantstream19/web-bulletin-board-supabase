const SUPABASE_URL = 'https://lotqrshldcgiswwaymns.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdHFyc2hsZGNnaXN3d2F5bW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4MzkyOTcsImV4cCI6MTk4MDQxNTI5N30.akWz2i6t3m1urnZLvwFf_Rapxuou6DpmEXQQf79bS_c';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
