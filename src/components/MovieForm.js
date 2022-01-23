import React, { useState } from "react";

const MovieForm = (props) => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [errorTitle, setErrorTitle] = useState("");
    const [errorYear, setErrorYear] = useState("");

    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("");
    }

    const validateForm = () => {
        resetErrors();
        let isValidated = true;
        if (!movieTitle) {
            setErrorTitle("Type a movie title.");
            isValidated = false;
        }

        if (!movieYear) {
            setErrorYear("Type a movie year.");
            isValidated = false;
        }

        return isValidated;
    }

    const resetErrors = () => {
        setErrorTitle("");
        setErrorYear("");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {

            props.addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear,
            })
            resetErrors();
            resetForm();
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={movieTitle}
                placeholder="Movie Title"
                onChange={e => setMovieTitle(e.target.value)}
            /><br />
            <div style={{ color: 'red' }}>{errorTitle}</div>
            <input
                type="number"
                value={movieYear}
                placeholder="Movie Year"
                onChange={e => setMovieYear(e.target.value)}
            /><br />
            <div style={{ color: 'red' }}>{errorYear}</div>
            <button type="submit">Add Movie</button>

        </form>

    )
}

export default MovieForm;