import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentsDollar,
  faGameConsoleHandheld,
} from "@fortawesome/sharp-solid-svg-icons";
import * as washing from "../assets/images/washing.png";

export default function (props: any) {
  // console.log(props.value);
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
      <button className="button ">Enroll</button>
    </div>
  );
}
