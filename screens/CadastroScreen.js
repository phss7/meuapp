import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Header, icon } from 'react-native-elements';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";


export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const firebaseConfig = {
    apiKey: "AIzaSyCcHkr8IxdShZZkhtlCLgxuv-O6UlAQzLc",
    authDomain: "app-pos-978d2.firebaseapp.com",
    projectId: "app-pos-978d2",
    storageBucket: "app-pos-978d2.appspot.com",
    messagingSenderId: "36916146115",
    appId: "1:36916146115:web:15751c5320a22bf5771776"
  };

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    showMessage({
      message: "Registro Adicionado com Sucesso!!",
      type: "success",
    });
    Alert.alert( "Usuário cadastrado")
    console.log('Cadastro realizado com sucesso');
    const user = userCredential.user;
      isVisible: true; 
      Message: "Cadastro realizado com sucesso"
      // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const CustomAlert = ( realizado ) => {
 <CustomAlert
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
}
  return (
    <View style={styles.container}>
      <Text h1></Text>
      
      <Input
        placeholder="email"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        />

      <Input
        placeholder="senha"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        />

<Button
                title={'Salvar'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
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
