import React from 'react';
import TablaProductos from '../Containers/TablaProductos';
import SummaryProductos from '../Containers/SummaryProductos';

class ShoppingCart extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            carrito:[]
        }
        this.handlePlusItem=this.handlePlusItem.bind(this);
        this.handleMinusItem=this.handleMinusItem.bind(this);
        this.handleRemoveItem=this.handleRemoveItem.bind(this);
    }

    AddItem({producto,cantidad})
    {
        const carrito = this.state.carrito.slice();
        carrito.push({producto,cantidad})
        this.setState({carrito:carrito})
    }

    handlePlusItem(e)
    {
        let carrito = this.state.carrito.slice();
        carrito[e].cantidad++;
        this.setState({carrito:carrito});
    }

    handleMinusItem(e)
    {
        let carrito = this.state.carrito.slice();
        carrito[e].cantidad--;
        if(carrito[e].cantidad<0)carrito[e].cantidad=0;
        this.setState({carrito:carrito});
    }

    handleRemoveItem(e)
    {
        let carrito = this.state.carrito.slice();
        carrito.splice(e,1);
        this.setState({carrito:carrito});
    }

    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <TablaProductos carrito={this.state.carrito} onPlusItem={this.handlePlusItem} onMinuItem={this.handleMinusItem} onRemoveItem={this.handleRemoveItem} />
                </div>
                <div className="col-12">
                    <SummaryProductos className="align-right" carrito={this.state.carrito} />
                </div>
          </div>
        );
    }
}

export default ShoppingCart;
