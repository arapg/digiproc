import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { Product } from '@/types/Product'
import AddToCartButton from './AddToCartButton'

interface ProductCardProps {
	product: Product
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-white rounded-md'>
			<AddToCartButton color={product.color} />
			<div>
				<Image
					src={product.imageURL}
					alt={product.name}
					width={200}
					height={163}
				/>
			</div>
			<div>
				<p>{product.name}</p>
				<p>Ratings</p>
				<Rating value={product.rating} size='small' />
			</div>
		</div>
	)
}

export default ProductCard
