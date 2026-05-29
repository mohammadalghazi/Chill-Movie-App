import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

console.log(BASE_URL);

export async function getMovies() {
  try {
    const response = await axios.get(BASE_URL);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);

    return [];
  }
}

// POST movie
export async function addMovie(movie) {
  try {
    const response = await axios.post(BASE_URL, movie);

    return response.data;
  } catch (error) {
    console.error("Error adding movie:", error);
  }
}

// DELETE movie
export async function deleteMovie(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting movie:", error);
  }
}

// UPDATE movie
export async function updateMovie(id, updatedMovie) {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedMovie);

    return response.data;
  } catch (error) {
    console.error("Error updating movie:", error);
  }
}
