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

const _navSelector = (type) => {
  switch(type){
    case 'product':
      return Actions.ProductPage;
    case 'category':
      return Actions.CategoryPage;
    case 'class':
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
const _Image = (imageURL, styleObj) => {

  if(Array.isArray(imageURL)){
    return imageURL.map(x => {
      console.log("_Image url array");
      // console.log(x);
      return  <Image
          key={x}
          source={{uri: x}}
          style={styleObj}
        />

    }
    )
  }

  console.log("_Image url");
   console.log(imageURL);

  return (
    <Image
      source={{uri: imageURL}}
      style={styleObj}
    />
  )
}

//TODO make text fields + styling dynamic
// or make a few generic Card templates
// e.g. this is thumbnailCard

const _Card = (obj, destination) => {

  // destination is default value based on current screen
    // Category -> Product
  // obj.itemType is set to override that in case Category -> Category
  const nextScreen =  _navSelector(obj.itemType);


  // if itemType = class nextScreen obj is data[obj.class]

  // if itemType is category (not class)
  // nextScreen obj is data[obj.class][obj.category]

  // else nextScreen obj is obj

  // ^^ this requires changing CategoryPage from data[category] to data

  // if item type is category

  if(obj.index) return _indexCard(obj)

  return (
    <Card>
      <TouchableOpacity
        key={obj.name}
        onPress={() => nextScreen(obj)}
      >

      <CardSection>
        { _Image(obj.mainImage, styles.imageLeftThumbnail) }
        <View style={styles.cardTextContainer}>
          <Text style={styles.listItemTitle}> { obj.name } </Text>
          <Text
            style={styles.listItemDesc}
            ellipsizeMode="tail"
            numberOfLines={5}
          >
            { obj.desc }
          </Text>
        </View>
      </CardSection>

      </TouchableOpacity>
    </Card>
  )
}


const _indexCard = (obj, nextScreen) => (
  <TouchableOpacity
    key={obj.name}
    onPress={() => nextScreen(obj)}
  >
    <Card>
      <CardSection>
        { _Image(obj.mainImage, styles.imageLeftThumbnail) }
        <Text> { obj.name } </Text>
        <Text> { obj.desc } </Text>
      </CardSection>
    </Card>
  </TouchableOpacity>
)
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
    flexGrow: 0.2,
    height: 100,
    width: 50,
  },
  listItemTitle:{
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    justifyContent: "center",
  },
  listItemDesc: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  cardTextContainer:{
    flexDirection: "column",
    flex: 1,
    paddingLeft: 10
  }
})


export { _Item, _Image, _Card, _List };
