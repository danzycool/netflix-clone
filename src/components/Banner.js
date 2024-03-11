import React, { useEffect } from 'react';
import { useState } from 'react';

import axios from '../axios';
import requests from '../Request';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        };

        fetchData();
    }, []);

    console.log("Banner:", movie) ///////////////////////

    const truncate = (data, n) => {
        return data?.length > n ? data.substr(0, n - 1) + '...' : data
    }

    return (
        <header
            className={`relative object-contain bg-cover bg-center h-[448px] text-white
            bg-[url(https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path})]`}

            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}")`
            }}

            alt=''
        >
            <div className='ml-[30px] pt-[140px] h-[190px]'>
                <h1 className='font-extrabold text-4xl pb-2'>
                    {movie?.name || movie?.original_name || movie?.title}
                </h1>
                <div>
                    <button
                        className='cursor-pointer text-white outline-none bg-myGray
                        border-none font-bold pr-8 pl-8 mr-8 rounded-lg py-2
                        hover:text-black hover:bg-[#e6e6e6] hover:transition-all hover:duration-200'
                    >Play</button>

                    <button
                        className='cursor-pointer text-white outline-none bg-myGray
                        border-none font-bold pr-8 pl-8 mr-8 rounded-lg py-2
                        hover:text-black hover:bg-[#e6e6e6] hover:transition-all hover:duration-200'
                    >My List</button>
                </div>
                <h1 className='font-bold text-lg w-[45rem] leading-[1.3] pt-4 h-20 max-w-[360px]'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div
                className='absolute bottom-0 w-full h-[7.4rem]'

                style={{
                    backgroundImage: `linear-gradient(
                        180deg, 
                        transparent, 
                        rgba(37, 37, 37, 0.61), 
                        #111
                    )`,
                }}


            />

        </header >
    )
}

export default Banner