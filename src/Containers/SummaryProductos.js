import React from "react";
import Currency from "../Helpers/Currency";


const SummaryProductos = ({carrito}) => {
    let total = 0;
    carrito.forEach(item => {
        total+=item.cantidad*item.producto.price;
    });
    return <div className="col"><h4 className="float-right">Total {Currency(total)}</h4></div>;
}

export default SummaryProductos;