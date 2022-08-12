import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const ShadowStyle = () => {
  return (
    <View style={styles.container}>
      <Shadow style={styles.ss}>
        <Text>테스트</Text>
      </Shadow>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: '#ddd',
    margin: 100
  },
  ss: {
    marginBottom: 20
  }
})

export default ShadowStyle