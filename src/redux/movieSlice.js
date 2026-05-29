import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],

  loading: false,

  error: null,
};

const movieSlice = createSlice({
  name: "movies",

  initialState,

  reducers: {
    // GET MOVIES
    setMovies: (state, action) => {
      state.movies = action.payload;
    },

    // ADD MOVIE
    addMovieRedux: (state, action) => {
      state.movies.push(action.payload);
    },

    // DELETE MOVIE
    deleteMovieRedux: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );
    },

    // UPDATE MOVIE
    updateMovieRedux: (state, action) => {
      state.movies = state.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie,
      );
    },
  },
});

export const {
  setMovies,

  addMovieRedux,

  deleteMovieRedux,

  updateMovieRedux,
} = movieSlice.actions;

export default movieSlice.reducer;
