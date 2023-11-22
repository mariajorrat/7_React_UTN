import React, { useState } from 'react';

function ProductDetail({ product }) {
    const [message, setMessage] = useState('');

    const buyProduct = () => {
        setMessage('Gracias por su compra');
    };

    return (
        <div className="d-flex flex-wrap justify-content-around">
            <img src={product.image} className="card-img-top w-25" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.sku}</p>
                <p className="card-text">{product.quantity}</p>
                <button onClick={buyProduct} className="btn btn-primary">Comprar</button>
                {message && <p className="mt-3">{message}</p>}
            </div>
        </div>
    );
}

export default ProductDetail;