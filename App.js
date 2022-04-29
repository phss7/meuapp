import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Image } from 'react-native-elements';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
import login from './screens/login';
import ListaContatos from './screens/ListaContatos'
import CadastroScreen from './screens/CadastroScreen'
import CadastroContato from './screens/CadastroContato'
import AEContato from './screens/AEContato'

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={login } options={{ headerShown: false }} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} options={{ headerShown: false }} />
        <Stack.Screen name="Usuário" component={CadastroScreen} />
        <Stack.Screen name="Contato" component={CadastroContato} />
        <Stack.Screen name="Alterar" component={AEContato} />
        <Stack.Screen name="mostrarDados" component={CadastroScreen} />


      </Stack.Navigator>
    </NavigationContainer>
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