import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function () {
  let [login, setLogin] = React.useState({
    email: "",
    password: "",
  });
  // console.log(login);
  function loginSetter(event: any) {
    const { name, value } = event.target;
    setLogin((login) => ({
      ...login,
      [name]: value,
    }));
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="section container contact--form--container grid">
          <div>
            <h1 className="title contact--title">Login:</h1>
          </div>
          <form action="#" className="contact--form">
            <label htmlFor="email">email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              required
              onChange={loginSetter}
            />
            <br />
            <label htmlFor="password">password:</label>
            <br />
            <input
              type="password"
              className="input"
              id="password"
              name="password"
              onChange={loginSetter}
              required
            />
            <br />
            <a href="/signup" className="signup">
              sign up
            </a>
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
