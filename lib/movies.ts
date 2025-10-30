import supabase from "../supabase";

export async function getMovies(): Promise<any[]> {
  const { data: movies, error } = await supabase.from('movies').select('*');
  if (error) throw error;
  return movies;
}
