import React from 'react'

interface AddToCartButtonProps {
	color: string
}

function AddToCartButton({ color }: AddToCartButtonProps) {
	return (
		<button
			className={`font-inter font-bold bg-[${color}] text-white px-[51px] py-[11px] rounded-md cursor-pointer`}
		>
			Add to cart
		</button>
	)
}

export default AddToCartButton
