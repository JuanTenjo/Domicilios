import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import * as firebase from 'firebase';
import * as Firesabe from '../lib/firebase'
import * as Facebook from 'expo-facebook';
import { Container, Content, Item, Form, Button, Input } from 'native-base';
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      pass: '',
      response: ''
    }
  }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null){
        console.log(user)
      }
    })
  }
  async signUp() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
      this.setState({
        response: 'Cuenta Creada!'
      })
      setTimeout(() => {
        this.props.navigation.navigate('Home')
      }, 1500)
    } catch (error) {
        alert(error);
    }
  }
  async login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
      this.setState({
        response: 'Usuario Logiado',
      })
      setTimeout(() =>{
        this.props.navigation.navigate('Home')
      })
    } catch (error) {
      alert(error);
    }
  }
  async loginWithFacebook(){
    try{
    await Facebook.initializeAsync('898768537224423');
    const {type,token} = await Facebook.logInWithReadPermissionsAsync('898768537224423',{
    permissions:['public_profile'],
    });
    if(type === 'success'){
      alert("Entro aqui")
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential).catch((error) => {
        alert("Entro aqui")
        this.props.navigation.navigate('Home')
          console.log(error)
      })
    }else{
      alert("No entro al if succes")
    }
  } catch({message}){
    alert(`Facebook Login Error: ${message}`)
  }
}
/*async logIn() {
  try {
    await Facebook.initializeAsync('898768537224423');
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}*/
  render(){
    return(
      <Container style={styles.container}>
        <Content>
          <Form>
          <Item fixedLabel>
            <Input
              placeholderTextColor="grey"
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
              autoCapitalize="none"
            />
          </Item>       
          <Item fixedLabel> 
            <Input
                autoCapitalize="none"
                secureTextEntry={true}
                placeholderTextColor="grey"
                placeholder="Contraseña"
                password={true}
                onChangeText={(pass) => this.setState({pass})}
            />
          </Item>
          <Button block info onPress={this.signUp.bind(this)}  style={styles.login}>
            <Text>Registrar</Text>
          </Button>
          <Button block success onPress={this.login.bind(this)}  style={styles.registrar} full rounded>
            <Text>Iniciar</Text>
          </Button>
            <Button block info onPress={this.loginWithFacebook.bind(this)}  style={styles.registrar} full rounded>
            <Text>Iniciar con facebook</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  login: {
    padding: 10,
    margin: 10,
    color: 'white'
  },
  registrar: {
    padding: 10,
    margin: 10,
    color: 'white'
  }

})
/*Initialize Firebase*/
const firebaseConfig = {
  apiKey: "AIzaSyBqNoTfpjNQZ7zu8Kd-7Uonkad3e9bU7s4",
  authDomain: "domicilios-583a5.firebaseapp.com",
  databaseURL: "https://domicilios-583a5.firebaseio.com",
  projectId: "domicilios-583a5",
  storageBucket: "domicilios-583a5.appspot.com",
  messagingSenderId: "696912207591",
  appId: "1:696912207591:web:fdf752f5b1915eea160c42",
  measurementId: "G-N3W7L4DZ6H"
};
