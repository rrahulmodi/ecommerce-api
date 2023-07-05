import React from "react";
import DownArrow from "./images2/down-arrow.svg";
import BGImage from "./images2/model-3.jpg";

function section1(props) {
  console.log(props);
  return (
    <section>
      <div
        className="all-top"
        style={{ backgroundImage: "url(" + props.backgroundImg + ")" }}
      >
        <div className="top-banner">
          <h1>{props.model}</h1>
          <p className="top-heading">{props.desc}</p>
          <button className="button-1">{props.btn1}</button>
          {props.btn2 ? <button className="button-2">{props.btn2}</button> : ""}
        </div>
        <div>
          {props.arrow ? <img className="down" src={DownArrow} alt="" /> : ""}
        </div>
      </div>
    </section>
  );
}

export default section1;
