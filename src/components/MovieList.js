import MovieCard from './MovieCard';


function MovieList({movies, detail}) {
    return (
        <div className="row mx-auto gy-5">
            {movies.length? movies.map(movie => <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
                <MovieCard movie={movie} getDetails={detail}/>
            </div>): <div>No movies</div>}
        </div>
    );
}
export default MovieList;