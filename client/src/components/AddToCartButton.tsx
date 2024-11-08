import React from 'react'

interface AddToCartButtonProps {
	color: string
}

function AddToCartButton({ color }: AddToCartButtonProps) {
	return (
		<button
			className={`font-inter font-bold text-white px-[51px] py-[11px] rounded-md cursor-pointer`}
			style={{ background: color }}
		>
			Add to cart
		</button>
	)
}

export default AddToCartButton
