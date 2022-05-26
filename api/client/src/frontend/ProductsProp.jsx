import React from "react";
import "./Products.css"
import {Link} from "react-router-dom"
import { FavoriteBorder, SearchOutlined, Visibility, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";
import { addProduct } from "../../src/redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";


const FeaturedProductsProp = ({item}) => {

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
        try{
            const res = await publicRequest.get("/products/find/" + id);
           
            setProduct(res.data.product);
        }catch{}
    };
    getProduct()
  }, [id])

  const handleClick = () => {

    dispatch(addProduct({...product,}))

}

    return ( 
        <div className="feature-images">
            <img src={item.image} alt="" />
            <div className="featureCat-icons">
            {/* <div to="" style={{textDecoration:"none", color:"black"}} onClick={handleClick}><ShoppingCartOutlined className="featureIcons"/></div> */}
            <Link to={`/product/${item._id}`} ><Visibility className="featureIcons"/></Link>
            {/* <FavoriteBorder className="featureIcons"/> */}
            </div>
            <div className="productDesc">
            <h2>{item.title}</h2>
            {item.rating}

            <h2> ₦ {item.price}</h2>
            </div>
        </div>
        
     );
}
 
export default FeaturedProductsProp;