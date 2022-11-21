import { Link } from "react-router-dom";
import './assets/css/Navbar.css';
import Sidebar from "./Sidebar";

// icons
import { AiOutlineSearch } from "react-icons/ai";
import {HiOutlineShoppingBag} from "react-icons/hi";
import { BiLogIn} from "react-icons/bi";
import { VscAccount} from "react-icons/vsc";




const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="nav1 flex">
                <Link to="/" className="logo flex">SkinShop</Link>

            <div className="icons flex">
                <Link to="/Search" className="icon"><AiOutlineSearch /></Link>
                <Link to="/SignIn" className="icon"><BiLogIn /></Link>
                <Link to="/SignUp" className="icon">< VscAccount/></Link>
                <Link to="/Cart" className="icon"><HiOutlineShoppingBag /></Link>
            </div>


            </div>

{/* 
            <div className="icons-name flex">
                <Link to="/Search" className="icon-name">Search</Link>
                <Link to="/SignIn" className="icon-name">Sign In</Link>
                <Link to="/SignUp" className="icon-name">Sign Up</Link>
                <Link to="/Cart" className="icon-name">Cart</Link>
            </div>  */}


            <div className="nav2 flex">
                <Sidebar />
                <Link to="/New" className="nav2-links">New</Link>
                <Link to="/Best" className="nav2-links">Best</Link>
                <Link to="/Deals" className="nav2-links">Deals</Link>
                <Link to="/Brands" className="nav2-links">Brands</Link>
                <Link to="/Coupons" className="nav2-links">Coupons</Link>

            </div>


        </nav>

     );
}
 
export default Navbar;