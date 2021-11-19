import { Component } from "react";
import productData from "../data/productData";
import Product from "./Product";

class Products extends Component{
    render(){
        
        let allProducts = productData.map((product,i) => <Product key={product.name + i} product={product}/>)

        return (
            <div id="products">
                {allProducts}
            </div>
        )

    }
}

export default Products