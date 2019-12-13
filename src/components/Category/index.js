import React from 'react'
import './styles.css'
import {
    Link,
  } from "react-router-dom";
const Category = ({product, compare}) =>
    <div key={product.id} className="col-sm-6 col-md-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} alt={product.name} />
            <div className="image_overlay"/>
           <Link to={'/topic?'+product.id}>
            <div className="view_details" onClick={() => compare(product)}>
              {product.compare ? "Remove" : "Explore"}
            </div>
            </Link>
            <div className="stats">
                <div className="stats-container">
                    {/* <span className="product_price">{product.price}</span> */}
                    <span className="product_name">{product.name}</span>
                    {/* <p>{product.description}</p> */}
                </div>
            </div>
        </div>
    </div>;

const Cat = () => 
    <div> Cat 0</div>

export default Category
