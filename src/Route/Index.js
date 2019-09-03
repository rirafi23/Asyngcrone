import React, {Component} from 'react'
import {Text, View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from '../Component/Home'
import Kedua from '../Component/inHome'

const AppNavigator = createStackNavigator({
  HomeScreen:{
    screen:Home,
    navigationOptions:{
      title:'News'
    }
  },
    Search:{
    screen:Kedua,
  },
});
export default createAppContainer(AppNavigator);
