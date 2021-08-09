import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    netflixOriginals: "",
    actions: "",
    topRated: "",
    trending:"",
    
}

const movieSlice  = createSlice(  {
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
           state.netflixOriginals = action.payload.netflixOriginals;
           state.actions = action.payload.actions;
           state.topRated = action.payload.topRated;
           state.trending = action.payload.trending;

        },
    },
}  )

export const {setMovies } = movieSlice.actions;


export const selecteNetflixOriginals = (state) => state.movie.netflixOriginals;
export const selectActions = (state) => state.movie.actions;
export const selectTopRated = (state) => state.movie.topRated;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;