import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import Product from "./Components/Product";
import Products from "./Components/Products"


class App extends Component {
  constructor(){
    super()

    //these items will change but maybe the cart and products need to be in seperate states
    this.state = {

      allProducts: productData,

      //need to be in cart maybe?
      selected: [],
      subTotal: 0,
      tax: 0,
      total: 0,


    }
  }

  handleProductSelect = (product)=> {

    this.setState({

      selected: [...this.state.selected,product], 
      subTotal: this.state.subTotal + product.price,
      tax: this.state.subTotal * .05,
      total: this.state.subTotal + this.state.tax
    })
    
  }

render(){

  let productsCard = productData.map(product=>{

    return(
      <div id = "product-display">

          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button type="submit" onClick={this.handleProductSelect}>Add To Cart</button>
          <img src={product.img} alt={product.name}></img>
          <p>{product.description}</p>

      </div>
    )
  });

}

}


export default App
