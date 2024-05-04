import React from "react";
import './Styles/MovieCard.css'



export default function MovieCard(props) {
    return (
        <div className="moviecard">
            <img src={props.poster} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.plot}</p>
            <div>
                <p>{props.producer}</p>
                <p>{props.actors}</p>
            </div>
            <p>{props.yor}</p>
        </div>
    )
}