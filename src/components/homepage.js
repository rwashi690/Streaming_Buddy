import React, { useState, useEffect }  from 'react';
import axios from "axios";
const Home = () => {
    //const[initialData, setInitialData] =useState([{}])
    const[currentTopTen, setCurrentTopTen] = useState([{}])
    const[currentTrendingTen, setCurrentTrendingTen] = useState([{}])
    const[pastTopTen, setPastTopTen] = useState([{}])
    const[pastTrendingTen, setPastTrendingTen] = useState([{}])
    const[currentMoviesBoth, setCurrentMoviesBoth] = useState([{}])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch("/getAllPastMovies")
            .then(res => res.json())
            .then(
                (pastMovieData) => {
                    setIsLoaded(true);
                    setPastTopTen(pastMovieData);
                    console.log(pastMovieData)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch("/getAllPastTrendingMovies")
            .then(res => res.json())
            .then(
                (pastTrendingData) => {
                    setIsLoaded(true);
                    setPastTrendingTen(pastTrendingData);
                    console.log(pastTrendingData)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch("/topTenTrendingMoviesNow")
            .then(res => res.json())
            .then(
                (trendingData) => {
                    setIsLoaded(true);
                    setCurrentTrendingTen(trendingData);
                    console.log(trendingData)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch("/topTenMoviesNow")
            .then(res => res.json())
            .then(
                (movieData) => {
                    setIsLoaded(true);
                    setCurrentTopTen(movieData);
                    console.log(movieData[0])
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch("/MoviesInTrendingAndPopular")
            .then(res => res.json())
            .then(
                (movieData) => {
                    setIsLoaded(true);
                    setCurrentMoviesBoth(movieData);
                    console.log(movieData)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []
    )
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <><div class="container text-center">
                <h1>Current Popular Movies</h1>
                <div class="row">
                    {currentTopTen.map(movie => <div class="col" key={movie.id}>
                        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} class="rounded mx-auto d-block" width="100"></img>
                        {movie.title}
                    </div>
                    )}
                </div>
            </div>
            <div class="container text-center">
                <h1>Current Trending Movies</h1>
                <div class="row">
                    {currentTrendingTen.map(movie => <div class="col" key={movie.id}>
                        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} class="rounded mx-auto d-block" width="100"></img>
                        {movie.title}
                    </div>
                    )}
                </div>
            </div>
            <div class="container text-center">
                <h1>Trending and Popular Movies</h1>
                <div class="row">
                    {currentMoviesBoth.map(movie => <div class="col" key={movie.id}>
                        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} class="rounded mx-auto d-block" width="100"></img>
                        {movie.title}
                    </div>
                    )}
                </div>
            </div>

            </>
            
        );
    }
    }


    
export default Home;