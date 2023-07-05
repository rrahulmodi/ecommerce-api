import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setPhoto(response.data.results[0].picture.large);
      setName(
        response.data.results[0].name.first +
          "" +
          response.data.results[0].name.last
      );
      setEmail(response.data.results[0].email);
    });
  }, []);
  return (
    <>
      <div className="Randomuser">
        <img src={photo} alt="" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
}

export default Home;
