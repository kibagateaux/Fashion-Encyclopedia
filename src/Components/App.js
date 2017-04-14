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
import WikiApi from '../data/WikiApi';

export default class App extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const categories = Object.keys(data).map(key => data[key][0]);
    return(
      <View style={{paddingTop: 55}}>
        { _Item(_List, categories, Actions.CategoryPage) }
      </View>
    )
  }

}
