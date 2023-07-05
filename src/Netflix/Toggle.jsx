import React from "react";
import "./app.css";

function Toggle() {
  const shoot = (a) => {
    alert(a);
  };

  return (
    <>
      <button className="central" onClick={() => shoot("Goal!")}>
        Take the shot!
      </button>
      ;
    </>
  );
}

export default Toggle;
