import Cart from '@/components/Cart'
import ProductCard from '@/components/ProductCard'
import { useProducts } from '@/hooks/useProducts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
	const { products, error } = useProducts()

	return (
		<div className='bg-slate-50 min-h-screen'>
			<div className='flex items-center justify-center min-h-screen'>
				<div className='flex flex-wrap justify-center gap-16 max-w-screen-lg'>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
			<Cart />
			<ToastContainer autoClose={1000} />
		</div>
	)
}
