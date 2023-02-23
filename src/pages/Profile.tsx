import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import { Helmet } from "react-helmet-async";
export default function Profile() {
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
        <title>Profile</title>
      </Helmet>
      <main>
        <div className="section container contact--form--container grid">
          <div>
            <h1 className="icon--profile">
              <FontAwesomeIcon icon={faUserLarge} />
            </h1>
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
              value="Erfan"
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
              value="Ebrahimi"
            />
            <br />
            <label htmlFor="email">
              {" "}
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
              value="erfan.es@gmail.com"
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
              id="password"
              required
              onChange={sginupSetter}
            />
            <br />
            <label htmlFor="password">
              <FormattedMessage
                id="profile.newPassword"
                defaultMessage="New Password:"
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
            <button className="button" type="submit">
              <FormattedMessage id="login.login" defaultMessage="Login" />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
