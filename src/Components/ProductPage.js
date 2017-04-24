import React, {Component} from 'react'

import {
  ListView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Card, CardSection, Header, Button } from './general';

import { _Image } from '../lib/renderServices';

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

    return(
      <ScrollView style={{paddingTop: 55}}>
        <Card>

          <CardSection>
            <View style={styles.listItemTitleContainer}>
              <Text style={styles.listItemTitle}>  { name } </Text>
            </View>
            <View style={styles.imageLeftContainer}>
              { _Image(mainImage, styles.imageLeftThumbnail)}
            </View>
          </CardSection>
          <CardSection>
            <Text style={styles.listItemDesc}>  { desc } </Text>
          </CardSection>

          <View>
            <Text style={styles.slideshowHeader}> Inspirational Outfits </Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.slideshowContainer}
            >
              { _Image(sampleOutfits, styles.slideshowImage) }
            </ScrollView>
          </View>
        </Card>
      </ScrollView>
    )
  }

}

const window = Dimensions.get("window");

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
  listItemTitleContainer:{
    flexDirection: 'column',
    flex: 0.8,
    justifyContent: "space-around"
  },
  listItemTitle:{
    fontSize: 25,
    fontWeight: "500",
  },
  listItemDesc: {
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 15,
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
    padding: 20,
    marginBottom: 20,
  },
  slideshowHeader: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: window.width / 5,
    flexDirection: "row",
    flex: 0.01,
    justifyContent: "space-around"
  },
})

