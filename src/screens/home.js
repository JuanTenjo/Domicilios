import React, { Component } from 'react';
import {StyleSheet, Alert, ImageBackground, View, TouchableHighlight} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {  Container,  Content, Text, Body, Button, Item, Input, H1} from 'native-base';
import * as firebase from 'firebase';
export default class Home extends Component {

    async logouth(){
        try {
            await firebase.auth().signOut()
            this.props.navigation.navigate('Inicio')
        } catch (error) {
            console.log(error)
        }
    }
  render(){
      return(
        <View>
        <Text>Hola Natalia</Text>
        <TouchableHighlight onPress={this.logouth.bind(this)}>
            <Text>Cerrar</Text>
        </TouchableHighlight>
        </View>
      );
  }
}
