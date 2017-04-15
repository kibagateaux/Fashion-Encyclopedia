import React, {Component} from 'react'
import { View } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { _List, _Item } from '../lib/renderServices';

import { Header, Button, Text } from './general';

import data from '../data';

export default class CategoryPage extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const { category } = this.props;

    data[category]


    return(
      <View style={{flex: 1, paddingTop: 55}}>
        { _Item(_List, data[category], Actions.ProductPage)}
      </View>
    )
  }

}
