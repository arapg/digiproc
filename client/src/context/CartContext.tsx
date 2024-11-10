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
		setCartItems((prevItems) => {
			// Check if the item already exists in the cart
			const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)

			if (existingItem) {
				// If the item exists, increase its quantity
				return prevItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem,
				)
			} else {
				// If the item doesn't exist, add it to the cart with quantity of 1
				return [...prevItems, { ...item, quantity: 1 }]
			}
		})
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
