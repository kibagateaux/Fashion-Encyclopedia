import React, {Component} from 'react'
import { View } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { _List, _Item } from '../lib/renderServices';

import { List } from './general';

import data from '../data';

export default class CategoryPage extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const { name } = this.props;
    console.log("CategoryPage prop");
    console.log(this.props);


    return(
      <View style={{flex: 1, paddingTop: 55}}>
        <List data={data[name]} destination={Actions.ProductPage} />
      </View>
    )
  }

}
