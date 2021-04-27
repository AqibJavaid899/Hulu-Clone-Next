import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const MovieResults = ({ movies }) => {
    return (
        // For Cool Animation Refresh 
        <FlipMove className='px-5 my-10 sm:grid 
        md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {movies.map((movie) => (
                <Thumbnail id={movie.id} movie={movie} />                
            ))}
        </FlipMove>
    )
}

export default MovieResults
