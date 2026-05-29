import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getMovies,
  addMovie,
  deleteMovie,
  updateMovie,
} from "../services/api/movieService";

import { useDispatch, useSelector } from "react-redux";

import {
  setMovies,
  addMovieRedux,
  deleteMovieRedux,
  updateMovieRedux,
} from "../redux/movieSlice";

export default function MyList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  // FORM STATE
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // EDIT STATE
  const [editingMovie, setEditingMovie] = useState(null);

  // SHOW / HIDE FORM
  const [showForm, setShowForm] = useState(false);

  // GET API
  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies();
      dispatch(setMovies(data));
    }

    fetchMovies();
  }, [dispatch]);

  // ADD + UPDATE
  async function handleAddMovie() {
    if (!title || !image || !category) {
      alert("Semua input wajib diisi!");
      return;
    }

    const movieData = {
      title,
      image,
      category,
    };

    if (editingMovie) {
      const updatedMovie = await updateMovie(editingMovie.id, movieData);

      dispatch(updateMovieRedux(updatedMovie));
      setEditingMovie(null);
    } else {
      const createdMovie = await addMovie(movieData);

      dispatch(addMovieRedux(createdMovie));
    }

    // RESET FORM
    setTitle("");
    setImage("");
    setCategory("");

    // CLOSE FORM
    setShowForm(false);
  }

  // DELETE
  async function handleDeleteMovie(id) {
    await deleteMovie(id);
    dispatch(deleteMovieRedux(id));
  }

  // EDIT
  function handleEditMovie(movie) {
    setEditingMovie(movie);
    setTitle(movie.title);
    setImage(movie.image);
    setCategory(movie.category);
    setShowForm(true);
  }

  return (
    <div className="bg-[#0F1115] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-white text-4xl font-bold">Daftar Saya</h1>

          <button
            onClick={() => {
              if (showForm) {
                setShowForm(false);
                setEditingMovie(null);
                setTitle("");
                setImage("");
                setCategory("");
              } else {
                setShowForm(true);
              }
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            {showForm ? "Tutup" : "+ Tambah Movie"}
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="bg-[#1F1F1F] p-6 rounded-2xl mb-10 max-w-2xl">
            <h2 className="text-white text-2xl font-semibold mb-5">
              {editingMovie ? "Edit Movie" : "Tambah Movie"}
            </h2>

            <div className="flex flex-col gap-4">
              {/* TITLE */}
              <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-3 rounded-lg bg-[#2A2A2A] text-white border border-gray-700 outline-none"
              />

              {/* IMAGE */}
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="px-4 py-3 rounded-lg bg-[#2A2A2A] text-white border border-gray-700 outline-none"
              />

              {/* CATEGORY */}
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-[#2A2A2A] text-white border border-gray-700 outline-none"
              />

              {/* BUTTON */}
              <button
                onClick={handleAddMovie}
                className={`py-3 rounded-lg transition font-semibold ${
                  editingMovie
                    ? "bg-yellow-500 hover:bg-yellow-400 text-black"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {editingMovie ? "Update Movie" : "Tambah Movie"}
              </button>
            </div>
          </div>
        )}

        {/* MOVIE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              {/* IMAGE */}
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-[320px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <h2 className="text-white font-semibold text-sm">
                  {movie.title}
                </h2>

                <p className="text-gray-300 text-xs mt-1">{movie.category}</p>

                {/* ACTION BUTTONS */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEditMovie(movie)}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black text-xs px-3 py-1 rounded-lg transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteMovie(movie.id)}
                    className="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-lg transition"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
