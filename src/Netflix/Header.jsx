import React from "react";
import instance from "./baseUrl";
import { useEffect, useState } from "react";
import urls from "./urls";

const img_base = "https://image.tmdb.org/t/p/original/";
let a = Math.floor(Math.random() * (20 - 1)) + 1;

function Header() {
  const [movieRow, setmovieRow] = useState("");

  useEffect(() => {
    instance.get(urls.trendingNow).then((response) => {
      setmovieRow(response.data.results[a]);
    });
  }, []);
  return (
    <div className="main-box">
      <header
        style={{
          backgroundImage: "url(" + img_base + movieRow.backdrop_path + ")",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="top-header">
          <h2>{movieRow.title}</h2>
          <p>{movieRow.overview}</p>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
