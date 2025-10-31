import { faker } from '@faker-js/faker';
import SeedMovie from './seed-movies';

class MovieSeeder {
  public static async seed(count: number = 10): Promise<void> {
    console.log(`Seeding ${count} movies...`);
    
    for (let i = 1; i <= count; i++) {
      const movieData = {
        year: faker.date.past({ years: 30 }).getFullYear(),
        genre: faker.helpers.arrayElement(['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller', 'Documentary']),
        duration: faker.number.int({ min: 80, max: 180 }),
        description: faker.lorem.paragraph(),
        rating: faker.number.float({ min: 1, max: 10, fractionDigits: 1 }),
        release_date: faker.date.past({ years: 30 }).toISOString().split('T')[0],
        runtime: faker.number.int({ min: 80, max: 180 }),
        image_url: faker.image.urlLoremFlickr({ category: 'movies' })
      };

      const seedMovie = new SeedMovie(
        i,
        faker.lorem.words({ min: 2, max: 5 }),
        movieData
      );

      try {
        await seedMovie.createMovie();
        console.log(`Movie ${i} created successfully`);
      } catch (error) {
        console.error(`Error creating movie ${i}:`, error);
      }
    }
    
    console.log('Seeding completed!');
  }
}

export default MovieSeeder;