import React, {Component} from 'react'
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Card, CardSection, Header, List, Button } from './general';
import { Actions } from 'react-native-router-flux';

import { _List, _Item }  from '../lib/renderServices';

import data from '../data';

export default class App extends Component{

  constructor(props){
    super(props)
  }

  render(){

    const classes = data.Index;

    return(
      <View style={{paddingTop: 55}}>
        { _Item(_List, classes, Actions.CategoryPage) }
      </View>
    )
  }

}
