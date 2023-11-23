import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { CartContext } from '../../context/ProductContext';
import { CardCarrinho } from '../../components/cardCarrinho';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Cart = ({ setAuth }) => {
  const { productList, precoTotal, removeAllProductsFromCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require('../../assets/images/ShoinLogo.png')} />
      </View>
      <View style={styles.containerLower}>
        <Text style={[styles.text, { fontFamily: 'Poppins-SemiBold' }]}>Purchase</Text>
      </View >
      <View style={styles.containerPrice}>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.priceText,{fontFamily: 'Poppins-SemiBold', color:'#17181C'}]}>Valor total:  </Text>
          <Text style={[styles.priceText,{fontFamily: 'Poppins-SemiBold', color:'#CF6615'}]}>${precoTotal}</Text>
        </View>
        <TouchableOpacity style={styles.removeAllButton} onPress={removeAllProductsFromCart}>
          <MaterialCommunityIcons name="cart-remove" size={20} color="white" />
          <Text style={[styles.removeAllText, { fontFamily: 'Poppins-SemiBold' }]} >Remove All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCard}>
        <FlatList
          data={productList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(data) => data.title}
          renderItem={({ item }) => (
            <CardCarrinho item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
