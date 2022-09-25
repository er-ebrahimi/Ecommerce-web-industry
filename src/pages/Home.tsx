import React from "react";
import Navbar from "../components/Navbar";
import * as home from "../assets/Home.jpg";
import Footer from "../components/Footer";
import Card from "../components/Card";
import data from "../data/data.json";
import { FormattedMessage } from "react-intl";
import { lan_string } from "../main";
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

  if (lan_string === "Persian") {
    const activityBackground = document.getElementsByClassName(
      "activity--background"
    );
    // activityBackground[0].setAttribute("style", "background-position: left;");
  }
  return (
    <React.StrictMode>
      <header className="header">
        <Navbar />
        <section className="section grid home--section">
          <div className="container  home--container">
            <h1 className="home--title title">
              <FormattedMessage
                id="app.header"
                defaultMessage="Arsen Industry"
              />
            </h1>
            <p className="home--description">
              <FormattedMessage
                id="app.description"
                defaultMessage="Top company in the field of manufacturing <br /> and importing
              industrial parts"
              />
            </p>
            <button className="button home--button">
              <FormattedMessage id="app.button" defaultMessage="Next" />
            </button>
          </div>
        </section>
      </header>
      <main>
        <section className="section product--section container">
          <div className="product--data">
            <h1 className="product--title">Our products</h1>
            <div className="product--container">
              {/* <Card />
            <Card /> */}
              {cards}
            </div>
          </div>
        </section>
        <div className="activity--background">
          <section className="activity--section section">
            <div className="activity--container container">
              <div className="activity--data">
                <h1 className="activity--title title">
                  <FormattedMessage
                    id="activity.title"
                    defaultMessage="Activity"
                  />
                </h1>
                <ul className="quote--description">
                  <li>
                    <FormattedMessage
                      id="activity.description1"
                      defaultMessage=""
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id="activity.description2"
                      defaultMessage=""
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id="activity.description3"
                      defaultMessage=""
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id="activity.description4"
                      defaultMessage=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <section className="quote--section grid">
          <div className="quote--container container">
            <h1 className="quote--title title">
              <FormattedMessage
                id="quote.title"
                defaultMessage="our services"
              />
            </h1>
            <ul className="quote--description">
              <li>
                <FormattedMessage
                  id="quote.description1"
                  defaultMessage="Consultation, modification and updating of existing machines in
                  the industry."
                />
              </li>
              <li>
                <FormattedMessage
                  id="quote.description2"
                  defaultMessage="Designing and manufacturing machines based on the plan provided
                  by the employer."
                />
              </li>
              <li>
                <FormattedMessage
                  id="quote.description3"
                  defaultMessage="Design and manufacture of machines based on the design of Arsen
                  Sanat experts."
                />
              </li>
            </ul>
            <button className="button quote--button">
              <FormattedMessage id="quote.button" defaultMessage="quote" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </React.StrictMode>
  );
}
