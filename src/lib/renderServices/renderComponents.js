import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection, List } from '../../Components/general';


// Content Path
// _Item => _List => _Card => _Image + Obj.desc

const _nav = (type) => {
   console.log("determining nav based on itemType");
  switch(type){
    case 'product':
      return Actions.ProductPage;
    case 'category':
      return Actions.CategoryPage;
    case 'person':
      console.log("there are no people, how did you get here?");
       console.log("P.S. you are in renderComponent lib _nav");
       return;
    default:
      console.log("renderComponent _nav; You did not specifiy an item type for navigation");
      return;
  }
}

//can be passed single URL as a string or array of strings
const _Image = (image, styleObj) => {
 switch(typeof image){
  case "string":
    return <Image
      source={{uri: image}}
      style={styleObj}
    />
  case "object":
   return image.map(x =>
      <Image
        key={x}
        source={{uri: x}}
        style={styleObj}
      />
    )
    default:
      return null;
  }
}

//TODO make text fields dynamic
// or make a few generic Card templates
// e.g. this is thmbnailCard
const _Card = (obj, destination) => {

  // destination is default value based on current screen
    // Category -> Product
  // obj.itemType is set to override that in case Category -> Category
  const nextScreen = obj.itemType? _nav(obj.itemType) : destination;

  return (
    <Card>
      <TouchableOpacity
        key={obj.name}
        onPress={() => nextScreen(obj)}
      >

      <CardSection>
        { _Item( _Image, obj.mainImage, styles.imageLeftThumbnail) }
        <Text style={styles.listItemTitle}> { obj.name } </Text>
        <Text style={styles.listItemDesc}> { obj.desc } </Text>
      </CardSection>

      </TouchableOpacity>
    </Card>
  )
}

//Returns ListView component
// data prop must be array
// destination is react-native-router-flux
//   Actions.destination
const _List = (data, destination) => {
  return <List data={data} destination={destination} />
}

const _Item = (func, data, metaData = null) => {
  return func(data, metaData);
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


export { _Item, _Image, _Card, _List };
