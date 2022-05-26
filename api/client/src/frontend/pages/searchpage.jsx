import React from 'react'
import AllProducts from './AllProducts'
import { useParams } from 'react-router-dom';


const Searchpage = () => {

    const {keyword }= useParams();

  return (
    <div>
        <AllProducts keyword={keyword}/>
    </div>
  )
}

export default Searchpage