import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Image } from 'react-native-elements';
import React, { useState } from 'react';



export default function Login({route, navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  
  return (
    <View style={styles.container}>
      <Text h1>Login</Text>
      <View>
        <Image source={require('../assets/login.png')}
        Image/>
      </View>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        />

<Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        />

<Button
               title={'Login'}
               containerStyle={{
                 width: 200,
                 marginHorizontal: 50,
                 marginVertical: 10,
               }}
               onPress={() => navigation.navigate('ListaContatos')}
             />
 
<Button
               title={'Cadastre-se'}
               containerStyle={{
                 width: 200,
                 marginHorizontal: 50,
                 marginVertical: 10,
                 backgroundColor: '#ff0000', 
               }}
               onPress={() => navigation.navigate('Cadastro')}

             />
             
    </View>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
