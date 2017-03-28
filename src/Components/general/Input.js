import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  const {value, label, onChangeText, placeholder, secure} = props;

  return(
    <View style={styles.inputContainer}>

      <Text style={styles.inputLabel}> {label} </Text>

      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        autocorrect={false}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
      />

    </View>
    )

}
const styles = StyleSheet.create({
  inputContainer:{
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel:{
    flex:1,
    fontSize: 18,
    paddingLeft: 20,
  },
  inputStyle:{
    flex: 2,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export { Input };
