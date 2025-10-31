import MovieSeeder from './classes/movie-seeder';

async function runSeeder() {
  try {
    const count = process.argv[2] ? parseInt(process.argv[2], 10) : 20;
    await MovieSeeder.seed(count);
    console.log('Movies seeded successfully!');
  } catch (error) {
    console.error('Error seeding movies:', error);
  }
}

runSeeder();