import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from '../collections/Videos';
import Trending from '../collections/Trending';
import Action from '../collections/Action';
import TopRated from '../collections/TopRated';
import NetflixOriginals from '../collections/NetflixOriginals';

import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../features/movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';
import axios from 'axios';

const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)  // React Hook

    useEffect(() => {

        const fetchMovies = async () => {
            const [actionsMoives, netflixOriginals, topRatedMovies, trendingMovies] = await Promise.all([
                await axios.get('/api/action-movies'),
                await axios.get('/api/netflix-originals'),
              await axios.get('/api/top-rated'),
              //  await axios.get('/api/trending-movies'),
             
            ]);
            console.log(actionsMoives.data)
            dispatch(
                setMovies({
                    actions: actionsMoives.data,
                    netflixOriginals: netflixOriginals.data,
                    topRated: topRatedMovies.data,
                  //  trending: trendingMovies.data,
                })
            );
        }
        fetchMovies()
    }, [userName]);

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <NetflixOriginals />
            <Action />
            <TopRated />
            <Trending />
        </Container>


    )
}
export default Home;

const Container = styled.main`
    background-color:#0f0f0f;
    position: relative;          // An element’s original position remains in the flow of the document
    height: 100vh;    // https://developer.mozilla.org/en-US/docs/Web/CSS/calc()
    overflow-x: hidden;           // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
    display: block;               // https://developer.mozilla.org/en-US/search?q=display
    top:72px;                     // https://developer.mozilla.org/en-US/docs/Web/CSS/top
    padding: 0;    // https://developer.mozilla.org/en-US/docs/Web/CSS/padding
    *{
        -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;