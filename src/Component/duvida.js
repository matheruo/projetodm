//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';

// create a component
class duvida extends Component {

  pressedWhatsApp = () => {
    Alert.alert("(71)9xxxx-xxxx")
  }

  pressedEmail = () => {
    Alert.alert("contato.recicle@gmail.com")
  }

  render() {
    return (
      <View style={styles.containerDuvida}>

      <Text style={styles.textContato}>Entre em contato conosco:</Text>

      <TouchableOpacity
          style={styles.buttonContato} onPress={() => {this.pressedWhatsApp()}}>
          <Text style={styles.buttonTextContato}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttonContato} onPress={() => {this.pressedEmail()}}>
          <Text style={styles.buttonTextContato}>E-Mail</Text>
      </TouchableOpacity>

      </View>
    );
  }
}


//make this component available to the app
export default duvida;

