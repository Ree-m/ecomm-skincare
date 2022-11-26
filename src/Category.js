import './assets/css/Category.css'
import CategoryImage from "./CategoryImage";
import skincareIcon from './assets/images/skin-icon.png';
import makeupIcon from './assets/images/makeup-icon.png';
import bodyIcon from './assets/images/body&hair.png';
import sheetMaskIcon from './assets/images/sheet-masks-icon.png';
import faceToolsIccon from './assets/images/face-tools.png';
import Product from './Product';

const Category = () => {
    return ( 
        <div className="category">
            <div className="content">
                <h1>Quick<br/> Category<span>.</span></h1>
                <p>Find products quickly by category selection</p>
            </div>

            <div className="images">
                <CategoryImage text={"Skincare"} src={skincareIcon} />
                <CategoryImage text={"Makeup"} src={makeupIcon} />
                <CategoryImage text={"Hair & Body"} src={bodyIcon} />
                <CategoryImage text={"Sheet Masks"} src={sheetMaskIcon} />
                <CategoryImage text={"Devices & Tools"} src={faceToolsIccon} />



            </div>
        </div>
     );
}
 
export default Category;