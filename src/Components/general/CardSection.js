import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  // no bueno on the dynamics
  // let style = { ...props.style }
  // style.prototype = styles

  return(
    <View style={nativeStyle.cardSection}>
      {props.children}
    </View>
    )

}
const nativeStyle = StyleSheet.create({
  cardSection:{
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: "#ddd",
    // position: "relative",
  },
});

export { CardSection };
