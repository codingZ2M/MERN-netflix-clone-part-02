import styled from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTopRated } from "../../features/movie/movieSlice";

const TopRated = (props) => {
      const movies = useSelector(selectTopRated);
    return (
        <Container>
            <h2> Top Rated </h2>
            <Content>
            {
                    movies && movies.map( (movie, key) => (
                        <Wrap key={key}  >
                            <Link to={'/detail/' + movie._id}>
                                <img src={movie.poster_path} alt={movie.original_title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default TopRated;

const Container = styled.div`
    padding: 20px 10px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Wrap = styled.div`
    padding-top: 60.00%;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #525151;  // /* offset-x | offset-y | blur-radius | spread-radius | color */
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);  // https://www.w3schools.com/cssref/func_cubic-bezier.asp
    border: 3px solid #424141;;

    img {
        inset: 0px;
        display:block;
        height: 100%;
        object-fit:cover;
        opacity: 1;
        position:absolute;
        transition: opacity 500ms ease-in-out 0s;
        width:100%;
        z-index:1;
    }

    &:hover {
        box-shadow: 4px 4px 4px 1px #525151; 
        transform: scale(1.05);
        border-color: #f9f9f9;
    }
`;