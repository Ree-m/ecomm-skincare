import { useState } from 'react';
import AddTo from './AddTo.js';
import "./assets/css/Product.css"

const Product = ({imgSrc,imgAlt,brandName,productName,price}) => {
    const [isHovering,setIsHovering]=useState(false);

    const handleMouseEnter=()=>{
        setIsHovering(true);
    }

    const handleMouseLeave=()=>{
        setIsHovering(false);
    }

    return (
        <div className="product">
            <img src={imgSrc} alt={imgAlt} />
            <h1>{brandName}</h1>
            <p>{productName}</p>
            <span>{price}</span>
        </div> 


    );
}
 
export default Product;