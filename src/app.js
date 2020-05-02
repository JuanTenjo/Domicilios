import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Button} from 'react-native'
import Inicio from './screens/inicio';
import Login from './screens/login';
import Registro from './screens/registro';
import Home from './screens/home';
import * as firebase from 'firebase';

const LoginNavigator = createStackNavigator({

    Inicio: {
        screen: Inicio,
        navigationOptions: {
            title: 'Inicio',
            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#fff ',
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Iniciar Sesion',
            headerBackTitle: 'Volver',
            headerTruncatedBackTitle: 'Volver',
            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#fff ',
            }
        }
    },
    Registro: {
        screen: Registro,
        navigationOptions: {
            title: 'Registrate',
            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#fff ',
            }
        }
    },
    Home: {
        screen: Home,

        navigationOptions: {
            headerLeft: () => (
            null
            ),
            headerBackTitle: 'salir',
            headerTruncatedBackTitle: 'salir',
            title: 'Home',
            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#fff ',
            }
        }
    },

});

export default createAppContainer(LoginNavigator);