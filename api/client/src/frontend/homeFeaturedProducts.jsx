import React, { useEffect, useState } from "react";
import FeaturedProductsProp from "./ProductsProp";
import axios from "axios";
import './Products.css'
import {getProducts} from '../redux/apiCalls'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {  Visibility} from "@material-ui/icons";
import { useLocation, useParams } from 'react-router-dom';


const HomeProducts = (props) => {
    const {keyword} = props;

    const dispatch = useDispatch();

    const products = useSelector((state)=>state.product.products);

  // API call for featured collection on homepage
    
  useEffect(() => {
    (async () => {
       dispatch(await getProducts(keyword));
     })();
   }, [dispatch, keyword]);
  
  
     
      return ( 
          <div className="featured-container">
              <h1>Featured<span style={{color:"orangered"}}> Collection</span></h1>
              {products.slice(0,4).map(product => (
            <div className="image-container">
            <div className="feature-images">
              <img src={product.image} alt="" />
            <div className="featureCat-icons">
            {/* <div to="" style={{textDecoration:"none", color:"black"}} onClick={handleClick}><ShoppingCartOutlined className="featureIcons"/></div> */}
            <Link to={`/product/${product._id}`} ><Visibility className="featureIcons"/></Link>
            {/* <FavoriteBorder className="featureIcons"/> */}
            </div>
            <div className="productDesc">
            <h2>{product.title}</h2>
            {products.rating}

            <h2> ₦ {product.price}</h2>
            </div>
            
              </div>
              </div>
              ))}
          </div>
       );
  }
   
  export default HomeProducts;