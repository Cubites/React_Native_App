import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Buttons = ({ btnText, inputHandler }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.buttonStyle}
        underlayColor="#bbb"
        onPress={() => inputHandler(btnText)}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    width: '100%',
    height: '100%',
    flex: 1,
    margin: 3,
  },
  buttonStyle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20
  }
})

export default Buttons