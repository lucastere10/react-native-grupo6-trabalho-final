import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { loginUser } from '../../context/authContext';

export const Login = ({ navigation, setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.input}>
          <Ionicons style={styles.icon} name="person-circle" size={28} color="#3F3335" />
          <TextInput
            style={{ textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight: 30 }}
            placeholder="Nome"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <View></View>
        </View>

        <View style={styles.input}>
          <FontAwesome style={styles.icon} name="unlock-alt" size={28} color="#3F3335" />
          <TextInput
            style={{ textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight: 30 }}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View></View>
        </View>

        <View>
          <Text style={styles.Letras} > Não possui conta? </Text>
          <TouchableOpacity onPress={() => console.log('Redirecionar para a tela de cadastro')}>
            <Text
              style={{ color: 'white', textAlign: 'center' }}
              onPress={() => navigation.navigate('Register')}
            >Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.Botao} onPress={() => {
          loginUser(username, password, setAuth);
          console.log('Realizar Login')
        }
        }>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
