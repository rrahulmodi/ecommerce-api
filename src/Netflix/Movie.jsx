import React from "react";
import instance from "./baseUrl";
import { useEffect, useState } from "react";
import "./app.css";

const img_base = "https://image.tmdb.org/t/p/original/";

export default function Movie(props) {
  const [movieRow, setmovieRow] = useState([]);
  //   const [email, setEmail] = useState("");
  //   const [name, setName] = useState("");

  useEffect(() => {
    instance.get(props.endpoint).then((response) => {
      setmovieRow(response.data.results);
    });
  }, []);
  return (
    <>
      <h2>{props.heading}</h2>
      <div className="movie-row">
        {movieRow.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <img src={img_base + movie.poster_path} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
