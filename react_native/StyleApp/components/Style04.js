import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Style04 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600
  },
  box: {
    width: 138,
    height: 138,
    borderWidth: 1
  },
  box2: {
    position: 'absolute',
    left: 138
  },
  box3: {
    position: 'absolute',
    right: 0
  },
  box4: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
})

export default Style04