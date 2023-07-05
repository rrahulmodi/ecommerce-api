import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function getRandomData() {
    axios.get("https://randomuser.me/api/").then((response) => {
      setPhoto(response.data.results[0].picture.large);
      setName(
        response.data.results[0].name.first +
          "" +
          response.data.results[0].name.last
      );
      setEmail(response.data.results[0].email);
    });
  }
  return (
    <>
      <button onClick={getRandomData}>Random User Call</button>
      <div className="randomData">
        <img src={photo} alt="name" />
        <h3>{name}</h3>
        <h3>{email}</h3>
      </div>
    </>
  );
}

export default Home;
