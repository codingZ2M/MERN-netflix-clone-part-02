import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const MovieEntry = () => {

    const [movie, setMovie] = useState({
        original_language:"",
        original_title: "",
        poster_path: "",
        overview: "",
        release_date: "",
        adult: "",
        backdrop_path: "",
        media_type: "",
        type:"",
        rating: "",
        numReviews: "",
    })
    const  [submitted, setSubmitted] = useState(false);
    const  [valid, setValid] = useState(false);

    const handleOriginalLanguageInputChange = (event) => {
        setMovie({...movie, original_language: event.target.value })
    }
    const handleOriginalTitleInputChange = (event) => {
        setMovie({...movie, original_title: event.target.value })
    }
    const handlePosterPathInputChange = (event) => {
        setMovie({...movie, poster_path: event.target.value })
    }
    const handleOverviewInputChange = (event) => {
        setMovie({...movie, overview: event.target.value })
    }
    const handleReleaseDateInputChange = (event) => {
        setMovie({...movie, release_date: event.target.value })
    }
    const handleAdultInputChange = (event) => {
        setMovie({...movie, adult: event.target.value })
    }
    const handleBackdropPathInputChange = (event) => {
        setMovie({...movie, backdrop_path: event.target.value })
    }
    const handleMediaTypeInputChange = (event) => {
        setMovie({...movie, media_type: event.target.value })
    }

    const handleTypeInputChange = (event) => {
        setMovie({...movie, type: event.target.value })
    }
    const handleRatingInputChange = (event) => {
        setMovie({...movie, rating: event.target.value })
    }
    const handleNumReviewsInputChange = (event) => {
        setMovie({...movie, numReviews: event.target.value })
    }

    const handleSubmit = (event) => {
           event.preventDefault();
           if (movie.original_language && movie.original_title &&
            movie.poster_path && movie.overview && movie.release_date &&
            movie.adult && movie.backdrop_path && movie.media_type &&
            movie.type && movie.rating && movie.numReviews
              ) {
                setValid(true);
                axios.post('/api/action-movie', {
                    original_language: movie.original_language,
                    original_title: movie.original_title,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    adult: movie.adult,
                    backdrop_path: movie.backdrop_path,
                    media_type: movie.media_type,
                    type: movie.type,
                    rating: movie.rating,
                    numReviews: movie.numReviews
                           }
                         )
             }
           setSubmitted(true);
    }

    return (
      <Container>
        <MovieEntryFormContainer>
            <Form onSubmit = {handleSubmit}>
                {submitted && valid ? <div>Success!</div> : null }
            <Fieldset>
                <Title>Add Movie</Title>
                <Input type="text" value={movie.original_language} name="original_language"
                onChange={handleOriginalLanguageInputChange} placeholder="Original Language" />
                {submitted && !movie.original_language ? <Span>Enter Original Language</Span> : null }

                <Input type="text" value={movie.original_title} name="original_title" 
                onChange={handleOriginalTitleInputChange} placeholder="Original Title" />
                {submitted && !movie.original_title ? <Span>Enter Original Title</Span> : null }

                <Input type="text" value={movie.poster_path} name="poster_path" 
                onChange={handlePosterPathInputChange} placeholder="Poster Path" />
                {submitted && !movie.poster_path ? <Span>Enter Poster Path</Span> : null }

                <TextArea value={movie.overview} name="overview" 
                onChange={handleOverviewInputChange} placeholder="Overview"/>
                {submitted && !movie.overview ? <Span>Enter Overview</Span> : null }

                <Input type="text" value={movie.release_date} name="release_date" 
                onChange={handleReleaseDateInputChange} placeholder="Release Date" />
                {submitted && !movie.release_date ? <Span>Enter Release Date</Span> : null }

                <Input type="text" value={movie.adult} name="adult" 
                onChange={handleAdultInputChange} placeholder="Adult" />
                {submitted && !movie.adult ? <Span>Enter Adult</Span> : null }

                <Input type="text" value={movie.backdrop_path} name="backdrop_path" 
                onChange={handleBackdropPathInputChange} placeholder="Backdrop Path" />
                {submitted && !movie.backdrop_path ? <Span>Enter Backdrop Path</Span> : null }

                <Input type= "text" value={movie.media_type} name="media_type" 
                onChange={handleMediaTypeInputChange} placeholder="Media Type" />
                {submitted && !movie.media_type ? <Span>Enter Media Type</Span> : null }

                <Input type="text" value={movie.type} name="type" 
                onChange={handleTypeInputChange} placeholder="Type" />
                {submitted && !movie.type ? <Span>Enter Type</Span> : null }

                <Input type="text" value={movie.rating} name="rating" 
                onChange={ handleRatingInputChange} placeholder="Rating" />
                {submitted && !movie.rating ? <Span>Enter Rating</Span> : null }

                <Input type="text" value={movie.numReviews} name="numReviews" 
                onChange={handleNumReviewsInputChange} placeholder="Number of Reviews" />
                {submitted && !movie.numReviews ? <Span>Enter Number of Reviews</Span> : null }
    
                <AddMovie onClick={handleSubmit}>ADD MOVIE</AddMovie> 
            </Fieldset>
        </Form>
    </MovieEntryFormContainer>
  </Container>
    )
}

export default MovieEntry

const Container = styled.div`
    position: fixed;
    z-index: -1;
    height: 100%;
    background-position:top;  // https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
    background-size: cover;   // Scales the image as large as possible to fill the container, stretching the image if necessary.
    background-repeat: no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
            url("/images/login-background.jpg");
    position: absolute;            // https://developer.mozilla.org/en-US/docs/Web/CSS/position
                                   //  It is positioned relative to its closest positioned ancestor                             
    top:0px;
    left: 0;
    right:0;
    z-index: -1;   // Giving low priority, anything can be added on top of BgImage 
`;

const MovieEntryFormContainer = styled.div`
    width: 40%;
    margin: 50px auto;
    text-align: center;
    position: relative;
    margin-top: 100px;
`;


const Form = styled.form`
`;

const Fieldset = styled.div`
background: white;
border: 0 none;
border-radius: 3px;
box-shadow: 5px 5px 5px 5px #525151;
padding: 20px 30px;
box-sizing: border-box;
width: 80%;
margin: 0 10%;
display: flex;
flex-direction: column;
`;

const Input = styled.input`
padding: 15px;
border: 1px solid #ccc;
border-radius: 3px;
margin-bottom: 10px;
width: 100%;
box-sizing: border-box;
font-family: montserrat;
color: #2C3E50;
font-size: 12px;

`;

const TextArea = styled.textarea`
padding: 15px;
border: 1px solid #ccc;
border-radius: 3px;
margin-bottom: 10px;
width: 100%;
box-sizing: border-box;
font-family: montserrat;
color: #2C3E50;
font-size: 12px;
`;

const AddMovie = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    margin-top: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    display: inline-block;

    &:hover {
        background-color: #0483ee;
    }
`;

const Title = styled.h1`
font-size: 15px;
text-transform: uppercase;
color: #2C3E50;
margin-bottom: 10px;
`;

 const Span = styled.span`
 font-size: 12px;
 color: #D10000;
`;