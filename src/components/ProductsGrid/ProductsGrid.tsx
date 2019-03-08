import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBasket, Close } from '@material-ui/icons';

import './ProductsGrid.scss';
import ProductThumb from '../ProductThumb/ProductThumb';
import api from '../../utils/api';


const ProductsGrid = function({ match }: any) {

  const [ state, setState ] = useState({
    products: [],
    productsCount: 0,
  });

  api.getProducts().then((result) => {
    setState({
      products: result.rows,
      productsCount: result.count,
    })
  });

  return (
    <div className="ProductsGrid">
      <div className="ProductsGrid__filters">

      </div>

      {state.products.map(({ product_id, name, price, thumbnail }) => 
        <ProductThumb
          key={product_id}
          id={product_id}
          name={name}
          price={price}
          image={thumbnail} />)}
    </div>
  );
}

export default ProductsGrid;