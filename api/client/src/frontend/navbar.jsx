import { ArrowRight, Search, ShoppingCartOutlined, ArrowDropDown, Menu, Close, PermIdentityOutlined, Login, LockOpen, FilterRounded, } from "@material-ui/icons";
import React, { useEffect } from "react";
import './navbar.css'
import Badge from '@material-ui/core/Badge';
import { makeStyles } from "@material-ui/core/styles";
import {CategoryMenus} from './Data'
import { useState, useRef } from "react";
import CategoryItems from './categoryProp'
import {gsap} from 'gsap'
import { Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import FeaturedProductsProp from "./ProductsProp";
import axios from "axios";
import { logout } from "../redux/apiCalls";
import { useParams } from 'react-router-dom';



const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const [keyword, setKeyword] = useState();

    let navigate = useNavigate();


   

    const user = useSelector((state)=> state.user.currentUser)

    const noLoginSignup = ""

    const noLogout = ""

    // useEffect(()=>{
    //     const getProducts = async () => {
    //       try{
    //       const res = await axios.get(`https://vofshoes.herokuapp.com/api/Products?title`)
    //       setProducts(res.data.products)
    //       }catch(err){}
    //     };
    //     getProducts()
    //   }, []);

    const useStyles = makeStyles(theme => ({
        badge: {
            backgroundColor: "yellowgreen",
            color: "white",
            fontWeight: 500,
            fontSize: "1rem"
        }
    }));
    const classes = useStyles();

    const [CatNav, setCatNav] = useState(false)

    const showCatNav = () => setCatNav(!CatNav)

    const handleLogout = () => {
        logout(dispatch)
    }


    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate("/")
        }
    }
    
     
     return ( 

    <>
    <div className="containner">
    <div className="navbar">

        <div className="menu-bars">
            <Menu className="icon" onClick={showCatNav}/>
        </div>
      
    <Link to="/home"  className="logo-container">
        <h1 className="logo">VOF</h1>

    </Link>

   {/* Search */}
    <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setKeyword(e.target.value)} placeholder="search here..." />
        <button type="submit"><Search className="search-icon"/></button>
    </form>

    <div className="menu">
        <div className="li"><div href="">Categories <ArrowDropDown/></div>
          <div className="subMenu">
             <div className="li"><a href="">Men Fashion <ArrowRight/></a>
               <div className="subMenu2">
                   <div className="li"><Link to="/products/oxfords">Oxfords</Link></div>
                   <div className="li"><Link to="/products/sneakers">Sneakers</Link></div>
               </div>
             </div>
             <div className="li"><a href="">Women Fashion <ArrowRight/></a>
             <div className="subMenu22">
                   <div className="li"><Link to="/products/women-heels">Heeled</Link></div>
                   <div className="li"><Link to="/products/women-heels">Flats</Link></div>
               </div>
             </div>
             <div className="li"><a href="">kids Fashion</a></div>
          </div>
        </div>
        {user ? noLoginSignup : <Link to="/signup" className="li">Sign Up</Link>}
        {user ? noLoginSignup : <Link to="/login" className="li">Login</Link>}

        {user ? <div className="li" onClick={handleLogout}>Logout</div> : noLogout }
    </div>

<div className="huo">
<Link to="/cart" className="cart-wrap">
   <Badge badgeContent={quantity}  classes={{badge: classes.badge}} className="badge">
    <ShoppingCartOutlined color="action" className="cartColor"/>
    </Badge>
    <div className="cart-text">Cart</div>       
</Link>
</div>
        
</div>





{/* <>MOBILE VIEW</> */}

<div className={CatNav ? 'nav-menu active' : 'nav-menu'}>
    <ul className="nav-menu-items">
        <li className="navbar-toggle">
            <div className="menu-barss">
                <Close className="icon" onClick={showCatNav}/>
            </div>
        </li>

        <ul className="mob-menu">

        {user ? noLoginSignup : <li onClick={showCatNav}><Link to="/login" className="nav-text"><LockOpen style={{marginRight:"10px", fontSize:"2rem"}}/>login</Link></li> }

        {user ? noLoginSignup : <li onClick={showCatNav}><Link to="/signUp" className="nav-text"><PermIdentityOutlined style={{marginRight:"10px", fontSize:"2rem"}}/>sign up</Link></li> }

        {user ? <li onClick={handleLogout}><div className="nav-text"><LockOpen style={{marginRight:"10px", fontSize:"2rem"}}/>Logout</div></li> : noLogout }
        
        <li className="cat"><a href="">Categories</a></li>

            {CategoryMenus.map((item, index) =>{
              return <CategoryItems item={item} key={index} />
            })}
    </ul>
    </ul>
</div>
</div>
</>
     );
}
 
export default Navbar;