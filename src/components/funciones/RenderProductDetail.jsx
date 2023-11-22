import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail';

function renderProductDetail(products) {
    ReactDOM.render(
      <React.StrictMode>
        {products.map((product, index) => (
          <ProductDetail key={index} product={product} />
        ))}
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

renderProductDetail(product);