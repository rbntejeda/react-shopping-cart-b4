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
        }
      ]
    }
    this.shoppingCart=React.createRef();
  }
  // handleAddItem(e)
  // {
  //   const carrito = this.state.carrito.slice();
  //   carrito.push({
  //     producto:parseInt(e.get('producto')),
  //     cantidad:parseInt(e.get('cantidad'))
  //   })
  //   this.setState({carrito:carrito});
  // }

  // handleUpdateCarrito({carrito})
  // {

  // }


  render() {
    return (
      <div className="container">
        <div className="col-12">
          <h1>Carrito de Compras</h1>
        </div>
        <SelectorProductos productos = { this.state.productos } />
        <ShoppingCart ref={this.shoppingCart} />
      </div>
    );
  }
}

export default App;
