import React from 'react'

interface AddToCartButtonProps {
	color: string
}

function AddToCartButton({ color }: AddToCartButtonProps) {
	return (
		<button
			className={`font-custom font-bold text-xs text-white tracking-tight px-[51px] py-[11px] rounded-md cursor-pointer`}
			style={{ background: color }}
		>
			ADD TO CART
		</button>
	)
}

export default AddToCartButton
