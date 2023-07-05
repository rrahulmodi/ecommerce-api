import React from "react";
import Movie from "./Movie";
import urls from "./urls";
import Header from "./Header";
import Banner from "./Banner";
import Toggle from "./Toggle";

function Home() {
  return (
    <div className="below-header">
      <Toggle />
      <Banner />
      <Header />
      <Movie endpoint={urls.netflixOriginals} heading="NETFLIX ORIGINALS" />
      <Movie endpoint={urls.trendingNow} heading="TRENDING NOW" />
      <Movie endpoint={urls.topRated} heading="TOP RATED" />
      <Movie endpoint={urls.actionMovies} heading="ACTION MOVIES" />
      <Movie endpoint={urls.comedyMovies} heading="COMEDY MOVIES" />
      <Movie endpoint={urls.horrorMovies} heading="HORROR MOVIES" />
      <Movie endpoint={urls.romanticMovies} heading="ROMANTIC MOVIES" />
      <Movie endpoint={urls.documentaries} heading="DOCUMENTARIES" />
    </div>
  );
}

export default Home;
