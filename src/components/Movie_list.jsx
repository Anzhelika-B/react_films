import Movie from './Movie'

function Movie_list (props) {
    const {movie_list = [] } = props;

    return (
        <div className="movie_list">
            { movie_list.length ?  movie_list.map( movie => (
                <Movie key={ movie.imdbID } { ...movie } />
            )) : <h4>Nothing found</h4>
            }
        </div>
    );
}

export default Movie_list;