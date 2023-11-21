import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';

export const Profile = ({ setAuth }) => {
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('userInfo');
        if (value !== null) {
          const userInfo = JSON.parse(value);
          setFirstName(userInfo.firstName);
          setSecondName(userInfo.lastName);
          setEmail(userInfo.email);
          setUsuario(userInfo.username);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerUpper}>
        <Image style={{ marginTop: 30 }} source={require('../../assets/images/ShoinLogo.png')} />
      </View>
      <View style={styles.containerLower}>
        <Text style={styles.text}>Profile</Text>
        <View style={styles.cardcontainer}>
        <Image source={{ }} />
        </View>
      </View>
      <Text style={styles.text2}>{firstname}</Text>
      <Text style={styles.text2}>{secondname}</Text>
      <Text style={styles.text2}>{email}</Text>
      <Text style={styles.text2}>{usuario}</Text>
    </SafeAreaView>
  );
};
