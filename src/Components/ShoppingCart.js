import React from 'react';

class ShoppingCart extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            carrito:[]
        }
    }

    AddProductos({producto,cantidad})
    {
        console.log(producto,cantidad);
    }

    render(){
        return (
            <div className="row">

            {/* <div className="col-12">
              <SelectorProductos productos={this.state.productos} onSubmit={this.handleAddItem}></SelectorProductos>
            </div>
            <div className="col-12">
              <TablaProductos productos={this.state.productos} onUpdateCarrito={this.handleUpdateCarrito}></TablaProductos>
            </div>
            <div className="col-12">
              <ResumenProductos productos={this.state.productos} carrito={this.state.carrito} ></ResumenProductos>
            </div> */}
          </div>
        );
    }
}

export default ShoppingCart;