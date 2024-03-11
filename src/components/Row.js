import React, { useEffect, useState } from 'react';

import axios from '../axios';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    const base_url = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    console.log('movies', movies) /////////////////////////////////

    return (
        <div className='w-full h-auto text-white ml-5'>
            <h2 className='text-3xl font-bold'>{title}</h2>

            <div className='flex overflow-y-hidden overflow-x-scroll p-4 scrollbar-hide'>
                {
                    movies.map(movie => (
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id}
                                className={`
                                    max-h-[100px]
                                    object-contain
                                    mr-3
                                    w-full
                                    cursor-pointer
                                    transition-transform
                                    duration-500
                                    hover:scale-110
                                    hover:opacity-100
                                    
                                    ${isLargeRow && `
                                        max-h-[250px]
    
                                    `}
                                `}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name || movie.title}
                            />
                        )
                    ))
                }
            </div>

        </div>
    )
}

export default Row