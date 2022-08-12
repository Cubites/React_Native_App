import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

const Style01 = () => {
  return (
    <View style={styles.container}>
      <Exmaple style={{}}>A, 1</Exmaple>
      <Exmaple style={{transform: [{scale: 0.5}]}}>B, 0.5</Exmaple>
      <Exmaple style={{transform: [{scale: 2}]}}>C, 2</Exmaple>
      <Exmaple style={{transform: [{scaleX: 3}]}}>D, X3</Exmaple>
      <Exmaple style={{transform: [{scaleY: 1.5}]}}>E, Y1.5</Exmaple>
      {/* <ProfileCard /> */}
    </View>
  )
}

const Exmaple = (props) => {
  return (
    <View style={[styles.example, props.style]}>
      <Text>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center',
    flex: 1
  },
  example: {
    width: 80,
    height: 80,
    borderWidth: 2,
    margin: 15,
    alginItems: 'center', 
    justifyContent: 'center'
  }
})

export default Style01