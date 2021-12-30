function MovieCard({movie, getDetails}) {
    const posterUri = "https://image.tmdb.org/t/p/w342";
    const imagePlaceholder = "https://www.altavod.com/assets/images/poster-placeholder.png";
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={movie.poster_path? posterUri + movie.poster_path : imagePlaceholder} className="card-img-top" alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
            </div>
            <div className="card-footer">
                <a href="/movie" onClick={ () => getDetails(movie.id) } className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</a>
            </div>
        </div>
    );
}

export default MovieCard;