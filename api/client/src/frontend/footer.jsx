import React from "react";
import './footer.css'
import {Facebook, Instagram, Twitter, Pinterest, Room, Phone, Email, ArrowForward} from "@material-ui/icons"
import credit_card_logos1 from './imagesCategories/credit_card_logos1.jpg'
import {Link} from "react-router-dom"


const Footer = () => {
    return ( 
        <>
        <div className="footer-container">

            <div className="vof">
                <h1 style={{color:"orangered"}}>VOF</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nesciunt, soluta modi ut mollitia illum inventore </p>
                <div className="icons-container">
                   <Facebook className="icons" style={{color:"blue"}}/>
                   <Instagram className="icons" style={{color:"red"}}/> 
                   <Twitter className="icons" style={{color:"skyblue"}}/> 
                   <Pinterest className="icons" style={{color:"red"}}/> 
                </div>
            </div>

            <div className="my-acct">
                <div className="desc">My Account</div>
                <ul className="my-acct-menus">
                    <li><ArrowForward className="arrowForward"/> <span>My Account</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Order Tracking</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Wishilist</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Men Fashion</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Women Fashion</span></li>
                </ul>
            </div>

            <div className="info">
                <div className="desc">Information</div>
                <ul className="my-info-menus">
                    <li><ArrowForward className="arrowForward"/><span>Return</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Affiliate</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Privacy Policy</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Terms & Conditions</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Contact Us</span></li>
                </ul>
            </div>

            <div className="contact">
                <div className="desc">Contact</div>
                <ul className="my-contact-menus">
                    <li><Room style={{color:"ora"}} className="arrowForward"/> No. 622 lio Cresc, Abuja.</li>
                    <li><Phone className="arrowForward"/> +234 5676 6754 76</li>
                    <li><Email className="arrowForward"/> contact@vof.com</li>
                    <li><ArrowForward className="arrowForward"/><span><Link to="/photoCredits">Photo Credits</Link></span></li>
                    <div className="payment-icons">
                    <img src={credit_card_logos1} alt="" />
                    </div>
                </ul>
            </div>

        </div>
        <div className="copyright"><h3>Ⓒ 2021 All Rights Reserved VOF.COM</h3></div>
        </>
     );
}
 
export default Footer;