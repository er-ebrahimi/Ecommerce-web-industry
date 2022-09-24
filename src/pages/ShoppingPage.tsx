import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import * as washing from "../assets/images/washing.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  selectedProduct,
  incrementProduct,
  decrementProduct,
  deleteProduct,
} from "../redux/feature/SelectedProduct";
import { product } from "../utility/types";
import ShopCard from "../components/ShopCard";
// import { useAppSelector } from "../hooks/hooks";
export default function ShopProduct() {
  const shopSelector = useAppSelector((state) => state.SelectedProduct);
  function allShopCard() {
    return shopSelector.map((element) => {
      return <ShopCard key={element.id} {...element} />;
    });
  }
  return (
    <>
      <header className="simple_header">
        <section>
          <Navbar />
        </section>
      </header>
      <main className="">
        <section className=" product_card--main product--cards--container container section">
          {allShopCard().length ? (
            allShopCard()
          ) : (
            <p className="section"> You didn't choose any thing</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
