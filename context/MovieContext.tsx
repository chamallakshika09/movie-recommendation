'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '@/types/movies';

interface MovieContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  genre: string;
  setGenre: (genre: string) => void;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  moviesPerPage: number;
}

const MovieContext = createContext<MovieContextType>({
  searchText: '',
  setSearchText: () => {},
  genre: '',
  setGenre: () => {},
  selectedMovie: null,
  setSelectedMovie: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  moviesPerPage: 5,
});

export function MovieContextProvider({ children }: { children: ReactNode }) {
  const [searchText, setSearchText] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <MovieContext.Provider
      value={{
        searchText,
        setSearchText,
        genre,
        setGenre,
        selectedMovie,
        setSelectedMovie,
        currentPage,
        setCurrentPage,
        moviesPerPage: 5,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
