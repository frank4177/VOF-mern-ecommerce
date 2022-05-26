
import React from 'react'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";

export const CategoryMenus = [
{
title:"Men Fashion",
 Menus:[

  {id:1,
  subTitile:'Oxfords',
  cat:'oxfords'
  },

  {id:2,
  subTitile:'Sneakers',
  cat:'sneakers'
  },

  {id:2,
    subTitile:'Steel Toe',
    cat:'men-steel-toe'
    },

    {
    cat:'Watches',
    path:'/shoes'
    },
  
     {
        cat:'Sunglasses',
        path:'/shoes'
        },

      ],

      },

 {
  title:"Women Fashion",
         Menus:[
        
          {
          subTitile:'Heeled',
          cat:'women-heels'
          },
        
          {
            subTitile:'Flats',
            cat:'flats'
            },
        
            {
              subTitile:'Rain Boots',
              cat:'women-rain-boot'
              },
        
            {
            cat:'Watches',
            path:'/shoes'
            },
          
             {
                cat:'Sunglasses',
                path:'/shoes'
                },
        
              ],
        
              },
]


export const ProductsData = [
  {
    _id:"61f1b0543fb87649c84b008a",
    title:"Air Jordan 87",
    image: "https://image.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg",
    price:" 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },
  {
    _id:2,
    title:"Air Jordan 87",
    image: "https://image.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },
  {
    _id:3,
    title:"Lorie Blouse",
    image: "https://image.freepik.com/free-vector/vintage-blue-blouse-vector-remix-from-artwork-by-fred-hassebrock_53876-116284.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },
  {
    _id:4,
    title:"Air Jordan 87",
    image: "https://image.freepik.com/free-photo/sunglasses_1203-7886.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },

]

