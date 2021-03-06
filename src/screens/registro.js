import * as firebase from 'firebase';
import React, {Component} from 'react';
import {StyleSheet, Alert, ImageBackground, View} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Label, Input } from 'native-base';
export default class AnatomyExample extends Component {
    constructor(props){
        super(props)
        this.state = {
          correo: '',
          usuario: '',
          Contraseña: '',
          Pais: '',
          Direccion: '',
          Ciudad: '',
          Departamento: '',
          Telefono: '',
          lista: [
            {
                id: 1,
                correo: 'tenjo2001@gmail.com',
                usuario: 'JUAN',
                Contraseña: 'JUAN',
                Pais: 'cOLOMBIA',
                Direccion: 'CALLE 21',
                Ciudad: 'NEIVA',
                Departamento: 'HUILA',
                Telefono: '3144147105',
            }
        ]
       };
      }
      
Registrar = () => {
    alert("Si ingreso")
    let correo = this.state.correo
    let usuario = this.state.usuario
    let Contraseña = this.state.Contraseña
    let Pais = this.state.Pais
    let Direccion = this.state.Direccion
    let Ciudad = this.state.Ciudad
    let Departamento = this.state.Departamento
    let Telefono = this.state.Telefono
    nuevo = {id:usuario,correo:correo,Contraseña:Contraseña,Pais:Pais,Direccion:Direccion,Ciudad:Ciudad,Departamento:Departamento,Telefono:Telefono};
    firebase.database().ref('items').push(nuevo);
    this.state.lista.push(nuevo);
    this.setState({lista: this.state.lista});
    console.log(nuevo);
}
    render(){
        return(
        <Container>
        <Content>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Correo'
            value={this.state.correo}
            onChangeText={correo=>this.setState({correo})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Nombre de usuario'
            value={this.state.usuario}
            onChangeText={usuario=>this.setState({usuario})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Contraseña'
            value={this.state.Contraseña}
            onChangeText={Contraseña=>this.setState({Contraseña})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Pais'
            value={this.state.Pais}
            onChangeText={Pais=>this.setState({Pais})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Direccion'
            value={this.state.Direccion}
            onChangeText={Direccion=>this.setState({Direccion})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Ciudad'
            value={this.state.Ciudad}
            onChangeText={Ciudad=>this.setState({Ciudad})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Departamento'
            value={this.state.Departamento}
            onChangeText={Departamento=>this.setState({Departamento})}
            />
        </Item>
        <Item>
            <Icon active name='home' />
            <Input placeholder='Telefono'
            value={this.state.Telefono}
            onChangeText={Telefono=>this.setState({Telefono})}
            />
        </Item>
        <Button  success onPress={this.Registrar} ><Text>Registrate</Text></Button>
        </Content>
      </Container>
        );
    }
}

// Initialize Firebase
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
  const firebaseApp = firebase.initializeApp(firebaseConfig); 