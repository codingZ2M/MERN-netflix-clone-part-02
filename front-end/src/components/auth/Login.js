import React from 'react'
import styled from 'styled-components';

const Login = (props) => {
  
    return (
        <div>
            <Container>
                    <BgImage/> 

                    <CTA>
                        <CTALogoOne src="/images/netflix_logo.png" alt=""/>
                        <SignUp>CLICK HERE FOR FUN </SignUp>
                        <Description>
                            Watch anywhere. Cancel anytime. Ready to watch? Enter your email to create or restart your membership.
                        </Description>
                    </CTA>                     
                
            </Container>
        </div>
    )
}

const Container = styled.section`
    overflow: hidden;
    width:100%;    
    height: 100vh;
    position: relative;
    box-sizing: border-box;   // https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0px 40px;        // top and bottom: 0px padding & left and right: 40px padding
`;


const BgImage = styled.div`
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


const CTA = styled.div`
   max-width: 400px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin:0;
   margin-right: auto;
   margin-left: auto;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 300px;
    width: 100%;
`;


const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: #f9f9f9;
    font-size: 13px;
    margin: 0 0 24px;        /* top | right | bottom | left */
    line-height: 20px;
    letter-spacing: 1.5px;
`;


export default Login;

