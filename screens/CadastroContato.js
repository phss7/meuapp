import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Header, icon } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";


export default function App({ route,navigation }) {

  const [getNome,setNome] = useState([]);
  const [getEmail,setEmail] = useState([]);
  const [getTelefone,setTelefone] = useState([]);
  const [getCpf,setCpf] = useState([]);
  const [getId,setId] = useState([]);
  const [getBotao,setBotao] = useState([]);

  

  useEffect(()=>{
    
    if(route.params){
      const { nome } =  route.params 
      const { cpf } = route.params 
      const { telefone } = route.params
      const { id } = route.params
      const { botao } = route.params
  
        setNome(nome);
        setCpf(email);
        setTelefone(telefone);
        setCpf(Cpf);
        setId(id);
        setBotao(botao);
    }
  }, [])
  async function inserirDados(){

    await axios.post('http://professornilson.com/testeservico/clientes', {
        nome: getNome,
        cpf: getCpf,
        telefone: getTelefone
      })
      .then(function (response) {
        setNome('');
        setCpf('');
        setTelefone('');
        setId('');
        showMessage({
          message: "Registro Adicionado com Sucesso!!",
          type: "success",
        });
        //navigation.navigate('Cadastro')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
}

    function mostrarDados(){

        navigation.navigate('CadastroScreen')
         
      }


  return (
    <View style={styles.container}>
      
      <Text h1></Text>
      <Input
        placeholder="Nome"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setNome(value)}
        
        />

      <Input
        placeholder="CPF"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setCpf(value)}
        keyboardType="email-address"
        />

      <Input
        placeholder="Telefone"
        leftIcon={{ type: 'font-awesome', name: '' }}
        onChangeText={value => setTelefone(value)}
        />

<Button
                title={'Salvar'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => inserirDados()}
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
