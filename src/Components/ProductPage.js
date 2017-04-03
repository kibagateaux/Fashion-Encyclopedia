import React, {Component} from 'react'

import {
  ListView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Card, CardSection, Header, Button } from './general';

import { _Item, _Image } from '../lib/renderServices';

export default class ProductPage extends Component{
  constructor(props){
    super(props)
  }


  render(){

    const {
      mainImage,
      name,
      desc,
      sampleOutfits
    } = this.props;
     console.log(" ProductPage _Image array test ");

      console.log(sampleOutfits);
      console.log(_Item(_Image, sampleOutfits, styles.slideshowImage));
    return(
      <Card >

        <CardSection style={{flex: 1,  paddingTop: 55}}>
          <View style={styles.imageLeftContainer}>
            { _Item(_Image, mainImage, styles.imageLeftThumbnail)}
          </View>
          <View style={{flexDirection: 'column', flex: 0.8}}>
            <Text style={styles.listItemTitle}>  { name } </Text>
            <Text style={styles.listItemDesc}>  { desc } </Text>
          </View>
        </CardSection>

        <ScrollView
          horizontal
          contentContainerStyle={styles.slideshowContainer}
        >
          { _Item(_Image, sampleOutfits, styles.slideshowImage) }
        </ScrollView>

      </Card>
    )
  }

}

const styles = StyleSheet.create({
  imageLeftContainer:{
    flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
  },
  imageLeftThumbnail: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
    height: 200,
    // width: 150,
  },
  slideshowImage:{
    flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
  },
  slideshowContainer: {
    height: 300,
    width: 800,
    justifyContent: "center",
    marginBottom: 20,
  },
  listItemTitle:{
    fontSize: 20,
    fontWeight: "500",
  },
  listItemDesc: {
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 15,
  },
})

