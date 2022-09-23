import { useParams } from "react-router-dom";
import data from "../data/data.json";
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
// import { useAppSelector } from "../hooks/hooks";
export default function Product() {
  const props = { ...data[0], amount: 0 };

  const dispatchSelected = useAppDispatch();

  const [count, setCount] = React.useState(
    <button className="button " onClick={onClickEnroll}>
      Enroll
    </button>
  );
  const productSelector = useAppSelector((state) => state.SelectedProduct);
  //   const thisPageProduct = //TODO find product with useParams then initilize it with this
  //change button
  useEffect(() => {
    chooseButton();
  }, [productSelector]);

  function onClickEnroll() {
    dispatchSelected(selectedProduct({ ...props, amount: 1 }));
  }
  /**
   * function for passing enroll button or increasing and decreasing button
   */
  function chooseButton() {
    let found = props;
    if (productSelector.length === 0) {
      setCount(
        <button className="button " onClick={onClickEnroll}>
          Enroll
        </button>
      );
    } else {
      setCount(
        <div className="change_button--container">
          <button className="button change_button" onClick={decreasingAmount}>
            -
          </button>
          <p>{productSelector[0].amount}</p>
          <button className="button change_button" onClick={increasingAmount}>
            +
          </button>
        </div>
      );
    }
  }

  function increasingAmount() {
    dispatchSelected(incrementProduct(props));
  }
  function decreasingAmount() {
    dispatchSelected(decrementProduct(props));
    if (productSelector[0].amount < 2) {
      dispatchSelected(deleteProduct(props));
    }
  }

  return (
    <>
      <header className="simple_header">
        <section>
          <Navbar />
          <div className="shop--title--conatainer container section">
            <h3 className="home--title shop--title">{props.name}</h3>
          </div>
        </section>
      </header>
      <main>
        <section className="product--cards--container container section">
          <div className="card--container">
            <img
              src={
                props.id
                  ? window.location.origin + "/public" + props.imgUrl
                  : washing.default
              }
              alt="washing-machine err"
              className="card--image"
            />
            <h1 className="card--title">{props.name}</h1>
            <p className="card--description">{props.description}</p>
            {count}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
