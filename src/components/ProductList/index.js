import React from 'react'
import {Product} from '../'
import {Category} from '../'
import { Categories } from '../../containers';

const ProductList = ({products, compare}) =>
  <div className="row mt-3">
      {products.map(product =>
        //  <Product key={product.id} product={product} compare={compare} />
        <Category key={product.id} product={product} compare={compare} />
      )}
  </div>;

export default ProductList
