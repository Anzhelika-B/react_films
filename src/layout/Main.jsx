import React from 'react';
import Movie_list from '../components/Movie_list'
import Search from '../components/Search'
import Preloader from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends React.Component {
    state = {
        movie_list: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({ movie_list: data.Search, loading: false }))
    }

    searchMovie_list = (str, type='all') => {
        this.setState({ loading: true})
        
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
        .then(response => response.json())
        .then(data => this.setState({ movie_list: data.Search, loading: false}))
    }

    render() {
        const {movie_list, loading } = this.state;

        return(
            <main className="container content">
                <Search searchMovie_list={this.searchMovie_list} />
                { loading ? (
                    <Preloader />
                    ) : ( 
                        <Movie_list movie_list={ movie_list } /> 
                )}   
            </main>
        );
    }
}

export default Main;