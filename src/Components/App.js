import React, {Component} from 'react'
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { _List, _Item }  from '../lib/renderServices';
import data from '../data';

import { List } from './general';
import SearchBox from './SearchBox';


export default class App extends Component{

  constructor(props){
    super(props)
  }

  render(){

    const classes = data.Index;

    return(
      <View style={{paddingTop: 55}}>
        <List data={classes} destination={Actions.CategoryPage} />
      </View>
    )
  }

}
