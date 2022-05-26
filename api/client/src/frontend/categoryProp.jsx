import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import {CategoryMenus} from './Data'
import './navbar.css'
import {ArrowDropDown} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const CategoryItems = ({item}) => {

    const [CatNav, setCatNav] = useState(false)

    const showCatNav = () => setCatNav(!CatNav)

    return ( 
        <div onClick={()=>showCatNav()} className="juza">
            <div className="jj">{item.title} <ArrowDropDown/></div>
            {CatNav && item.Menus.map((item, index)=>{
                return (
                    <div onClick={CatNav}>
                        <Link to={`products/${item.cat}`} item={item} key={index} className="kki"  onClick={showCatNav}>
                            {item.subTitile}
                        </Link>
                    </div>
                );

            })}
        </div>
     );
}
 
export default CategoryItems;