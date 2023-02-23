import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { FormattedMessage } from "react-intl";
import {Helmet} from 'react-helmet-async'
export default function Sginup() {
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
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <main>
        <div className="section container contact--form--container grid">
          <div>
            <h1 className="title contact--title">Sgin up:</h1>
          </div>
          <form action="#" className="contact--form">
            <label htmlFor="first_name">
              <FormattedMessage
                id="signup.firstName"
                defaultMessage="First Name:"
              />
            </label>
            <br />
            <input
              type="text"
              id="first_name"
              name="firstName"
              className="input"
              required
              onChange={sginupSetter}
            />
            <br />
            <label htmlFor="last_name">
              <FormattedMessage
                id="signup.lastName"
                defaultMessage="Last Name:"
              />
            </label>
            <br />
            <input
              type="text"
              id="last_name"
              name="lastName"
              className="input"
              required
              onChange={sginupSetter}
            />
            <br />
            <label htmlFor="email">
              <FormattedMessage id="login.email" defaultMessage="email:" />
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              required
              onChange={sginupSetter}
            />
            <br />
            <label htmlFor="password">
              <FormattedMessage
                id="login.password"
                defaultMessage="Your Password:"
              />
            </label>
            <br />
            <input
              type="password"
              className="input"
              id="password_test"
              required
              onChange={sginupSetter}
            />
            <br />
            <label htmlFor="password">
              <FormattedMessage
                id="signup.repeat"
                defaultMessage="Repeat Your Password:"
              />
            </label>
            <br />
            <input
              type="password"
              className="input"
              id="password"
              required
              onChange={sginupSetter}
            />
            <br />
            <a href="/login" className="signup">
              <FormattedMessage id="login.login" defaultMessage="Login" />
            </a>
            <br />
            <button className="button" type="submit">
              <FormattedMessage id="login.submit" defaultMessage="Submit" />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
