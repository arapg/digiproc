import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'

function Cart() {
	const { cartItems, removeFromCart } = useCart()
	const [isExpanded, setIsExpanded] = useState(false)

	const renderCartItems = () => {
		if (cartItems.length === 0) {
			return <p className='text-gray-600'>Your cart is empty</p>
		}

		return (
			<ul className='space-y-4'>
				{cartItems.map((item) => (
					<li
						key={item.id}
						className='flex items-center justify-between border-b pb-2'
					>
						<button onClick={() => removeFromCart(item.id)}>x</button>
						<span className='max-w-[120px] truncate'>{item.name}</span>
						<span>{item.quantity}x</span>
						<span className='font-semibold'>
							{item.quantity * item.price} SEK
						</span>
					</li>
				))}
			</ul>
		)
	}

	const handleToggleExpand = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div
			className={`bg-white shadow-md p-3.5 rounded-xl cursor-pointer fixed bottom-7 right-8 transition-all duration-300
            ${isExpanded ? 'w-[320px] h-[400px] ' : 'w-[68px] h-[68px]'}`}
		>
			<div onClick={handleToggleExpand} className='absolute top-3 left-3 flex '>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='40px'
					viewBox='0 -960 960 960'
					width='40px'
					fill='#1A364C'
					className=''
				>
					<path d='M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z' />
				</svg>
				{isExpanded && (
					<h2 className='text-xl font-bold text-[#1A364C] pt-2 pl-3'>Cart</h2>
				)}
			</div>

			{isExpanded && (
				<div className='mt-14 p-4 max-h-[400px] overflow-scroll'>
					{renderCartItems()}
				</div>
			)}

			{isExpanded && cartItems.length > 0 && (
				<div className='flex justify-center'>
					<button className='underline'>Go to checkout</button>
				</div>
			)}
		</div>
	)
}

export default Cart
