import React from 'react';

function Info (props) {
    console.log(props)
    return (
        <div className="Title">
            <h1>Title: {props.movie.title}</h1>
            <h1>Rating: {props.movie.rating}</h1>
            <h1>Release year: {props.movie.release_year}</h1>

        </div>
    );
};

export default Info;