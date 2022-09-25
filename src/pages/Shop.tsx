import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import data from "../data/data.json";
import Card from "../components/Card";
import { setProduct, product } from "../redux/feature/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { FormattedMessage } from "react-intl";
export default function Shop() {
  // let ali = data.map(item => )
  // const product = useSeletor((state) => state)
  const dispatch = useAppDispatch();
  // console.log(typeof data[0].id);
  // data.map((oneData) => dispatch(setProduct(oneData)));
  const products = useAppSelector((state) => state.productReducer.product);
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
          <div className="shop--container grid">{setAllProducts(products)}</div>
        </section>
      </main>
      <Footer />
    </React.StrictMode>
  );
}
