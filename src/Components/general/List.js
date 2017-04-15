import React, {Component} from 'react'

import {
  ListView,
  View,
  StyleSheet,
} from 'react-native';

import { Card } from './Card';
import { CardSection } from './CardSection';


import { _Item, _Card }  from '../../lib/renderServices';


const List = (props) => {

  const { data, destination } = props
  const DS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return (
    <View>
      <ListView
        enableEmptySections={false}
        dataSource={DS.cloneWithRows(data)}
        renderRow={(rowData) => _Item(_Card, rowData, destination)}
      />
    </View>
  )
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

export { List } ;
