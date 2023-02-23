import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { FormattedMessage } from "react-intl";
import { product } from "../utility/types";
import axios from 'axios';
import { setProduct } from "../redux/feature/ProductSlice";
import {Helmet} from 'react-helmet-async'

/**
 * fetching data from back
 */
const fetchRequest = 'FETC_REQUEST';
const fetchSuccess = 'FETCH_SUCCESS';
const fetchFail = 'FETCH_FAIL';

const reducer= (state: any, action: any) => {
  switch (action.type) {
    case fetchRequest:
      return {...state,loading: true}
    case fetchSuccess:
      return {...state,loading: false,productsReducer: action.payload}
    case fetchFail:
      return {...state,loading: false,error: action.payload}
    default:
      return state;
  }
};

export default function Shop() {
  const [{loading,productsReducer,error},dispatchReducer] = React.useReducer(reducer,{loading: false,productsReducer: [],error: ''});
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productReducer.product);
  const fetchData = async () => {
    dispatchReducer({type: fetchRequest});
    try {
      const response = await axios.get("/api/products");
      dispatchReducer({type: fetchSuccess,payload: response.data});
      dispatch(setProduct(response.data ));//TODO you are saving data two times one time in dispatch one time in dispatchReducer
    } catch (error:any) {
      dispatchReducer({type: fetchFail ,payload: error.message});
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const dispatch = useAppDispatch();
  function setAllProducts(products: any) {
    return products.map((item: any) => {
      return <Card key={item.id} {...item} />;
    });
  }
  return (
    <React.StrictMode>
      <header className="simple_header">
        <section>
          <Navbar />
          <Helmet>
        <title>Arsen</title>
      </Helmet>
          <div className="shop--title--conatainer container section">
            <h3 className="home--title shop--title">
              <FormattedMessage
                id="product.title"
                defaultMessage="Our products"
              />
            </h3>
          </div>
        </section>
      </header>
      <main>
        <section className="shop--cards--container container section">
          <div className="shop--container grid">{
          loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> :
          setAllProducts(products)}</div>
        </section>
      </main>
      <Footer />
    </React.StrictMode>
  );
}