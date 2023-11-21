import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { styles } from './style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createUser } from '../../context/authContext';

export const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/images/registerBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastre-se</Text>

        <View style={styles.input}>
          <Ionicons name="person-circle" size={28} color="#3F3335" />

          <TextInput
            style={{ textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight: 30 }}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <View></View>
        </View>

        <View style={styles.input}>
          <Ionicons name="at" size={28} color="#3F3335" />
          <TextInput
            style={{ textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight: 30 }}
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View></View>
        </View>

        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={28} color="#3F3335" />
          <TextInput
            style={{ textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight: 30 }}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          /><View></View>
        </View>

        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={28} color="#3F3335" />
          <TextInput
            style={{ textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight: 30 }}
            placeholder="Repeat Password"
            secureTextEntry
            value={repeatPassword}
            onChangeText={(text) => setRepeatPassword(text)}
          /><View></View>
        </View>

        <TouchableOpacity
          style={styles.Botao}
          onPress={() => {
            // Verificar se todos os campos foram passados
            if (!username || !email || !password || !repeatPassword) {
              alert('All fields are required!');
              return;
            }

            // username com pelo menos 8 caracteres
            if (username.length < 8) {
              alert('Username must be at least 8 characters long!');
              return;
            }

            // Verificar se o email é valido
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              alert('Please enter a valid email!');
              return;
            }

            //  Verificar se a senha possui pelo menos 1 numero e 8 caracteres
            const passwordRegex = /^(?=.*\d).{8,}$/;
            if (!passwordRegex.test(password)) {
              alert('Password must be at least 8 characters long and contain at least 1 number!');
              return;
            }

            // Verificar se ambas as senhas são iguais
            if (password !== repeatPassword) {
              alert('Passwords do not match!');
              return;
            }

            createUser(username, email, password);
            navigation.navigate('Login');
          }}
        >
          <Text style={{ color: 'white' }}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};