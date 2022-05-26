import React from "react";
import Footer from "../footer";
import './cart.css'
import styled from 'styled-components';
import { Add, Delete, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {removeProductNow} from '../../redux/apiCalls'
import undraw_empty_cart_co35 from '../../undraw_empty_cart_co35.png'
import { Link, useNavigate} from 'react-router-dom'




const Topbutton = styled.button` 
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type === "filter" && "none"};
    background-color:${props=>props.type === "filter" ? "orange" : "tranparent"};
    color:${props=>props.type === "filter" && "white"}`;

const Cart = () => {
    const user = useSelector((state)=> state.user.currentUser);

    // const PleaseLogin = "PLEASE LOGIN TO SEE CHECKOUT BUTTON!"

    const dispatch = useDispatch()
    const [product, setProduct] = useState({})

    const cart = useSelector(state => state.cart)

    const handleClick = (id) => {

        dispatch(removeProductNow(id))
  
    }

    

   
    return ( 
        <>
        {cart.products.length === 0 ? <div className="cart-empty"><img src={undraw_empty_cart_co35} alt="" /></div> : <div className="cart-container">
            <div className="cart-wrapper">
                <h1>YOUR BAG</h1>
                <div className="top">
                    
                    <div className="topText">
                        <h2>Shopping Bag (2)</h2>
                        <h2>Your Wishlist (0)</h2>
                    </div>
                    {/* <Topbutton type="filter">CHECKOUT NOW</Topbutton> */}
                </div>
                <div className="bottom">
                <div className="info">
                {/* <Topbutton>CONTINUE SHOPPING</Topbutton> */}
                    {cart.products.map(product => (
                        <div className="product">
                        <div className="productDetail">
                            <img src={product.image} alt="" />
                            <div className="details">
                                <div className="productName"><b>PRODUCT:</b> {product.title}</div>
                                <div className="productID"><b>ID:</b>{product._id}</div>
                                <div className="productColor" color={product.color}></div>
                                <div className="productSize"><b>Size:</b>{product.size}</div>
                            </div>
                        </div>
                        <div className="priceDetail">
                            <div className="productAmountContainer">
                                <Add style={{fontSize:"20px"}}/>
                                <div className="productAmount">{product.quantity}</div>
                                <Remove style={{fontSize:"20px"}}/>
                            </div>
                            <div className="productPrice">₦  {product.price * product.quantity}</div>
                            <Delete style={{marginTop:30, fontSize: 20, color: "red"}} onClick={()=>handleClick(product._id)}/>
                        </div>
                    </div>
                    ))}

                    <hr style={{marginTop:"15px", width:"90%", marginBottom:"15px"}}/>

                </div>
                <div className="summary">
                    <div className="summaryTitle">ORDER SUMMARY</div>
                    <div className="summaryItem">
                        <div className="summaryItemText">Subtotal:</div>
                        <div className="summaryItemText">₦ {cart.total}</div>
                    </div>
                    <div className="summaryItem">
                        <div className="summaryItemText">Estimated Shipping:</div>
                        <div className="summaryItemText">₦ 5.90</div>
                    </div><div className="summaryItem">
                        <div className="summaryItemText">Shipping Discount:</div>
                        <div className="summaryItemText">₦ -5.90</div>
                    </div>
                    <div className="summaryItemBold">
                        <div className="summaryItemText">Total</div>
                        <div className="summaryItemText">₦ {cart.total}</div>
                    </div>
                    {user ? <button className="summaryButton"><a style={{color:"white"}} href={`https://paystack.com/pay/7vuqwc90jv?first_name=&email=&last_name=&amount=${cart.total}&readonly=email,amount,first_name,last_name`}>CHECKOUT NOW</a></button> : <div><h2 style={{color:"grey"}}>PLEASE LOGIN TO CHECKOUT <span style={{ textDecoration:"underline", fontSize: 12}}><Link to="/login">Login</Link></span>│<span style={{ textDecoration:"underline", fontSize: 12}}><Link to="/signup">SignUp</Link></span> </h2></div>}
                    
                </div>
                </div>
            </div>
        </div> }
        <Footer/>
        </>
     );
}
 
export default Cart;