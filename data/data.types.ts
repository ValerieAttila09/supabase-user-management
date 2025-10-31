export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {               // the data expected from .select()
          id: number
          name: string
          data: Json | null
        }
        Insert: {            // the data to be passed to .insert()
          id?: number
          name: string
          data?: Json | null
        }
        Update: {            // the data to be passed to .update()
          id?: number
          name?: string
          data?: Json | null
        }
      }
    }
  }
}