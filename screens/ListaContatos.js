import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Text, Header, icon, Image, TabView, Tab } from 'react-native-elements';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'native-base';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { ListItem, Avatar } from 'react-native-elements'


export default function lista({route, navigation}) {

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
      <Tab.Item
        title="+"
        buttonStyle={(active) => {
          backgroundColor: active ? "red" : "blue";
        }}
        onPress={() => navigation.navigate('CadastroContato')}
      />

      <header
      leftComponent={{ icon: 'menu', color:  '#afff' }}
      centerComponent={{ text: 'Lista de Contato', style: { color: '#afff '} }}
      rightComponent={{ icon: 'home', color: '#afff' }}

    /> 
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }

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
