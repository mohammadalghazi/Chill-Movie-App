import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import myListMovies from "../data/myListMovies";

export default function MyList() {

        const [movies, setMovies] =
        useState(myListMovies);

        const [title, setTitle] =
        useState("");

        const [image, setImage] =
        useState("");

        const [category, setCategory] =
        useState("");

        function handleAddMovie() {

        // validasi sederhana
        if (!title || !image || !category) {
            alert("Semua input wajib diisi!");
            return;
        }

        const newMovie = {
            id: Date.now(),
            title: title,
            image: image,
            category: category,
        };

        setMovies([
            ...movies,
            newMovie,
        ]);

        // reset input
        setTitle("");
        setImage("");
        setCategory("");
        }

        function handleDeleteMovie(id) {

        const filteredMovies =
            movies.filter(
            (movie) => movie.id !== id
            );

        setMovies(filteredMovies);
        }

    return (
        <div className="bg-[#0F1115] min-h-screen">

        <Navbar />

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28">

            <h1
            className="
                text-white
                text-4xl
                font-bold
                mb-10
            "
            >
            Daftar Saya
            </h1>

            {/* Add Movie Form */}
            <div
            className="
                bg-[#1F1F1F]
                p-6
                rounded-2xl
                mb-10
                max-w-2xl
            "
            >

            <h2
                className="
                text-white
                text-2xl
                font-semibold
                mb-5
                "
            >
                Tambah Movie
            </h2>

            <div className="flex flex-col gap-4">

                {/* Title */}
                <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                className="
                    px-4
                    py-3
                    rounded-lg
                    bg-[#2A2A2A]
                    text-white
                    border
                    border-gray-700
                    outline-none
                "
                />

                {/* Image */}
                <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                    setImage(e.target.value)
                }
                className="
                    px-4
                    py-3
                    rounded-lg
                    bg-[#2A2A2A]
                    text-white
                    border
                    border-gray-700
                    outline-none
                "
                />

                {/* Category */}
                <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value)
                }
                className="
                    px-4
                    py-3
                    rounded-lg
                    bg-[#2A2A2A]
                    text-white
                    border
                    border-gray-700
                    outline-none
                "
                />

                {/* Button */}
                <button
                onClick={handleAddMovie}
                className="
                    bg-blue-600
                    hover:bg-blue-500
                    text-white
                    py-3
                    rounded-lg
                    transition
                    font-semibold
                "
                >
                Tambah Movie
                </button>

            </div>

            </div>

            {/* Movie Grid */}
            <div
            className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                gap-6
            "
            >
            {movies.map((movie) => (

                <div
                key={movie.id}
                className="
                    relative
                    rounded-xl
                    overflow-hidden
                    hover:scale-105
                    transition
                    duration-300
                    cursor-pointer
                "
                >

                {/* Poster */}
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="
                    w-full
                    h-[320px]
                    object-cover
                    "
                />

                {/* Overlay */}
                <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    bg-gradient-to-t
                    from-black
                    to-transparent
                    p-3
                    "
                >

                    <h2
                    className="
                        text-white
                        font-semibold
                        text-sm
                    "
                    >
                    {movie.title}
                    </h2>

                    <p
                    className="
                        text-gray-300
                        text-xs
                        mt-1
                    "
                    >
                    {movie.category}
                    </p>

                    <button
                    onClick={() =>
                        handleDeleteMovie(movie.id)
                    }
                    className="
                        mt-3
                        bg-red-600
                        hover:bg-red-500
                        text-white
                        text-xs
                        px-3
                        py-1
                        rounded-lg
                        transition
                    "
                    >
                    Hapus
                    </button>

                </div>

                </div>

            ))}
            </div>

        </div>

        <Footer />

        </div>
    );
    }