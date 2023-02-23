import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { FormattedMessage } from "react-intl";
import {Helmet} from 'react-helmet-async'
export default function About() {
  return (
    <React.StrictMode>
      <Navbar />
      <Helmet>
       <title>About</title>
      </Helmet>

      <main className="about--main">
        <section className="quote--section about--section grid">
          <div className="quote--container about--container container">
            <h1 className="title about--title">
              {" "}
              <FormattedMessage id="about.title" defaultMessage="About us" />
            </h1>
            <ul className="quote--description about--description">
              <FormattedMessage
                id="about.discription"
                defaultMessage="Arsen Sanat Arvin Company was established in 2016 with the aim of
                designing, developing and upgrading machines in the wood, metal
                and polymer industries, relying on the knowledge of domestic
                experts. And from the very beginning, it has continued its work by
                overcoming many challenges. The activities of this group include
                consulting, innovation in production, as well as localization of
                foreign samples based on the design provided by the employers or
                the specialized team of Arsen Sanat. Our main priority is to
                obtain customer satisfaction by providing products with the
                highest standard and reasonable cost, which is considered as a
                symbol of gaining trust and a new experience for you in preparing
                products."
              />
            </ul>
            <button className="button quote--button">
              {" "}
              <FormattedMessage
                id="about.contact"
                defaultMessage="Contact us"
              />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </React.StrictMode>
  );
}
