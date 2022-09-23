import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';
import addtoCartImage from '@icons/bt_add_to_cart.svg';
import { useState } from 'react';
import ProductList from '../containers/ProductList';

const ProductItem = ({product}) => {
	const { addToCart } = useContext (AppContext) 
	const handleClick = item => {
		addToCart (item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title}/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					{product.title}
					<p>Bike</p>
				</div>
				<figure onClick={() => handleClick (product)}>
					<img src={addtoCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;