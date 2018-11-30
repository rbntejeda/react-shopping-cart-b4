import React, { Component } from 'react';
import SelectorProductos from './Containers/SelectorProductos';
import ShoppingCart from './Components/ShoppingCart';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      productos:[
        {
          id:1,
          name:"Cuadernito",
          price:1200
        },
        {
          id:2,
          name:"Lapiz bic",
          price:1500
        },
        {
          id:3,
          name:"Mouse pad",
          price:100
        },
        
        {
          id:4,
          name:"Monitor",
          price:2000
        }
      ]
    }
    this.shoppingCart=React.createRef();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Carrito de Compras</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SelectorProductos productos = { this.state.productos } ShoppingCart={this.shoppingCart} />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-12">
            <ShoppingCart ref={this.shoppingCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
