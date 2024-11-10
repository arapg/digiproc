import React from 'react'

interface AddToCartButtonProps {
	color: string
	onClick: () => void
}

function AddToCartButton({ color, onClick }: AddToCartButtonProps) {
	return (
		<button
			className={`font-custom font-bold text-xs text-white tracking-tight px-[51px] py-[11px] rounded-md cursor-pointer`}
			style={{ background: color }}
			onClick={onClick}
		>
			ADD TO CART
		</button>
	)
}

export default AddToCartButton
