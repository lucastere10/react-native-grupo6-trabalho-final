import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { CartContext } from "../../context/ProductContext";


export interface productsListProps {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
    brand: string;
    stock: number;
}

export interface productProps {
    item: productsListProps
}

export const CardCarrinho = ({ item }: productProps) => {
    const { removeProductFromCart } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <View style={styles.produto}>
                <Image source={{ uri: item.thumbnail }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={[styles.title, { fontFamily: 'Poppins-Bold' }]} numberOfLines={1}>
                        {item !== undefined ? `${item.title}` : 'Loading...'}
                    </Text>
                    <Text style={[styles.price, { fontFamily: 'Poppins-Regular' }]}>
                        ${item !== undefined ? `${item.price}` : 'Loading...'}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => removeProductFromCart(item.id)}>
                <View style={{ justifyContent: 'flex-end', paddingRight: 12 }}>
                    <AntDesign name="closecircle" size={24} color="#DF3232" />
                </View>
            </TouchableOpacity>
        </View>
    )
}
