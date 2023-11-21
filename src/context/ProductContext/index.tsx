import React, { createContext, useState, useEffect } from 'react';
import { productsListProps } from '../../components/cardProdutos';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextProps {
	children: React.ReactNode
}


// export interface CartContextProvider {
// 	productItemList: productsListProps[],
// 	addMagicItemToCart: (magicItem: productsListProps) => void,
// 	removeMagicItemFromCart: (index: string) => void,
// 	precoTotal: number
// }


// export const CartContext = createContext<CartContextProvider>({
// 	addMagicItemToCart: (magicItem: productsListProps) => { },
// 	magicItemList: [{
// 		index: '',
// 		name: '',
// 		url: ''
// 	}],
// 	removeMagicItemFromCart: (index: string) => { },
// 	precoTotal: 0
// });

// export const CartProvider = ({ children }: ContextProps) => {
// 	const [magicItemList, setMagicItemList] = useState<productsListProps[]>([]);
// 	const [precoTotal, setPrecoTotal] = useState<number>(0);

// 	useEffect(()=>{
// 		getData()
// 			.then(res=>{
// 				setMagicItemList(res ? res : []);
// 			})
// 	},[]);

// 	useEffect(()=>{
// 		let soma = 0;
// 		magicItemList[0] && magicItemList.forEach((magicItem)=> {
// 			soma= soma + magicItem.preco
// 		})
// 		setPrecoTotal(soma);
// 	},[magicItemList])

// 	const storeData = async (value: productsListProps[]) => {
// 		try {
// 			const jsonValue = JSON.stringify(value);
// 			await AsyncStorage.setItem('list-magic-item', jsonValue);
// 		} catch (e) {
// 			// saving error
// 		}
// 	};

// 	const getData = async () => {
// 		try {
// 			const jsonValue = await AsyncStorage.getItem('list-magic-item');
// 			return jsonValue != null ? JSON.parse(jsonValue) : null;
// 		} catch (e) {
// 			// error reading value
// 		}
// 	};

// 	function addMagicItemToCart(magicItem: productsListProps) {
// 		setMagicItemList([...magicItemList, magicItem]);
// 		storeData([...magicItemList, magicItem]);
// 	}

// 	function removeMagicItemFromCart(index: string) {
// 		let newMagicItemList = magicItemList.filter(magiItem => {
// 			return magiItem.index !== index
// 		})

// 		setMagicItemList(newMagicItemList);
// 		storeData(newMagicItemList);
// 	}

// 	return (
// 		<CartContext.Provider
// 			value={{
// 				magicItemList,
// 				addMagicItemToCart,
// 				removeMagicItemFromCart,
// 				precoTotal
// 			}}
// 		>
// 			{children}
// 		</CartContext.Provider>
// 	)
// }