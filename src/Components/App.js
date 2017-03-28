import React, {Component} from 'react'
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
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

    const categories = Object.keys(data).map(key => data[key][0]);

    return(
      <View>
          <Header>
            <Button type="left" buttonText="Back" onPress={Actions.pop}/>
            <Text> Fashion Encyclopedia </Text>
            <Button type="right" buttonText="Home" onPress={Actions.App}/>
          </Header>
        { _Item(_List, categories, Actions.CategoryPage) }
      </View>
    )
  }

}




const styles = StyleSheet.create({
  imageLeftThumbnail: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 0.5,
    height: 100,
    width: 50,
  },
  listItemTitle:{
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
  },
  listItemDesc: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  }
})


