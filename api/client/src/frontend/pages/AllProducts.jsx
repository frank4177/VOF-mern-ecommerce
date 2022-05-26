import React, { useEffect, useState } from "react";
import FeaturedProductsProp from "../ProductsProp";
import axios from "axios";
import './AllProducts.css'
import {getProducts} from '../../redux/apiCalls'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {  Visibility} from "@material-ui/icons";


const AllProducts = (props) => {
    const {keyword} = props;

    const dispatch = useDispatch();

    const products = useSelector((state)=>state.product.products);
    const isFetching = useSelector((state)=>state.product.isFetching);

    

  // API call for featured collection on homepage
  useEffect(() => {
    (async () => {
       dispatch(await getProducts(keyword));
     })();
   }, [dispatch, keyword]);
  
  
     
      return ( 
          <div className="all-products-container">
            {/* <h1>Featured<span style={{color:"orangered"}}> Collection</span></h1> */}
            
            {isFetching ?  <div className="loader-search"></div> : <div className="all-products-wrapper">
              
              {products.map(product => (
            <div className="image-container">
            <div className="all-product-images">
              <img src={product.image} alt="" />
            <div className="all-cat-icons">
            {/* <div to="" style={{textDecoration:"none", color:"black"}} onClick={handleClick}><ShoppingCartOutlined className="featureIcons"/></div> */}
            <Link to={`/product/${product._id}`} ><Visibility className="all-icons"/></Link>
            {/* <FavoriteBorder className="featureIcons"/> */}
            </div>
            <div className="all-Productdesc">
            <h2>{product.title}</h2>
            {products.rating}

            <h2> ₦ {product.price}</h2>
            </div>
            
              </div>
              </div>
              ))}
              </div>}
          </div>
       );
  }
   
  export default AllProducts;