import MoviesItem from "./MovieItem";

const Movies = (props)=>{
    return props.myMovie.map(
        (movie)=>{
            return <MoviesItem myMovie={movie}></MoviesItem>
        }
        
    )
}

export default Movies;
