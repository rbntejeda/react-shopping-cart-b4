import React from "react";

const SummaryProductos = ({carrito}) => {
    let total = 0;
    carrito.forEach(item => {
        total+=item.cantidad*item.producto.price;
    });
    return <div className="float-right col-2"><h4>Total {total}</h4></div>;
}

export default SummaryProductos;