import React from "react";

const SelectorProductos = ({productos,ShoppingCart})=>{
    let handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        ShoppingCart.current.AddItem({
            producto:productos[parseInt(form.get('producto'))],
            cantidad:parseInt(form.get('cantidad'))
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-7">
                        <label>Producto</label>
                    </div>
                    <div className="col">
                        <label>Cantidad</label>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-7">
                    <select name="producto" className="form-control" required>
                        <option value="">Seleccione producto ...</option>
                        {productos.map((p,i)=><option key={i} value={i}>{p.name} {p.price}</option>)}
                    </select>
                    </div>
                    <div className="col">
                        <input name="cantidad" type="number" className="form-control" placeholder="Cantidad" min={0} defaultValue="0" required/>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SelectorProductos;
