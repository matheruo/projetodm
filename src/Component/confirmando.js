//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';


// create a component
class confirmando extends Component {

  state = {
    confirmacao: 'Agendado para coleta!'
  }

  render() {
    return (
      <View style={styles.containerLogado}>

        <Image source={require('../ok.png')} style={styles.imagemOk} />

        <Text style={styles.textGeral}>Seu agendamento foi concluído</Text>

        <TouchableOpacity
          style={styles.buttonFinalizar} onPress={() => {this.props.navigation.navigate('home',{'confirmacao' : this.state.confirmacao}) }}>
            <Text style={styles.buttonFinalizarText}>Finalizar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

//make this component available to the app
export default confirmando;

