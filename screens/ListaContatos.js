import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Header, icon, Image, TabView, Tab } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'native-base';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { ListItem, Avatar } from 'react-native-elements'
import { initializeApp } from "firebase/app";
import axios from 'axios';


export default function lista({route, navigation}) {

  const [dados,setDados] = useState([]);

  useEffect(()=>{
      function resgatarDados(){
        axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
          setDados(response.data);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      resgatarDados();
  })

  const list = [
    {
      name: 'Marcos Andrade',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 988553424'
    },
    {
      name: 'Patrícia Tavares',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 9987655332'
    },
    {
      name: 'Rodrigo Antunes',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 987765525'
    },
    {
      name: 'Pedro Henrique',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 986693221'
    },
    {
      name: 'Nilson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 995632578'
    },
    {
      name: 'Machado de Assis',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 988551839'
    },
    {
      name: 'Paulo Andre',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 985251535'
    },
    {
      name: 'Silva dos Santos',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 981146578'
    },
    {
      name: 'Caetano Veloso',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 985263779'
    },
    {
      name: 'Melo Neto',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 999982178'
    }

  ]

  return (
    <View>
      <ScrollView>
    <Header
     
      centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff' } }}
      rightComponent={{ icon: 'plus', type: 'font-awesome',  color: '#fff',  onPress:() => navigation.navigate('Contato')  }}
    />
  

  {
    dados.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png'}} />
        
        <ListItem.Content>
        <TouchableOpacity
                onPress={() => navigation.navigate('AEContato', {
                nome:l.nome,
                telefone:l.telefone,
                cpf:l.cpf,
                id:l.id,
                alterar:true 
              })}  
                >
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    ))
  }
    </ScrollView>
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
