import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';


import login from './src/Component/login';
import home from './src/Component/home';
import cadastramento from './src/Component/cadastramento';
import dias from './src/Component/dias';
import materiais from './src/Component/materiais';
import confirmando from './src/Component/confirmando';
import duvida from './src/Component/duvida';

//

const MainDrawer = createDrawerNavigator(
  {
    home: home,
    duvida: duvida,

  },
  {
    contentOptions: {

      activeTintColor:'#800000',

      labelStyle:{
        fontSize: 18
      }

    }
  }
)


const MainNavigation = createStackNavigator({
  login: {
    screen: login,
    navigationOptions:{
      headerTitle: 'Login'
      //header: null
    }
  },
  home:{
    screen: home,
    navigationOptions:{
      headerTitle: 'Home'
    }
  },
  cadastramento:{
    screen: cadastramento,
    navigationOptions:{
      headerTitle: 'Cadastramento'
    }
  },
  dias:{
    screen: dias,
    navigationOptions:{
      headerTitle: 'Dias'
    }
  },
  materiais:{
    screen: materiais,
    navigationOptions:{
      headerTitle: 'Materiais'
    }
  },
  confirmando:{
    screen: confirmando,
    navigationOptions:{
      headerTitle: 'Confirmando'
    }
  },
  duvida:{
    screen: duvida,
    navigationOptions:{
      headerTitle: 'Dúvidas'
    }
  }


})

export default createAppContainer(MainNavigation, MainDrawer);

