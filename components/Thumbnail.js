import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'
 
const Thumbnail = forwardRef(({ movie }, ref) => {
    // Base URL for the TMDB images
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        // Z-Index is used to show the Image Content on top of everything else
        <div ref={ref} className='group cursor-pointer p-2 transition duration-200
                                  ease-in transform sm:hover:scale-105 hover:z-50'>

            {/* Image Height and Width is used according the graphics person using */}
            <Image 
            layout='responsive'
            src={`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
            height={1000}
            width={1920}
            />
            <div className='p-2'>
                <h2 className='mt-2 text-2xl text-white transition-all
                               duration-100 ease-in-out group-hover:font-bold'>
                    {movie?.title || movie?.original_name}
                </h2>
                <p className='truncate max-w-md'>{movie.overview}</p>

                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {movie.media_type && `${movie.media_type} .`}{" "}
                    {movie.release_date && `${movie.release_date} .`}{" "}
                    <ThumbUpIcon className='h-5 mx-2'/> 
                    {movie.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
