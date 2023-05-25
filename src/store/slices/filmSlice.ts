import { createSlice } from '@reduxjs/toolkit';
import { catalogData } from '../data';

const initialState = {
  films: catalogData
};

const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    updateFilm(state, action) {
      state.films.map(film => {
        if (film.id === action.payload.film.id) {
          film.filmLang[0].filmName = action.payload.film.name;
          film.filmDate = action.payload.film.years;
          film.genres = action.payload.film.genres;
          film.countries = action.payload.film.countries;
          // film.actors = action.payload.film.actors;
        }
        return film;
      });
    },
    removeFilm(state, action) {
      let index = -1;
      for (let i = 0; i < state.films.length; i++) {
        if (state.films[i].id == action.payload.film.id) index = i;
      }
      state.films.splice(index, 1)
    }
  }
});

export const { updateFilm, removeFilm } = filmSlice.actions;
export default filmSlice.reducer;
