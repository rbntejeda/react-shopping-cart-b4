import React from "react";
import Currency from "../Helpers/Currency";

const ItemsProductos = ({index, item, onPlusItem, onMinuItem, onRemoveItem}) => {
    function handlePlusItem(){
        onPlusItem(index);
    }
    function handleMinusItem(){
        onMinuItem(index);
    }
    function handleRemoveItem(){
        onRemoveItem(index);
    }

    return <tr>
        <td>{index+1}</td>
        <td>{item.producto.name}</td>
        <td>{Currency(item.producto.price)}</td>
        <td>{item.cantidad}</td>
        <td>{Currency(item.cantidad*item.producto.price)}</td>
        <td>
            <button type="button" className="btn btn-primary btn-sm mr-1" onClick={()=>{handlePlusItem()}}><span className="oi oi-plus"></span></button>
            <button type="button" className="btn btn-primary btn-sm mr-1" onClick={()=>{handleMinusItem()}}><span className="oi oi-minus"></span></button>
            <button type="button" className="btn btn-danger btn-sm" onClick={()=>{handleRemoveItem()}}><span className="oi oi-delete"></span></button>
        </td>
    </tr>;
}

export default ItemsProductos;