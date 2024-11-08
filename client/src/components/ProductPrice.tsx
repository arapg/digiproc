import React from 'react'

interface ProductPriceProps {
	price: number
}

function ProductPrice({ price }: ProductPriceProps) {
	const formattedPrice = new Intl.NumberFormat('en-US', {
		style: 'decimal',
		useGrouping: true,
	})
		.format(price)
		.replace(/,/g, ' ')

	return <span>{formattedPrice}</span>
}

export default ProductPrice
