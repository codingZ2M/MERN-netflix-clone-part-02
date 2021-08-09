import React, {useEffect}from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';  // https://material-ui.com/components/material-icons/
import FindInPageIcon from '@material-ui/icons/FindInPage'; // https://material-ui.com/components/material-icons/
import ListAltIcon from '@material-ui/icons/ListAlt';  // https://material-ui.com/components/material-icons/
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import { auth, provider } from '../data/Firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectUserName,
    selectUserPhoto,
    selectUserEmail,
    setUserLoginDetails,
    setSignOutState,
  } from "../../features/user/userSlice";
  

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName)  // React Hook
    const userPhoto = useSelector(selectUserPhoto)
    const userEmail = useSelector(selectUserEmail)

    // React Hook 'useEffect' will run only once when the app componet is reladed.
    
   useEffect (  ()=> {
        auth.onAuthStateChanged( async (user) => {
            if (user) {
               setUser(user)
             //   history.push("/home")
            }
        }  )
    }, [userName]  );
    

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then( (result) => {
              console.log(result);
              setUser(result.user)
              }).catch((error)=> {
                 alert(error.message);
             })
        }
        else if (userName){
            auth.signOut().then( ()=> {
                dispatch(setSignOutState())
               history.push('/')
            }).catch((error)=> {
                alert(error.message);
            })
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails( {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,

        }  ) )
    }

    return (
        <div>
            <Nav>
             <Logo>
                 <img src="/images/netflix_logo_small.png" alt="Disney"/>
             </Logo>
             { 
                !userName ? 
                <Login onClick={handleAuth} >Login</Login> 
                : 
                <>
             <NavMenu>
                 <Link to ="/home">
                    <HomeIcon/>
                    <span>HOME</span>
                 </Link>
                 <a href="/home">
                    <FindInPageIcon/>
                    <span>SEARCH</span>
                 </a>
                 <a href="/home">
                    <ListAltIcon/>
                    <span>WATCHLIST</span>
                 </a>
                 <a href="/home">
                   <AddToQueueIcon/>
                    <span>ORIGINALS</span>
                 </a>
                 <a href="/home">
                    <MovieIcon/>
                    <span>MOVIES</span>
                 </a>
                 <a href="/movie-entry">
                    <LiveTvIcon/>
                    <span>ADD MOVIE</span>
                 </a>
             </NavMenu>
             <SignOut>
                <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                    <span onClick={handleAuth} >Sign Out</span>
                </DropDown>
            </SignOut>
             </>
            }
            </Nav>
        </div>
    )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#0f0f0f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    letter-spacing: 15px;
    z-index: 1;
`;

const Logo = styled.a`
    width:100px;
    margin-top: 0px;
    display: inline-block;   //  Element generates one or more inline element boxes that do not generate line breaks before or after themselves
    img {
        display: block;     // https://developer.mozilla.org/en-US/docs/Web/CSS/display
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-Items: center;
    display: flex;
    flex-flow: row nowrap;  // specifies the direction of a flex container, as well as its wrapping behavior.
    height: 100%;
    margin:0px;
    padding:0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items; center;
        padding: 0 12px;
           
    span {
        color: #f9f9f9;
        font-size: 13px;
        letter-spacing: 1.42px;
        padding: 2px 3px;
        position: relative;
        &:hover {
            color: #DC143C;
          
        }
    }

    @media (max-width: 768px ){
        display: none;
    }
`;


const Login = styled.a`
    background-color: #0f0f0f;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;

    &: hover {
        background-color: #f9f9f9;
        color: #000000;
        border-color:  transparent;
        cursor: pointer;
    }
`;


const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 58px;
    right: 60px;
    background: rgb(19, 19,19);
    border: 1px solid rgb(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px;
    padding: 10px;  
    font-size: 14px;
    letter-spacing: 3px;
    width: 110px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: absolute:
    height: 48px:
    width: 48px;
    display: flex;
    cursor:pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 60%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;