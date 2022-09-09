import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { stringify } from "querystring";
type ContactData = {
  firstName: String;
  lastName: String;
  email: String;
  problem: String;
};
export default function Contact() {
  const [contactData, setContactData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    problem: "",
  } as ContactData);
  function formSetter(event: any) {
    const { name, value } = event.target;
    setContactData((x) => ({
      ...x,
      [name]: value,
    }));
    console.log(contactData);
  }
  return (
    <React.StrictMode>
      <Navbar />
      <main>
        <div className="section container contact--form--container grid">
          <div>
            <h1 className="title contact--title">Contact us:</h1>
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
              onChange={formSetter}
            />
            <br />
            <label htmlFor="email">Last Name:</label>
            <br />
            <input
              type="email"
              id="last_name"
              name="lastName"
              className="input"
              required
              onChange={formSetter}
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
              onChange={formSetter}
            />
            <br />
            <label htmlFor="textarea">How can we help you?</label>
            <br />
            <textarea
              name="problem"
              className="textarea--form"
              cols={30}
              rows={5}
              id="problem"
              onChange={formSetter}
            ></textarea>
            <br />
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </React.StrictMode>
  );
}
