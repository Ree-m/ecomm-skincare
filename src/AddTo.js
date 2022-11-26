import { FiHeart } from "react-icons/fi";
import {HiOutlineShoppingBag} from "react-icons/hi";

const AddTo = () => {
    return ( 
        <div className="addTo flex">
            <img src={FiHeart} alt="Add to wishlist." />
            <img src={HiOutlineShoppingBag} alt="Add to bag." />

        </div>
     );
}
 
export default AddTo;

