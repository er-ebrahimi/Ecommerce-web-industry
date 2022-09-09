import React from "react";
import Navbar from "../components/Navbar";
import * as home from "../assets/Home.jpg";
import * as line from "../assets/Group.png";
import Footer from "../components/Footer";
import Card from "../components/Card";
import data from "../data/data.json";
// declare module "*.jpg"

export default function Home() {
  // const home = require("../assets/Home.jpg")
  // console.log(home.default);
  let count: number = 0;
  let cards: any = data.map((x) => {
    count++;
    if (count < 2) {
      return <Card key={x.id} {...x} />;
    }
    count = 0;
  });
  return (
    <React.StrictMode>
      <header className="header">
        <Navbar />
        <section className="section grid home--section">
          <div className="container  home--container">
            <h1 className="home--title title">Arsen Industry</h1>
            <p className="home--description">
              Top company in the field of manufacturing <br /> and importing
              industrial parts
            </p>
            <button className="button home--button">Next</button>
          </div>
        </section>
      </header>
      <main>
        <section className="section product--section container">
          <h1 className="product--title">Our products</h1>
          <div className="product--container">
            {/* <Card />
            <Card /> */}
            {cards}
          </div>
        </section>
        <div className="activity--background">
          <section className="activity--section container section">
            <h1 className="activity--title title">Activity</h1>
            <p className="activity--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </section>
        </div>
        <section className="quote--section grid">
          <img src={line.default} alt="line" className="quote--line" />
          <div className="quote--container container">
            <h1 className="title quote--title">our services</h1>
            <ul className="quote--description">
              <li>
                Consultation, modification and updating of existing machines in
                the industry.
              </li>
              <li>
                Designing and manufacturing machines based on the plan provided
                by the employer.
              </li>
              <li>
                Design and manufacture of machines based on the design of Arsen
                Sanat experts.
              </li>
            </ul>
            <button className="button quote--button">quote</button>
          </div>
        </section>
      </main>
      <Footer />
    </React.StrictMode>
  );
}
