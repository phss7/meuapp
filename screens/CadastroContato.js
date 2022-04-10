import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Header, icon } from 'react-native-elements';
import { useState } from 'react';



export default function App() {

  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)

  return (
    <View style={styles.container}>
    <header
      leftComponent={{ icon: 'menu', color:  '#afff' }}
      centerComponent={{ text: 'Contato', style: { color: '#afff '} }}
      rightComponent={{ icon: 'home', color: '#afff' }}

    /> 
      
      <Text h1>Contato</Text>
      <Input
        placeholder="Nome"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setNome(value)}
        
        />

      <Input
        placeholder="Email"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        />

      <Input
        placeholder="Telefone"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setPhone(value)}
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
