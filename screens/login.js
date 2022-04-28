import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Image } from 'react-native-elements';
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function loginFirebase({route, navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const firebaseConfig = {
    apiKey: "AIzaSyCcHkr8IxdShZZkhtlCLgxuv-O6UlAQzLc",
    authDomain: "app-pos-978d2.firebaseapp.com",
    projectId: "app-pos-978d2",
    storageBucket: "app-pos-978d2.appspot.com",
    messagingSenderId: "36916146115",
    appId: "1:36916146115:web:15751c5320a22bf5771776"
  };

  function loginFirebase(){
          const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Conectado');
          navigation.navigate('ListaContatos');
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log('Não conectado');
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  
  return (
    <View style={styles.container}>
      <Text h1>Login</Text>
      <View>
      <Image
     source={{ uri: "https://img2.gratispng.com/20181117/rr/kisspng-logo-user-viva-life-style-information-design-5bf0a6a16b8413.8854598315424979534404.jpg" }}
     style={{ width: 200, height: 200 }}
  
/>
      </View>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: '' }}
        value={email}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"

        />

<Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: '' }}
        value={password}
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
               onPress={() =>  loginFirebase()}
             />
 
<Button
               title={'Cadastre-se'}
               containerStyle={{
                 width: 200,
                 marginHorizontal: 50,
                 marginVertical: 10,
                 backgroundColor: '#ff0000', 
               }}
               onPress={() => navigation.navigate('Usuário')}

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
