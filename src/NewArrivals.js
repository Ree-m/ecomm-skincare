import  "./assets/css/NewArrivals.css"
import Product from "./Product";
import pink from './assets/images/pink.png';


const NewArrivals = () => {
    return (
        <div className="newArrivals">
            <div className="items grid">
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />
                <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'USD 15'} />

            </div>
        </div>
    );
}

export default NewArrivals;