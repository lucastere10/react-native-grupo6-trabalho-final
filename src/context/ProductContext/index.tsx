import React, { createContext, useState, useEffect } from 'react';
import { ToastAndroid, Alert } from 'react-native';
import { productsListProps } from '../../components/cardProdutos';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextProps {
	children: React.ReactNode
}

export interface CartContextProvider {
	productList: productsListProps[],
	addProductToCart: (product: productsListProps) => void,
	removeProductFromCart: (id: number) => void,
	removeAllProductsFromCart: () => void,
	precoTotal: number
}


export const CartContext = createContext<CartContextProvider>({
    addProductToCart: (product: productsListProps) => { },
    productList: [{
        id: null,
        title: '',
        thumbnail: '',
        description: '',
        price: null,
        brand: '',
        category: '',
        rating: null,
        stock: null,
    }],
    removeProductFromCart: (id: number) => { },
    removeAllProductsFromCart: () => { },
    precoTotal: 0
});


export const CartProvider = ({ children }: ContextProps) => {
	const [productList, setProductList] = useState<productsListProps[]>([]);
	const [precoTotal, setPrecoTotal] = useState<number>(0);

	useEffect(() => {
		getData()
			.then(res => {
				setProductList(res ? res : []);
			})
	}, []);

	useEffect(() => {
		let soma = 0;
		productList[0] && productList.forEach((product) => {
			soma = soma + product.price
		})
		setPrecoTotal(soma);
	}, [productList])

	const storeData = async (value: productsListProps[]) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem('list-products', jsonValue);
		} catch (e) {
			// saving error
		}
	};

	const getData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('list-products');
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			// error reading value
		}
	};

	function addProductToCart(product: productsListProps) {
		// Check if the product is already in the cart
		const productExistsInCart = productList.some(cartProduct => cartProduct.id === product.id);
	
		// If the product is not in the cart, add it
		if (!productExistsInCart) {
			setProductList([...productList, product]);
			storeData([...productList, product]);
			ToastAndroid.show('Product added to cart', ToastAndroid.TOP);
		} else {
			Alert.alert('Product already in cart');
			console.log('Product is already in the cart');
		}
	}

	function removeProductFromCart(id: number) {
		let newProductList = productList.filter(magiItem => {
			return magiItem.id !== id
		})

		setProductList(newProductList);
		storeData(newProductList);
	}

	function removeAllProductsFromCart() {
		setProductList([]);
		storeData([]);
		Alert.alert('Removed all products from cart');
	}

	return (
		<CartContext.Provider
			value={{
				productList,
				addProductToCart,
				removeProductFromCart,
				removeAllProductsFromCart,
				precoTotal
			}}
		>
			{children}
		</CartContext.Provider>
	)
}