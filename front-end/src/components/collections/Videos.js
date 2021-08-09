import styled from "styled-components";
import React from 'react';

const Viewers = (props) => {
    return (
        <div>
            <Container>
                <Wrap>
                <img src="/images/videoo_bg_image01.jpg" />
                    <video autoPlay={true} loop={true} playsInline={true}>
                         <source src="/videos/trailer01.mp4" type="video/mp4" /> 
                    </video>
                </Wrap>
                <Wrap>
                <img src="/images/videoo_bg_image02.jpg" />
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/trailer02.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                <img src="/images/videoo_bg_image03.jpg" />
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/trailer03.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                <img src="/images/videoo_bg_image04.jpg" />
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/trailer04.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                <img src="/images/videoo_bg_image05.jpg" />
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/trailer05.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </Container>
        </div>
    )
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 10px 26px;
    display:grid;   //The element behaves like a block element and lays out its content according to the grid model.
    grid-gap: 25px;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Wrap = styled.div`
    padding-top: 55.00%;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #525151;  // /* offset-x | offset-y | blur-radius | spread-radius | color */
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);  // https://www.w3schools.com/cssref/func_cubic-bezier.asp
    border: 3px solid #424141;
        img {
        inset: 0px;     // https://developer.mozilla.org/en-US/docs/Web/CSS/inset
        display: block;
        height: 100%;
        object-fit: cover;    // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
        opacity: 1;
        position: absolute;
        z-index: 1;
        }
        video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left:0px;
            right: 0px;
            opacity: 0;
            z-index: 0;
         }

    &:hover {
        box-shadow: 4px 4px 4px 1px #525151; 
        transform: scale(1.05);
        border-color: #f9f9f9;
        video {
            opacity: 1;
            z-index: 1;
        }
        img {
            opacity: 0;
            z-index: 0;
        }
}
`;