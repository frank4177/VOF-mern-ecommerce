import React, { useEffect, useState } from "react";
import "./Products.css";
import womanShoe2 from "./imagesWoman/womanShoe2.jpg";
import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
  StarRate,
  StarBorderRounded,
  StarRounded,
} from "@material-ui/icons";
import FeaturedProductsProp from "./ProductsProp";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [featuredCollection, setFeaturedCollection] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // API call for product list
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://vofshoes.herokuapp.com/api/Products?category=${cat}`
            : "https://vofshoes.herokuapp.com/api/Products"
        );

        setProducts(res.data.products);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);



  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
  }, [sort]);

  return (
    <div className="featured-container">
      <div className="image-container">
        {
          filteredProducts.map((item) => (
            <FeaturedProductsProp item={item} key={item.id} />
          ))
          
        }
      </div>
    </div>
  );
};

export default Products;
