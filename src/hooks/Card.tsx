import * as washing from "../assets/washing.png";
export default function () {
  return (
    <div className="card--container">
      <img
        src={washing.default}
        alt="washing-machine"
        className="card--image"
      />
      <h1 className="card--title">Washing Machine</h1>
      <p className="card--description">washing clothes with 100 cpm</p>
      <button className="button ">Enroll</button>
    </div>
  );
}
