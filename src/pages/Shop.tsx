import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import data from "../data/data.json";
import Card from "../components/Card";
export default function Shop() {
  console.log(data);
  // let ali = data.map(item => )
  return (
    <React.StrictMode>
      <header className="simple_header">
        <section>
          <Navbar />
          <div className="shop--title--conatainer container section">
            <h3 className="home--title shop--title">Products</h3>
          </div>
        </section>
      </header>
      <main>
        <section className="shop--cards--container container section">
          <div className="shop--container grid">
            {data.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </React.StrictMode>
  );
}
