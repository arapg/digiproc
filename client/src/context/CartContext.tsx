import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of a cart item
interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
}

// Define the shape of the cart context
interface CartContextType {
	cartItems: CartItem[]
	addToCart: (item: CartItem) => void
	removeFromCart: (itemId: number) => void
	clearCart: () => void
}

// Create the cart context with a default value of `undefined`
const CartContext = createContext<CartContextType | undefined>(undefined)

// Define the props for the CartProvider
interface CartProviderProps {
	children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	const addToCart = (item: CartItem) => {
		setCartItems((prevItems) => [...prevItems, item])
	}

	const removeFromCart = (itemId: number) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
	}

	const clearCart = () => setCartItems([])

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	)
}

// Custom hook for using the cart context
export const useCart = (): CartContextType => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}
