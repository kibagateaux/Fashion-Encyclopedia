import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const Button = (props) => {
  let style;
  const { button, leftButton, sideButton, rightButton } = styles
  switch(props.type){
    case "left":
      style = [leftButton, sideButton, button];
      break;
    case "right":
      style = [rightButton, sideButton, button];
      break;
    default:
      style = styles.button
  }

  return (
    <TouchableOpacity style={style} onPress={() => props.onPress()}>
      <Text style={styles.buttonText}>
        {props.buttonText}
      </Text>
    </TouchableOpacity>
    )
}
const window = Dimensions.get('window');


const styles = StyleSheet.create({
  button:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  sideButton:{
    flex: 0.3,
  },
  leftButton:{
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightButton:{
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonText: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  }
});

export { Button };
