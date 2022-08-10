import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const ModeButton = ({ toggleMode }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.buttonStyle}
        underlayColor={'#aaa'}
        onPress={() => toggleMode()}
      >
        <Text style={styles.buttonText}>다크모드</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    margin: 30,
    borderRadius: 20,
    overflow: 'hidden'
  },
  buttonStyle: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default ModeButton