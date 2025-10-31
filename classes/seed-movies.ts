import supabase from "../supabase";

class SeedMovie {
  constructor(
    public id: number,
    public name: string,
    public data: object | null
  ) {
    this.id = id;
    this.name = name;
    this.data = data;
  }

  public async createMovie(): Promise<any> {
    console.log('Inserting movie data:', {
      name: this.name,
      data: this.data,
    });

    const { data, error } = await (supabase.from("movies").insert({
      name: this.name,
      data: this.data,
    } as any)).select();
    
    if (error) {
      console.error('Supabase insert error:', error);
      throw error;
    }

    console.log('Successfully inserted movie:', data);
    return data;
  }
}

export default SeedMovie;