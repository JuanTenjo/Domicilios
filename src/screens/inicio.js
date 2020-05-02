import React, { Component } from 'react';
import {StyleSheet, Alert, ImageBackground, View} from 'react-native'
import {  Container,  Content, Text, Body, Button, Item, Input, H1} from 'native-base';
export default class AnatomyExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      pass: ''
  };
  }
  register = () => {
   this.props.navigation.navigate('Registro')
  }
  entrar = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <Container>

        <Content padder contentContainerStyle={styles.content}>
          <View>
            <View style={styles.botones}>
            <Button  success onPress={this.entrar} ><Text>Iniciar</Text></Button>
            </View>
          </View>
        </Content>

      </Container>
    );
  }
}
const styles = StyleSheet.create({

})
