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
// import { useAppSelector } from "../hooks/hooks";
export default function ShopCard(props: product) {
  //   const props = { ...data[0], amount: 0 };

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
  let index = 0;
  let finding = () => {
    for (let i = 0; i < productSelector.length; i++)
      if (productSelector[i].id === props.id) {
        index = i;
        return productSelector[i];
      }
    return props;
  };
  function onClickEnroll() {
    dispatchSelected(selectedProduct({ ...props, amount: 1 }));
  }
  /**
   * function for passing enroll button or increasing and decreasing button
   */
  function chooseButton() {
    let found = finding();
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
          <p>{productSelector[index].amount}</p>
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
    if (productSelector[index].amount < 2) {
      dispatchSelected(deleteProduct(props));
    }
  }

  return (
    <>
      <div className="card--container shop_card--container">
        <img
          src={
            props.id
              ? window.location.origin + "/public" + props.imgUrl
              : washing.default
          }
          alt="washing-machine err"
          className="card--image product--image"
        />
        <div className="product--discription">
          <h1 className="card--title">{props.name}</h1>
          <p className="card--description">{props.description}</p>
          {count}
        </div>
      </div>
    </>
  );
}
