import React, {useEffect} from "react";
import Navbar from '../navbar'
import SimpleSlider from '../slider'
import Hotdeals from '../hotdealsSlider'
import Newsletter from '../newsletter'
import Footer from '../footer'
import Products from '../products'
import HomeProducts from "../homeFeaturedProducts";
import { match, useLocation, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/apiCalls'
import FeaturedProducts from '../featuredProducts'




const Home = () => {




    return (
      <div className="App">
       {/* <Navbar/> */}
       <SimpleSlider/>
       <Hotdeals/>
       <FeaturedProducts/>
       {/* <HomeProducts keyword={keyword}/> */}
       <Newsletter/>
       <Footer/>
      </div>
    );
  }
  
  export default Home;