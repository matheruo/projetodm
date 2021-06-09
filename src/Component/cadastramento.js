//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';

// create a component
class cadastramento extends Component {

  state = {
    nome: ''
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.cadtexto}>Insira seu E-mail</Text>
      
      <TextInput
          style={styles.input}
          onChangeText = {text => this.state.nome = text} 
          placeholder="Informe seu e-mail"
      />

      <Text style={styles.cadtexto}>Escolha sua senha</Text>

      <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
      /> 

      <Text style={styles.cadtexto}>Insira sua senha novamente</Text>

      <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry={true}
      /> 

      <TouchableOpacity
          style={styles.button} onPress={() => {this.props.navigation.navigate('home',{'nome' : this.state.nome}) }}>
          <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

//make this component available to the app
export default cadastramento;

