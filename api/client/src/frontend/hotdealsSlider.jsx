import {
  FavoriteBorder,
  SearchOutlined,
  Visibility,
  ShoppingCartOutlined,
  StarRate,
  StarBorderRounded,
  StarRounded,
} from "@material-ui/icons";
import React, { Component } from "react";
import Slider from "react-slick";
import "./hotdealsSlider.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../../src/redux/cartRedux";
import { useDispatch } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        marginRight: 40,
        background: "rgba(255, 166, 0, 0.644)",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        marginLeft: 40,
        background: "rgba(255, 166, 0, 0.644)",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}
const Hotdeals = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://vofshoes.herokuapp.com/api/Products"
        );
        setProduct(res.data.products);
      } catch (err) {}
    };
    getProducts();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 11000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product }));
  };

  return (
    <div id="latestShoes" className="hot-container">
      <h1>
        Latest <span style={{ color: "orangered" }}>Shoes</span>
      </h1>
      <Slider {...settings}>
        {product.slice(0, 8).map((item) => (
          <div item={item} key={item.id}>
            <div className="Hot-images">
              <img src={item.image} alt="" />
              <div className="hotdeals-icons">
                {/* <div  onClick={handleClick}><ShoppingCartOutlined className="hotIcons"/></div> */}
                <Link to={`/product/${item._id}`}>
                  <Visibility className="hotIcons" />
                </Link>
                {/* <FavoriteBorder className="hotIcons"/>  */}
              </div>
              <Link to="/product/61f1b0543fb87649c84b008a">
                <h2>{item.title}</h2>
              </Link>
              <div>
                <StarRounded style={{ color: "gold", fontSize: "2.2rem" }} />
                <StarRounded style={{ color: "gold", fontSize: "2.2rem" }} />
                <StarRounded style={{ color: "gold", fontSize: "2.2rem" }} />
                <StarRounded style={{ color: "gold", fontSize: "2.2rem" }} />
                <StarBorderRounded
                  style={{ color: "gold", fontSize: "2.2rem" }}
                />
              </div>
              <h2>₦ {item.price}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hotdeals;
