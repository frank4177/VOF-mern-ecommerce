import React from "react";
import Navbar from "../navbar";
import './products.css'
import Newsletter from "../newsletter";
import Footer from "../footer";
import womanShoe2 from '../imagesWoman/womanShoe2.jpg'
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()


  // product api data
  useEffect(() => {
    const getProduct = async () => {
        try{
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data.product);
        }catch{}
    };
    getProduct()
  }, [id])

  //quantity of product
  const handleQuantity = (type) => {
      if(type === "dec"){
         quantity > 1 && setQuantity(quantity - 1)
      } else{
        setQuantity(quantity + 1)
      }
  }


  // add quantity to cart
  const handleClick = () => {

      dispatch(addProduct({...product, quantity, color, size}))

  }

    return ( 
      <div className="Productcontainer">
          <Navbar/>
          <div className="wrapper">
              <div className="ProductImageContainer">
                  <img src={product.image} alt="" />
              </div>
              <div className="InfoContainer">
                  <h1>{product.title}</h1>
                  <p className="info-desc">{product.description}.</p>
                  <div className="price">₦ {product.price}</div>
                  <div className="ProductfilterContainer">
                      <div className="Productfilter">
                          <div className="filterTitle">Color</div>
                          {product.color?.map((c) => {
                              return  <div className="filterColor" color={c} key={c} onClick={()=>setColor(c)}/>
                            })}
                         
                      </div>

                      <div className="Productfilter">
                          <div className="filterTitle">Size</div>
                          <select className="filterSize" onChange={(e)=>setSize(e.target.value)}>

                          {product.size?.map((s) => {
                              return <option className="filterSizeOption" key={s}>{s}</option>
                            })}

                          </select>
                      </div>
                  </div>
                  <div className="addContainer">
                      <div className="amountContainer">
                          <Remove onClick={()=> handleQuantity("dec")}/>
                            <div className="amount">{quantity}</div>
                          <Add onClick={()=> handleQuantity("inc")}/>
                      </div>
                      <button onClick={handleClick}>ADD TO CART</button>
                  </div>
              </div>
          </div>
          <Newsletter/>
          <Footer/>
      </div>
     );
}
 
export default Product;