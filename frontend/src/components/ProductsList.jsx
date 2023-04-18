import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { API_URI } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch(`${API_URI}/products`);
  const products = await response.json();
  return { products };
}

const ProductsList = () => {
  const { products } = useLoaderData();

  const totalPrice = products.reduce(
    (tot, p) => tot + p.unitPrice * p.stock,
    0
  );

  return (
    <>
      <section className="hero is-info is-light">
        <div className="hero-body">
          <div className="level container is-mobile">
            <div className="level-left is-flex-grow-1">
              <p className="title is-1">Products</p>
            </div>
            <div className="level-right">
              <div className="level-item mr-6">
                <div>
                  <h3 className="heading is-size-4 m-0">ITEMS</h3>
                  <h1 className="title is-1">{products.length}</h1>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <h3 className="heading is-size-4 m-0">Total Price</h3>
                  <h1 className="title is-1">{totalPrice}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container p-6">
        {products.length === 0 ? (
          <p>No products added. Be the first one to add</p>
        ) : (
          <>
            <table className="table is-fullwidth is-hoverable is-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th className="has-text-right">Unit Price(USD)</th>
                  <th className="has-text-right">In Stock</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, idx) => (
                  <tr key={p.id}>
                    <td className="has-text-right">{idx + 1}</td>
                    <td>
                      <Link to={`/${p.id}`}>{p.name}</Link>
                    </td>
                    <td className="has-text-right">${p.unitPrice}</td>
                    <td className="has-text-right">{p.stock}</td>
                    <td>{p.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </>
        )}
      </div>
    </>
  );
};

export default ProductsList;
