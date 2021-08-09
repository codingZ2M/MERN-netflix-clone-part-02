import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = (props) => {
    const {_id } = useParams();
    const [movie, setMovie] = useState({});
 
    useEffect(() => {

        const fetchActionMovie = async () => {
           const actionMovie = await axios.get(`/api/action-movies/detail/${_id}`)
             if (actionMovie.data) {
                 setMovie(actionMovie.data);
             } 
        }
        const fetchNetflixOriginals = async () => {       
          const netflixOriginal = await axios.get(`/api/netflix-originals/detail/${_id}`)
            if (netflixOriginal.data) {
                setMovie(netflixOriginal.data);
            }
    }
         
    const fetchTopRated = async () => {       
        const topRated = await axios.get(`/api/top-rated/detail/${_id}`)
          if (topRated.data) {
              setMovie(topRated.data);
          }
  }
        fetchActionMovie();
        fetchNetflixOriginals();
        fetchTopRated();
    }, [_id]);  // Updating the state based on the 'id'

    return (
        <Container>
            <Background>
                <img alt={movie.original_title}
                    src={movie.backdrop_path}
                />
            </Background>
            <ImageTitle>
                <img alt=""
                    src="/images/detail_comp_image.jpg"
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play_button.png" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play_button_white.png" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <img src="/images/plus_button.png" />
                    </AddList>
                    <GroupWatch>
                        <img src="/images/group_button.png" />
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {movie.original_title}
                </SubTitle>
                <Description>
                    {movie.overview}
                </Description>
                <MovieDetails>
                    <div>Release Date: {movie.release_date}</div>
                    <div>Rating: {movie.rating}</div>
                    <div>Type: {movie.type}</div>
                </MovieDetails>
            </ContentMeta>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: block;
    top: 90px;
    padding:0px 60px;
`;

const Background = styled.div`
    opacity: 0.6;
    position: fixed;
    right: 0px;
    top: 0px;
    left:0px;
    z-index: -1;
    img {
        width: 100%;
        height: 100%;
        @media (max-width: 768px) {
           width: initial;   //  initial (or default) value of a property to an element
        }
    }
`;


const ImageTitle = styled.div`
    align-items: center;
    display: flex;
    height: 280px;
    img {
       width: 250px;
       border-radius: 30px;
    }
`;


const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-row: row nowrap;
    margin: 0px 0px;
`;

const Player = styled.button`
    font-size: 17px;
    margin: 0px 22px 0px 0px;      //  top | right | bottom | left 
    padding: 30px 34px;
    height: 70px;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #f9f9f9;
    border:none;
    color: #0f0f0f;
    font-weight: bold;
    img {
        width: 60px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        padding: 0px 15px;
         height:45px;
         font-size: 12px;
         img {
            width: 30px;
        }
      }
`;


const Trailer = styled(Player)`
      background:rgba(0,0,0,0.3);
      border: 1px solid #f9f9f9;
      color: #f9f9f9;
      img {
        width: 45px;
     }
    @media (max-width: 768px) {
        padding: 0px 15px;
         height:45px;
         font-size: 12px;
         img {
            width: 30px;
        }
      }
`;

const AddList = styled.div`
      margin-right: 16px;
      height: 70px;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,0.6);
      border-radius: 50%;   // circle
      border: 2px solid #ffffff;
      cursor: pointer;
      img {
        width: 40px;
      }
      @media (max-width: 768px) {
        margin-right: 16px;
        height: 45px;
        width: 45px;
         img {
            width: 20px;
       }
      }
`;

const GroupWatch = styled(AddList)`
`;

const SubTitle = styled.div`
    display: flex;
    padding:35px 0px 0px 0px;                  /* top | right | bottom | left */
    color: rgb(249, 249, 249);
    font-size: 25px;
    min-height: 20px;
     @media (max-width: 768px) {
        font-size: 16px;
     }
`;
const Description = styled.div`
    display: flex;
    padding:10px 0px 10px 0px;                  /* top | right | bottom | left */
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 60px;
    @media (max-width: 768px) {
        font-size: 13px;
     }
`;

const MovieDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding:10px 0px 10px 0px;                  /* top | right | bottom | left */
    color: rgb(249, 249, 249);
    font-size: 20px;
    min-height: 60px;
    @media (max-width: 768px) {
        font-size: 13px;
    }
`;
