import React from "react";

const TablaProductos = ({carrito, onUpdateItem, onRemoveItem}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th style={{with:"100px"}}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((item,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.producto.name}</td>
                        <td>{item.producto.price}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.cantidad*item.producto.price}</td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm mr-1"><span className="oi oi-plus"></span></button>
                            <button type="button" className="btn btn-primary btn-sm mr-1"><span className="oi oi-minus"></span></button>
                            <button type="button" className="btn btn-danger btn-sm"><span className="oi oi-delete"></span></button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default TablaProductos;
