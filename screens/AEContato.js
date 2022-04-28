import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Header, icon } from 'react-native-elements';
import { useState, useEffect, TouchableOpacity } from 'react';
import { initializeApp } from "firebase/app";
import axios from 'axios';


export default function App({ route,navigation }) {

  const [getnome, setNome] = useState('');
  const [getemail, setEmail] = useState('');
  const [gettelefone, setTelefone] = useState('');
  const [getid,setId] = useState();
  

  useEffect(()=>{
    if(route.params){
      const { nome } =  route.params 
      const { email } = route.params 
      const { telefone } = route.params
      const { id } = route.params
     
  
        setNome(nome);
        setTelefone(telefone);
        setEmail(email);
        setId(id);
    }
        
    }, [])

  function alterarDados(){
    axios.put('http://professornilson.com/testeservico/'+getid,
          {
              nome: getnome,
              email: getemail,
              telefone: gettelefone
              }).then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');
                setId('');
              console.log(response);
              }).catch(function (error) {
              console.log(error);

              });

  }

  function listarDados(){
    navigation.navigate('CadastroScreen')
  }

  function alterarDados(){

    axios.delete('http://professornilson.com/testeservico/clientes/'+getid)
    
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }
  
  function excluirDados(){
    navigation.navigate('CadastroScreen')
  }

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
        onChangeText={value => setTelefone(value)}
        />

<Button
                title={'Alterar'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => alterarDados()}
              />
<Button
                title={'Excluir'}
                containerStyle={{
                  width: 200,
                  backgroundColor: '#ff0000', 
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => excluirDados()}
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
