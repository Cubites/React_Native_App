import React, { useEffect, useRef } from 'react';
import { Animated, View, Button, Text, TouchableHighlight } from 'react-native';

const AutoButton = () => {
  const button1AnimationValue = useRef(new Animated.Value(0)).current;
  const button2AnimationValue = useRef(new Animated.Value(0)).current;
  const button3AnimationValue = useRef(new Animated.Value(0)).current;
  
  const buttonPressed = () => {
    button1AnimationValue.setValue(0); // 함수 종료 후, 값 초기화
    button2AnimationValue.setValue(0);
    button3AnimationValue.setValue(0);

    Animated.stagger(200, [
      Animated.timing(button1AnimationValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(button2AnimationValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(button3AnimationValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      })
    ]).start();
  }

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View 
        style={{
          marginTop: 5, 
          marginBottom: 5, 
          opacity: button1AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
          })}}
      >
        <Button title={"버튼 1"} color={'red'} />
      </Animated.View>
      <Animated.View 
        style={{
          marginTop: 5, 
          marginBottom: 5, 
          opacity: button2AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
          })}}
      >
        <Button title={"버튼 2"} color={'red'} />
      </Animated.View>
      <Animated.View 
        style={{
          marginTop: 5, 
          marginBottom: 5, 
          opacity: button3AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
          })}}
      >
        <Button title={"버튼 3"} color={'red'} />
      </Animated.View>

      <Button title={'애니메이션 실행'} onPress={buttonPressed}/>
    </View>
  )
}

export default AutoButton