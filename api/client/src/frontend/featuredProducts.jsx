import React, { useEffect, useState } from "react";
import { CategoryMenus } from "./Data";
import womanClothe1 from "./imagesWoman/womanClothe1.jpg";
import CategoriesShoes from "./imagesCategories/CategorieShoes.jpg";
import bagsAndWallets from "./imagesCategories/bagsAndWallets.jpg";
import watches from "./imagesCategories/watches.jpg";
import Jewelry from "./imagesCategories/jewelry.jpg";
import sunglasses from "./imagesCategories/sunglasses.jpg";
import textile from "./imagesCategories/textile.jpg";
import luggage from "./imagesCategories/luggage.jpg";
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
import { ProductsData } from "./Data";
import FeaturedProductsProp from "./ProductsProp";
import axios from "axios";
import ProductList from "./pages/productList";

const FeaturedProducts = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [featuredCollection, setFeaturedCollection] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // API call for product list
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat
//             ? `https://vofshoes.herokuapp.com/api/Products?category=${cat}`
//             : "https://vofshoes.herokuapp.com/api/Products"
//         );

//         setProducts(res.data.products);
//       } catch (err) {}
//     };
//     getProducts();
//   }, [cat]);

  //API call for featured collection on homepage
  useEffect(()=>{
    const getProducts = async () => {
      try{
      const res = await axios.get(`https://vofshoes.herokuapp.com/api/Products?category=sneakers`)

      setFeaturedCollection(res.data.products)
      }catch(err){}
    };
    getProducts()
  }, []);


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
      <h1>
        Featured<span style={{ color: "orangered" }}> Collection</span>
      </h1>
      <div className="image-container">
        {featuredCollection.slice(0,8).map((item) => (
            <FeaturedProductsProp item={item} key={item.id}/>
            ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;