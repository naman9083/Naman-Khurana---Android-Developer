import React from 'react'
import Product from '../product/Product'
import products from '../../data.js'
import './ProductList.css'
const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
          <h1 className="pl-title">
              Create and Inspire. It's TANZ
          </h1>
          <p className="pl-desc">
              Tanz is my nickname or you can say a geek name which I use in-place of my original name. Here, is a list of apps I created using react and pure HTML,CSS and JS. The first is Food Ordering application, the other one is News web apps using React and Bootstrap Framework and the last one is text utilities react application which helps to create and modify texts. It has different themeing options. Hope, you like it.
          </p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
          <Product key={item.id} img={item.img} link={item.link}/>

        ))}
      </div>
    </div>
  );
}

export default ProductList
