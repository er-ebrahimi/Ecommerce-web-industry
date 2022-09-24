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
  let { productId } = useParams();
  const props = { ...data[Number(productId) - 1], amount: 0 };
  let num = Number(productId);
  const dispatchSelected = useAppDispatch();

  const [count, setCount] = React.useState(
    <button className="button " onClick={onClickEnroll}>
      Enroll
    </button>
  );
  const productSelector = useAppSelector((state) => state.SelectedProduct);

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
    // let found = props;
    let found = finding();

    if (found.amount < 1) {
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
          <div className="card--container productDetail--container">
            <img
              src={
                props.id
                  ? window.location.origin + "/public" + props.imgUrl
                  : washing.default
              }
              alt="washing-machine err"
              className="card--image product_detail--image"
            />
            <h1 className="card--title">{props.name}</h1>
            <h3>description</h3>
            <p className="card--description">{props.description}</p>
            {/* TODO discription you should change it Contrary to popular */}
            <p>
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>
            <br />
            <p>{props.price}تومان</p>
            {/* <p>{props.}</p> */}
            {count}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
