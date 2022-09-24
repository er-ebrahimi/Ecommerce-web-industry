import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function () {
  const [sginup, setSginup] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function sginupSetter(event: any) {
    const { name, value } = event.target;
    setSginup((sginup) => ({
      ...sginup,
      [name]: value,
    }));
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="section container contact--form--container grid">
          <div>
            <h1 className="icon--profile">
              <FontAwesomeIcon icon={faUserLarge} />
            </h1>
          </div>
          <form action="#" className="contact--form">
            <label htmlFor="first_name">First Name:</label>
            <br />
            <input
              type="text"
              id="first_name"
              name="firstName"
              className="input"
              required
              onChange={sginupSetter}
              value="Erfan"
            />
            <br />
            <label htmlFor="last_name">Last Name:</label>
            <br />
            <input
              type="text"
              id="last_name"
              name="lastName"
              className="input"
              required
              onChange={sginupSetter}
              value="Ebrahimi"
            />
            <br />
            <label htmlFor="email">email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              required
              onChange={sginupSetter}
              value="erfan.es@gmail.com"
            />
            <br />
            <label htmlFor="password">Your Password:</label>
            <br />
            <input
              type="password"
              className="input"
              id="password"
              required
              onChange={sginupSetter}
            />
            <br />
            <label htmlFor="password">New Password:</label>
            <br />
            <input
              type="password"
              className="input"
              id="password"
              required
              onChange={sginupSetter}
            />
            <br />
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
