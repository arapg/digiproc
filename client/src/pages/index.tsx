import Cart from '@/components/Cart'
import ProductCard from '@/components/ProductCard'
import { useProducts } from '@/hooks/useProducts'

export default function Home() {
	const { products, error } = useProducts()

	return (
		<div className='bg-slate-50 min-h-screen'>
			<div className='flex items-center justify-center'>
				<div className='flex flex-wrap justify-center gap-16 max-w-screen-lg'>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
			<Cart />
		</div>
	)
}
