import React from 'react';
import TablaProductos from '../Containers/TablaProductos';
import ResumenProductos from '../Containers/ResumenProductos';

class ShoppingCart extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            carrito:[]
        }
    }

    AddItem({producto,cantidad})
    {
        const carrito = this.state.carrito.slice();
        carrito.push({producto,cantidad})
        this.setState({carrito:carrito})
    }

    handleUpdateItem()
    {

    }

    handleRemoveItem()
    {

    }

    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <TablaProductos carrito={this.state.carrito} onUpdateItem={this.handleUpdateItem} onRemoveItem={this.handleRemoveItem}></TablaProductos>
                </div>
                <div className="col-12">
                    <ResumenProductos carrito={this.state.carrito} ></ResumenProductos>
                </div>
          </div>
        );
    }
}

export default ShoppingCart;
