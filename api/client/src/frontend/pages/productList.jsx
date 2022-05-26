import React, { useState } from "react";
import Navbar from "../navbar";
import './ProductList.css'
import Newsletter from "../newsletter";
import Footer from "../footer";
import womanShoe2 from '../imagesWoman/womanShoe2.jpg'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";
import { useLocation} from "react-router";
import Products from "../products";

const ProductList = () => {

  

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

    return (
        <div>
            <Navbar/>
            <h1 className="dresses"></h1>
            <div className="filterContainer">
              <div className="filter">
                  <div className="filterText">Filter Products:</div>
                   <select name="color" id="" onChange={handleFilters}>
                    <option value="" selected disabled>Color</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Gray">Gray</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                   </select>

                   <select name="size" id="" onChange={handleFilters}>
                    <option value="" selected disabled>Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                   </select>

                   <select name="brand" id="" onChange={handleFilters}>
                    <option value="brands" selected disabled>Brand</option>
                    <option value="Nike" >Nike</option>
                    <option value="Reebok">Reebok</option>
                    <option value="Lara">Lara</option>
                    <option value="Brogues">Brogues</option>
                    <option value="Stacy Adams">Stacy Adams </option>
                    <option value="Rossy">Rossy</option>
                   </select>
              </div>
              <div className="filter">
                  <div className="filterText">Sort Products:</div>
                  <select   onChange={(e) => setSort(e.target.value)}>
                      <option value="newest" >Newest</option>
                      <option value="asc">Price (asc)</option>
                      <option value="desc">Price (desc)</option>
                  </select>
              </div>
            </div>
               <Products cat={cat} filters={filters} sort={sort}/>

                <Newsletter/>
                <Footer/>
        </div>
     );
}
 
export default ProductList;