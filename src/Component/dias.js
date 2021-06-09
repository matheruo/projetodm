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
class dias extends Component {

  state= {
    myState:'Dia(s) Nâo Selecionado(s)'
  //  terca: 'naoSelecionado'
  }

  updateState = () =>{
    this.setState({
      myState: 'Dia(s) Selecionado(s)'
    //  terca: 'Selecionado'
    })
  }

  render() {
    return (
      <View style={styles.containerLogado}>

        <Text style={styles.textGeral}>Escolha o(s) dia(s) para recolher</Text>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Segunda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Terça</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Quarta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Quinta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Sexta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Sábado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSemana} onPress={this.updateState }>
            <Text style={styles.buttonTextDias}>Domingo</Text>
        </TouchableOpacity>

        <PresentationComponents myState = {this.state.myState}/>

        <TouchableOpacity
           style={styles.buttonProximo} onPress={() => {this.props.navigation.navigate('materiais') }}>
            <Text style={styles.buttonTextProximo}>Próximo</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


//make this component available to the app
export default dias;

