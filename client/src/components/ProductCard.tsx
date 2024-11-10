import React, { useState } from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { Product } from '@/types/Product'
import AddToCartButton from './AddToCartButton'
import ProductPrice from './ProductPrice'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
	product: Product
}

function ProductCard({ product }: ProductCardProps) {
	const [rating, setRating] = useState(product.rating)
	const { addToCart } = useCart()

	const handleRatingChange = (
		event: React.SyntheticEvent,
		newValue: number | null,
	) => {
		if (newValue !== null) {
			setRating(newValue)
		}
	}

	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			quantity: 1,
		})
	}

	return (
		<div className='bg-white rounded-md relative drop-shadow-xl w-[200px] transform transition-transform duration-200 hover:scale-105'>
			<div className='relative'>
				<Image
					src={product.imageURL}
					alt={product.name}
					width={200}
					height={163}
				/>
				<div className='font-custom text-sm font-semibold tracking-tight bg-white px-[10px] py-[7px] rounded-full absolute bottom-1 right-1 text-[#1A364C]'>
					<ProductPrice price={product.price} /> SEK
				</div>
			</div>
			<div className='text-center p-2'>
				<h3
					className='text-sm font-custom font-semibold tracking-tight'
					style={{ color: product.color }}
				>
					{product.name}
				</h3>

				<div className='mb-4 mt-3'>
					<p className='text-[10px] font-normal tracking-tight mb-[4px]'>
						Ratings
					</p>
					<Rating value={rating} onChange={handleRatingChange} size='small' />
				</div>
				<div>
					<AddToCartButton color={product.color} onClick={handleAddToCart} />
				</div>
			</div>
		</div>
	)
}

export default ProductCard
