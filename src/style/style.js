
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({

/////  geral
    container: {
      flex: 1,
      backgroundColor: '#ffefd5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLogado: {
      flex: 1,
      backgroundColor: '#deb887',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textGeral: {
      color: '#008b8b',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign:'center',
    },
    texto: {
      color: '#b22222',
      fontSize: 30,
    },
    legenda: {
      color: '#b8860b',
      fontSize: 20,
    },
    buttonProximo: {
      width: 150,
      height: 42,
      backgroundColor: '#faf0e6',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',   
    },
    buttonTextProximo:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#008b8b'
    },
    input:{
      marginTop: 10,
      marginBottom: 20,
      padding: 10,
      width: 300,
      backgroundColor: '#f8f8ff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 7,
      borderWidth: 3,
      borderColor: '#deb887',
    },

///// login

    textApp: {
      color: '#6b8e23',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign:'center',
    },
    imagem: {
      width: 170,
      height: 170,
      borderRadius: 85,
      overflow: "hidden",
      borderWidth: 15,
      borderColor: '#6b8e23',
    },
    button: {
      width: 150,
      height: 42,
      backgroundColor: '#6b8e23',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   
    },
    buttoncad: {
      width: 90,
      height: 42,
      backgroundColor: '#6b8e23',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   
    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#f8f8ff'
    },
    buttoncadText:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#f8f8ff'
    },

///// cadastramento

    cadtexto: {
      color: '#000000',
      fontSize: 20,
    },

/////  home

    imagemHome: {
      width: 120,
      height: 120,
      borderRadius: 10,
    },

    textNomeHome: {
      color: '#6a5acd',
      fontWeight: 'bold',
      fontSize: 35,
    },

    buttonTextHome:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#008b8b'
    },

    buttonHome: {
      width: 150,
      height: 42,
      backgroundColor: '#faf0e6',
      marginTop: 30,
      marginBottom: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

    textConfHome: {
      color: '#483d8b',
      fontWeight: 'bold',
      fontSize: 35,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 30,
      backgroundColor: '#cd5c5c',
    },

    buttonDuvida: {
      width: 130,
      height: 42,
      backgroundColor: '#ff6347',
      marginTop: 20,
      marginBottom: 30,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',   
    },

    buttonTextDuvida:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000'
    },

    buttonSair: {
      width: 100,
      height: 42,
      backgroundColor: '#800000',
      marginTop: 30,
      marginBottom: 30,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',   
    },

    buttonTextSair:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffe0'
    },


///// dias
    buttonSemana: {
      width: 180,
      height: 50,
      backgroundColor: '#6495ed',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

    textoPropDia:{
      color: '#000000',
      fontSize: 30,
      textAlign:'center',
      letterSpacing: 2,
      //backgroundColor: '#000000',
    },

    buttondia: {
      width: 150,
      height: 42,
      backgroundColor: '#deb887',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonTextDias:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fffaf0'
    },

/////  materiais
    buttonPlastico: {
      width: 200,
      height: 80,
      backgroundColor: '#dc143c',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonMetal: {
      width: 200,
      height: 80,
      backgroundColor: '#ffd700',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonVidro: {
      width: 200,
      height: 80,
      backgroundColor: '#228b22',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonPapel: {
      width: 200,
      height: 80,
      backgroundColor: '#4169e1',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonMateriaisText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000'
    },

/////  confirmando
    imagemOk: {
      width: 170,
      height: 170,
    },
    buttonFinalizar: {
      width: 120,
      height: 40,
      backgroundColor: '#6495ed',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonFinalizarText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000'
    },

/////  duvidas

    containerDuvida: {
      flex: 1,
      backgroundColor: '#66cdaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContato: {
      color: '#000080',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign:'center',
    },
    buttonContato: {
      width: 150,
      height: 60,
      backgroundColor: '#000080',
      marginTop: 30,
      marginBottom: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',   
    },
    buttonTextContato:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fdf5e6'
    },



});

 export default styles;