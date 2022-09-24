import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentsDollar,
  faGameConsoleHandheld,
} from "@fortawesome/sharp-solid-svg-icons";
import React from "react";
import * as washing from "../assets/images/washing.png";
import { Link } from "react-router-dom";
import Product from "../pages/Product";

export default function (props: {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
}) {
  const [count, setCount] = React.useState(0);
  return (
    // you should use productId in link
    <Link to={`/product/${props.id}`}>
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
      </div>
    </Link>
  );
}
