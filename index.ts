import { getMovies } from "./lib/movies";
import Table from 'cli-table3';

async function main() {
  try {
    const movies = await getMovies();
    
    const table = new Table({
      head: ['No.', 'Title', 'Year', 'Genre', 'Runtime', 'Duration'],
      colWidths: [5, 30, 10, 15, 15]
    });

    movies.forEach((movie, index) => {
      const movieData = movie.data;
      table.push([
        index + 1,
        movie.name,
        movieData.year || 'N/A',
        movieData.genre || 'N/A',
        movieData.runtime || 'N/A',
        movieData.duration || 'N/A'
      ]);
    });

    console.log(table.toString());
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

main();