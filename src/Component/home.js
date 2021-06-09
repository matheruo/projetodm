//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';

// create a component
class home extends Component {
  render(){

    const {navigation} = this.props;

    const nameUser = navigation.getParam('nome');

    const avisoConfirmacao = navigation.getParam('confirmacao');

    return (
      <View style={styles.containerLogado}>

      <Text style={styles.textConfHome}>{avisoConfirmacao}</Text>

      <Image source={require('../user.png')} style={styles.imagemHome} />

      <Text style={styles.textGeral}>Olá</Text>

      <Text style={styles.textNomeHome}>{nameUser}</Text>

      <Text style={styles.textGeral}>Bem Vindo ao Home</Text>

      <TouchableOpacity
          style={styles.buttonHome} onPress={() => {this.props.navigation.navigate('dias') }}>
          <Text style={styles.buttonTextHome}>Agendar</Text>
      </TouchableOpacity>

      <TouchableOpacity
           style={styles.buttonDuvida} onPress={() => {this.props.navigation.navigate('duvida') }}>
            <Text style={styles.buttonTextDuvida}>Dúvidas?</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttonSair} onPress={() => {this.props.navigation.navigate('login') }}>
          <Text style={styles.buttonTextSair}>Sair</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

//make this component available to the app
export default home;


