import { MovieContextProvider } from '@/context/MovieContext';
import { Movie } from '@/types/movies';
import { fetchMovies, initializeDB } from '@/utils/db';
import MovieContainer from './MovieContainer';

export default async function Home() {
  await initializeDB();
  const movies: Movie[] = await fetchMovies();

  return (
    <MovieContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MovieContainer movies={movies} />
      </main>
    </MovieContextProvider>
  );
}
