import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

import { Button } from './Button';

const Header = (props) => {
  return(
    <View style={styles.header}>
      {props.children}
    </View>
  )
}



const styles = StyleSheet.create({
  header:{
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: "space-around",
  }
});

export { Header };
