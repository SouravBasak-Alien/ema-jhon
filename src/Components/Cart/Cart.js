import React from 'react';
import './Cart.css'


const Cart = (props) => {
	const cart = props.Carts;
	let shiping = 0
	let total = 0;
	for (let i = 0;i < cart.length;i++) {
		const product = cart[i];
		total = total + product.price;
		shiping = shiping + product.shipping;
	}
	const tax = (total / 10).toFixed(2);
	const grandTotal = (total + shiping + Number(tax)).toFixed(2);

	const formetNumber = num => {
		const finxedNum = num.toFixed(2);
		return Number(finxedNum)
	}
	return (

		<div className="header-cart">
			<h1>Order Summary</h1>
			<p>Items Order : {cart.length}</p>
			<p><small>Price: ${formetNumber(total)}</small></p>
			<p><small>Shipping & Handling:${formetNumber(shiping)}</small></p>
			<p><small>Total tax ${tax}</small></p>
			<h4><small>Order Total ${grandTotal}</small></h4>
			<button className='review-btn'> Review your order</button>
		</div>

	);
};

export default Cart;