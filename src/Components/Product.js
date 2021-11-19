import { Component } from "react";
import Products from "./Products";


class Product extends Component {

    //put in app.js
    //

    // handleProductSelect = ()=> {

    //     const {allProducts, subTotal, tax} = this.state;
      
    //     this.setState({
    //       allProducts: {allProducts},
    //       subTotal: subTotal + this.props.product.price,
    //       tax: subTotal * .05,
    //       totalPrice: subTotal + tax
    //     })
        
    //   }

    render(){
        const { name, price, img, description } = this.props.product;

        return(

            <div className="product">

                <h2>{name}</h2>
                <p>Price {price}</p>
                <p><button type="submit" onClick={this.handleProductSelect}>Add To Cart</button></p>
                <img src={img} alt={name} />
                <p className="description">{description}</p>

            </div>

        )
    }
}

export default Product