import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Image } from 'react-native-elements';
import { useState } from 'react';
import login from './screens/login';
import ListaContatos from './screens/ListaContatos'
import CadastroScreen from './screens/CadastroScreen'
import CadastroContato from './screens/CadastroContato'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} />

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