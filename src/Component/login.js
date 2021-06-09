//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';

// create a component
class login extends Component {
  
  state = {
    nome: ''
  }

  render(){
  return (
    <View style={styles.container}>

      <Image source={require('../reciclagem.jpg')} style={styles.imagem} />

      <Text style={styles.textApp}>Recicle</Text>

      <TextInput
          style={styles.input}
          onChangeText = {text => this.state.nome = text} 
          placeholder="Informe seu e-mail"
      />

      <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
      />  

      <TouchableOpacity
          style={styles.button} onPress={() => {this.props.navigation.navigate('home',{'nome' : this.state.nome}) }}>
            <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity
          //style={styles.buttoncad} onPress={() => {this.pressed()}}>
           style={styles.buttoncad} onPress={() => {this.props.navigation.navigate('cadastramento') }}>
            <Text style={styles.buttoncadText}>Cadastrar</Text>
      </TouchableOpacity>

      
    </View>
  );
  };
}
export default login;

