import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentsDollar,
  faGameConsoleHandheld,
} from "@fortawesome/sharp-solid-svg-icons";
import React from "react";
import * as washing from "../assets/images/washing.png";

export default function (props: any) {
  // console.log(props.value);
  // let count: number = 0;
  const [count, setCount] = React.useState(0);
  return (
    <div className="card--container">
      <img
        src={
          props.id
            ? window.location.origin + "/public" + props.imgUrl
            : washing.default
        }
        alt="washing-machine err"
        className="card--image"
      />
      <h1 className="card--title">{props.name}</h1>
      <p className="card--description">{props.description}</p>
      {count > 0 ? (
        <div className="change_button--container">
          <button
            className="button change_button"
            onClick={() => setCount(() => count - 1)}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className="button change_button"
            onClick={() => setCount(() => count + 1)}
          >
            +
          </button>
        </div>
      ) : (
        <button className="button " onClick={() => setCount(() => count + 1)}>
          Enroll
        </button>
      )}
    </div>
  );
}
