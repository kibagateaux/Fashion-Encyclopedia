import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
  return(
    <View>
      <ActivityIndicator size={ size || 'large' } style={styles.spinner} />
    </View>
  )
}
const styles = StyleSheet.create({
  spinner:{
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export { Spinner };
