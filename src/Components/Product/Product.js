import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

	const { img, name, seller, stock, price } = props.product;
	const handleaddProduct = props.handleaddProduct;


	return (
		<div>
			<div className="item-container">
				<div>
					<img src={img} alt="" />
				</div>

				<div>
					<h3 className="product-name">{name} </h3>
					<p><small>by: {seller}</small></p>
					<br />
					<p>${price}</p>
					<p><small>only {stock} left in stock - order soon</small></p>
					<button className="product-btn" onClick={() => handleaddProduct(props.product)}>
						<FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;