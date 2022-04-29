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
  const [getcpf, setCpf] = useState('');
  const [gettelefone, setTelefone] = useState('');
  const [getid,setId] = useState();
  

  useEffect(()=>{
    if(route.params){
      const { nome } =  route.params 
      const { cpf } = route.params 
      const { telefone } = route.params
      const { id } = route.params
     
  
        setNome(nome);
        setCpf(cpf);
        setTelefone(telefone);
        setId(id);
    }
        
    }, [])

  function alterarDados(){
    axios.put('http://professornilson.com/testeservico/'+getid,
          {
              nome: getnome,
              cpf: getcpf,
              telefone: gettelefone
              }).then(function (response) {
                setNome('');
                setCpf('');
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
      
      <Text h1>Contato</Text>
      <Input
        placeholder="Nome"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setNome(value)} 
        />

      <Input
       placeholder="CPF"
       leftIcon={{ type: 'font-awesome', name: '' }}
       onChangeText={value => setCpf(value)}
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
