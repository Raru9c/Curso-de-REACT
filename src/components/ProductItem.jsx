import React from 'react';
import '../styles/ProductItem.scss';
import addtoCart from '@icons/bt_add_to_cart.svg';
import { useState } from 'react';
import ProductList from '../containers/ProductList';

const ProductItem = ({product}) => {
	const [cart, setCart] = useState ([])
	const handleClick = () => {
		setCart ([]);
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
				<figure onClick={handleClick}>
					<img src={addtoCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;