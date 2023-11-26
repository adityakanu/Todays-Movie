"use client"
import react, { useState } from 'react';
import { searchMovies } from '../services/movie.service';
import MovieCard from './movieCard';
import SearchBar from './searchBar';
const MovieSearch = () => {

    const [movies, setMovies] = useState([]);

    const handleSearch = async (query:string) => {
        const response = await searchMovies(query);
        setMovies(response);
    }

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <SearchBar onSearch={handleSearch} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-4 gap-8 mt-8'>
                {movies.map((movie: any) => (
                    <MovieCard key={movie.id} title={movie.title} overview={movie.overview} poster_path={movie.poster_path} />
                ))}
            S</div>
        </div>
    )
}

export default MovieSearch;