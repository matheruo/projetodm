//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../style/style';

const PresentationComponents = (props) =>{
  return(
    <View>

      <Text style={styles.textoPropDia} onPress = {props.updateState} > 
        {props.myState}
      </Text>

    </View>
  )
}

// create a component
class materiais extends Component {

  state= {
    myState:'Material(is) Nâo Selecionado(s)'
  }

  updateState = () =>{
    this.setState({
      myState: 'Material(is) Selecionado(s)'
    })
  }

  render() {
    return (
      <View style={styles.containerLogado}>

        <Text style={styles.textGeral}>Indique o(s) materiais(s) para recolhimento</Text>

        <TouchableOpacity
          style={styles.buttonPlastico} onPress={this.updateState }>
            <Text style={styles.buttonMateriaisText}>Plástico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonMetal} onPress={this.updateState }>
            <Text style={styles.buttonMateriaisText}>Metal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonVidro} onPress={this.updateState }>
            <Text style={styles.buttonMateriaisText}>Vidro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPapel} onPress={this.updateState }>
            <Text style={styles.buttonMateriaisText}>Papel</Text>
        </TouchableOpacity>

        <PresentationComponents myState = {this.state.myState} />

        <TouchableOpacity
           style={styles.buttonProximo} onPress={() => {this.props.navigation.navigate('confirmando') }}>
            <Text style={styles.buttonTextProximo}>Próximo</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



//make this component available to the app
export default materiais;

