import React, { useRef } from 'react';
import { View, Text, TextInput, Animated, Button, StyleSheet } from 'react-native';

const Scalebar = () => {
  const animatedWidth = useRef(new Animated.Value(200)).current;
  const animate = (value) => {
    Animated.timing(
      animatedWidth, {
        toValue: value,
        duration: 500,
        useNativeDriver: false
      }
    ).start();
  }
  return (
    <View style={styles.container}>
      <Animated.View style={{width: animatedWidth}}>
        <TextInput 
          style={[styles.input]} 
          placeholder={'텍스트를 입력하세요'}
          onFocus={() => animate(250)} 
          onBlur={() => animate(150)}
          ref={input => input = input}
          />
      </Animated.View>
      <Button title="전송" onPress={() => input.blur()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 150
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15
  },
})

export default Scalebar