import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { styles } from './style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/registerBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastre-se</Text>
       
       <View style={styles.input}>
       <Ionicons name="person-circle" size={28} color="#3F3335" />
        
        <TextInput
          style={{textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight:30}}
          placeholder="Nome"
          value={username}
          onChangeText={(text) => setUsername(text)}
        /> <View></View>
        </View>
        
        <View style={styles.input}>
        <Ionicons name="at" size={28} color="#3F3335" />
        <TextInput
          style={{textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight:30}}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        /><View></View>
        </View>

        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={28} color="#3F3335" />
          <TextInput
            style={{textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight:30}}
            placeholder="Password"
            //secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            /><View></View>
        </View>
        
        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={28} color="#3F3335" />
          <TextInput
            style={{textAlign: 'center', width: '100%', paddingLeft: 30, paddingRight:30}}
            placeholder="Repeat Password"
            secureTextEntry
            value={repeatPassword}
            onChangeText={(text) => setRepeatPassword(text)}
            /><View></View>
        </View>
        
        <TouchableOpacity style={styles.Botao} onPress={() => console.log('Realizar login')}>
          <Text style={{ color: 'white' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};