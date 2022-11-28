import { useState } from 'react';
import "./assets/css/Product.css";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Product = ({ imgSrc, imgAlt, brandName, productName, price }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <div className="product">
            <div 
            style={{
                opacity:isHovering?0.5:1,
                
            }}
            
            
            
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <h1>{brandName}</h1>
            <p>{productName}</p>
            <span>{price}</span>
        </div>


    );
}

export default Product;