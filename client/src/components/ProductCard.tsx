import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { Product } from '@/types/Product'
import AddToCartButton from './AddToCartButton'
import ProductPrice from './ProductPrice'

interface ProductCardProps {
	product: Product
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-white rounded-md relative drop-shadow-xl'>
			<div className='relative'>
				<Image
					src={product.imageURL}
					alt={product.name}
					width={200}
					height={163}
				/>
				<div className='font-custom text-sm font-semibold tracking-tight bg-white px-[10px] py-[7px] rounded-full absolute bottom-1 right-1'>
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
				<p className='text-xs font-normal tracking-tight'>Ratings</p>
				<div>
					<Rating value={product.rating} size='small' />
				</div>
				<div className=''>
					<AddToCartButton color={product.color} />
				</div>
			</div>
		</div>
	)
}

export default ProductCard
