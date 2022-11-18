import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import './css/Navbar.css';

// icons
import { AiOutlineSearch } from "react-icons/ai";
import {HiOutlineShoppingBag} from "react-icons/hi";



const Navbar = () => {
    return ( 
        <nav className="navbar">
         <Sidebar />
            <div className="links">
                <Link to="/Home">Skincare Shop</Link>
                <Link to="/Search"><AiOutlineSearch /></Link>
                <Link to="/Cart"><HiOutlineShoppingBag /></Link>
            </div>

        </nav>

     );
}
 
export default Navbar;