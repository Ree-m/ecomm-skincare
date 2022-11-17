import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Skincare Shop</h1>
            <div className="links">
                <Link to="">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/OurStory">Our Story</Link>

            </div>
        </nav>

     );
}
 
export default Navbar;