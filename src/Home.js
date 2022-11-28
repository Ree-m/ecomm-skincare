import './assets/css/Home.css'
import UncontrolledCarousel from "./UncontrolledCarousel";
import Category from "./Category";
import CustomCarousel from "./CustomCarousel.js";
import Product from './Product';
import pink from './assets/images/pink.png';
import NewArrivals from './NewArrivals';
import Footer from './Footer.js';

const Home = () => {
    return ( 
        <div className="home">
          <UncontrolledCarousel />

          <Category />
          <CustomCarousel />
          <NewArrivals />
          <Footer />




          {/* <div className="mostPopular flex">

          <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />
          <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />
          <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx tonert"} price={'$15'}/>
          <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx oner"} price={'$15'} />

          </div> */}
        




        </div>
    )
}
 
export default Home;