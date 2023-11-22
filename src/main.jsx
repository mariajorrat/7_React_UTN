import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './components/funciones/ProductDetail.jsx'

const product = [
  {
    name: 'Alcest',
    description: 'T-shirt Alcest Logo',
    price: 'US$ 20.00',
    sku: 'SKU 1234567890',
    quantity: 'Stock 9u.',
    image: 'https://cdn.season-of-mist.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/A/l/Alcest-Logo-T-shirt-46646-1-1450257480_1.jpg', 
  },
  {
    name: 'Dream Theater',
    description: 'T-shirt Dream Theater Logo',
    price: 'US$30.00',
    sku: 'SKU 2345678901',
    quantity: 'Stock 4u.',
    image: 'https://rockabilia.com/cdn/shop/products/430230F_1024x1024.jpg?v=1654691229', 
  },
  {
    name: 'Myrath',
    description: 'T-shirt Myrath Logo',
    price: 'US$21.60',
    sku: 'SKU 3456789012',
    quantity: 'Stock 3u.',
    image: 'https://icarusmusicstore.com/28748-medium_default/myrath-southern-tour-2023mod2remera.jpg', 
  },
  {
    name: 'SOEN',
    description: 'T-shirt SOEN Logo',
    price: 'US$28.00',
    sku: 'SKU 4567890123',
    quantity: 'Stock 6u.',
    image: 'https://cdn.shopify.com/s/files/1/0306/7926/9514/products/Tshirt-SOEN-Cognitive_0009_khaki.jpg?v=1680583188', 
  },
  {
    name: 'Symphony X',
    description: 'T-shirt Symphony X Logo',
    price: 'US$22.90',
    sku: 'SKU 5678901234',
    quantity: 'Stock 8u.',
    image: 'https://m.media-amazon.com/images/I/6164gYs07BL._AC_UY580_.jpg', 
  },
  {
    name: 'System of a Down',
    description: 'T-shirt System of a Down Logo',
    price: 'US$30.99',
    sku: 'SKU 6789012345',
    quantity: 'Stock 1u.',
    image: 'https://acdn.mitiendanube.com/stores/001/538/588/products/remera-soad-2-negra1-74b5b86921b8eb015e16757100597911-1024-1024.webp', 
  },
];

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