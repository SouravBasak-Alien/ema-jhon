import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
	const first10 = fakeData.slice(0, 10);
	const [products, setProduct] = useState(first10)
	const [Carts, setCart] = useState([]);

	const handleaddProduct = (product) => {
		const newCart = [...Carts, product];
		setCart(newCart)
		console.log('hello world', product)
	}
	// useState()
	return (
		<div className="shop-container">
			<div className="product-container">

				{products.map(product => <Product
					handleaddProduct={handleaddProduct}
					product={product}>
				</Product>)}

			</div>
			<div>
				<Cart Carts={Carts}></Cart>
			</div>

		</div>
	);
};

export default Shop;