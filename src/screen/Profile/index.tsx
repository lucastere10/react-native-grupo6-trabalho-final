import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';

export const Profile = ({ setAuth }) => {
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [url, setUrl] = useState('');

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
          setUrl(userInfo.image)
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
      </View >
        <View style={styles.cardtotal} >
          <Image source={{ uri: url }} style={styles.profileImage} />
        </View>
      <View style={styles.cardcontainer}>
        <Text style={styles.text2}><Text style={styles.boldText}>First Name: </Text> {firstname}</Text>
        <Text style={styles.text2}><Text style={styles.boldText}>Second Name: </Text> {secondname}</Text>
        <Text style={styles.text2}><Text style={styles.boldText}>E-Mail: </Text>{email}</Text>
        <Text style={styles.text2}><Text style={styles.boldText}>User: </Text>{usuario}</Text>
      </View>
    </SafeAreaView>
  );
};
