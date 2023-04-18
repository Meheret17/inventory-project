import { useLoaderData } from "react-router-dom";
import { API_URI } from "../utils";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-carousel/dist/css/bulma-carousel.min.css";
import { useEffect } from "react";

export async function loader({ params }) {
  const response = await fetch(`${API_URI}/products/${params.id}`);
  const product = await response.json();
  return { product };
}
const Product = () => {
  const {
    product: { name, unitPrice, stock, images, category, description },
  } = useLoaderData();

  useEffect(() => {
    bulmaCarousel.attach("#carousel-demo", {
      loop: true,
      autoplay: true,
      navigationKeys: false,
    });
  }, []);

  return (
    <div className="container section content">
      <div className="level mb-2">
        <div className="level-left flex-3">
          <div>
            <p className="heading">{category}</p>
            <p className="title is-1">{name}</p>
          </div>
        </div>
        <div className="level-right ml-4 flex-1">
          <div>
            <h3 className="title is-2 has-text-weight-light">${unitPrice}</h3>
            <h6 className="subtitle is-4 mb-2 has-text-weight-light">
              <b>{stock}</b> in stock
            </h6>
          </div>
        </div>
      </div>
      <p>{description}</p>

      <section className="has-carousel">
        <div id="carousel-demo" className="hero-carousel">
          {images.map((i, idx) => (
            <figure className="image is-16by9" key={idx}>
              <img src={i} alt={name + " " + idx + 1} />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
