'use client';

import Dropdown from '@/components/Dropdown';
import SearchField from '@/components/SearchField';
import { useMovieContext } from '@/context/MovieContext';
import { Movie } from '@/types/movies';

export default function MovieContainer({ movies }: { movies: Movie[] }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const {
    genre,
    searchText,
    setGenre,
    setSearchText,
    selectedMovie,
    setSelectedMovie,
    currentPage,
    setCurrentPage,
    moviesPerPage,
  } = useMovieContext();

  const filteredMovies = movies.filter(
    (movie) =>
      (movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchText.toLowerCase())) &&
      (genre ? movie.genre === genre : true)
  );

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-8">Movie Recommendations</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <SearchField placeholderText="Search movies..." searchText={searchText} setSearchText={setSearchText} />
        <Dropdown value={genre} setValue={setGenre} items={genres} allItemsText="All Genres" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentMovies.map((movie) => (
          <div key={movie.uuid} className="card cursor-pointer" onClick={() => setSelectedMovie(movie)}>
            <h2>{movie.title}</h2>
            <p className="text-sm text-gray-500">{movie.genre}</p>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{selectedMovie.title}</h2>
            <p className="text-gray-700 mb-4">{selectedMovie.genre}</p>
            <p className="text-gray-700">{selectedMovie.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedMovie(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
