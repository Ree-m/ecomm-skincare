import './assets/css/CategoryImage.css';
import {useState} from 'react';



const CategoryImage = ({ text, src }) => {

    const [isHovering,setIsHovering]=useState(false);

    const handleMouseEnter=()=>{ 
        setIsHovering(true);
    }
    const handleMosueLeave=()=>{
        setIsHovering(false);
    }
    return (
        <div className="categoryImage">
            <div style={{ 
               backgroundColor:isHovering? '#E55143':'#F1F1F1'
            }} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMosueLeave}

            className="categoryImageIcon flex">
                <img src={src} alt="" />
            </div>
        
                <p 
                style={{color:isHovering?'#E55143':'#333333'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMosueLeave}
                className="categoryImageText">{text}</p>

            
        </div>
    );
}

export default CategoryImage;