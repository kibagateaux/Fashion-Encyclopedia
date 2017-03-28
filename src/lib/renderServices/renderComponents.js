import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { Card, CardSection, List } from '../../Components/general';



//can be passed single URL as a string or array of strings
function _Image(image, styleObj){
   console.log("_Image");
    console.log(image, styleObj);
     console.log(typeof image);
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
function _Card(obj, destination){
   // console.log('_Card _Image array test');
   // console.log(_Item( _Image, obj.mainImage, styles.imageLeftThumbnail) );

  return (
    <Card>
      <TouchableOpacity
        key={obj.name}
        onPress={() => destination(obj)}
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
//   Actions[destination]
function _List(data, destination){
   const DS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   return <List data={data} destination={destination} />
}

function _Item(func, data, metaData = null){
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
