import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentsDollar,
  faGameConsoleHandheld,
} from "@fortawesome/sharp-solid-svg-icons";
import * as washing from "../assets/washing.png";

export default function (props: any) {
  // console.log(props.value);
  console.log(props.imgUrl);
  console.log(window.location.origin + "/public" + props.imgUrl);
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
      <h1 className="card--title">Washing Machine</h1>
      <p className="card--description">washing clothes with 100 cpm</p>
      <button className="button ">Enroll</button>
    </div>
  );
}
