import "./assets/css/NewArrivals.css"
import Product from "./Product";
import pink from "./assets/images/cosrx-snailmucin.jpg";


const NewArrivals = () => {
    return (
        <div className="newArrivals">
            <div className="newArrivalsTitle">
                <h1>New Arrivals</h1>

            </div>
            <div className="newArrivalsItems ">
                <div className="item">

                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div> <div className="item">
                    <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

                </div>
                




            </div>
            </div>
        
    );
}

export default NewArrivals;