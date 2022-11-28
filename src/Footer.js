import { Link } from "react-router-dom";
import './assets/css/Footer.css';
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerNav">
                <Link className="footerNavItem"> Article</Link>
                <Link className="footerNavItem">Review</Link>
                <Link className="footerNavItem">FAQ</Link>
                <Link className="footerNavItem">Contact</Link>
                <Link className="footerNavItem">Notice</Link>
                <Link className="footerNavItem">Affilaiate</Link>


            </div>

            <div className="footerDetails">
                <h1 className="logo">SkinShop</h1>
                <p>Company:Abc Co,. Ltd<br/>
                License:123-45-67890<br />
                Address:Abc street <br />
                Number:123456789</p>
            </div>

           
        </div>
     );
}
 
export default Footer;