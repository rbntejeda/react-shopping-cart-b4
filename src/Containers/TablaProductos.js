import React from "react";
import ItemsProductos from "./ItemProductos";

const TablaProductos = ({carrito, onPlusItem, onMinuItem, onRemoveItem}) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th style={{width:"130px"}}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((item,index)=><ItemsProductos key={index} index={index} item={item} onPlusItem={onPlusItem} onMinuItem={onMinuItem} onRemoveItem={onRemoveItem}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default TablaProductos;
