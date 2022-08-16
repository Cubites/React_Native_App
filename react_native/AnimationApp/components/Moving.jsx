import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';

const Moving = () => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const runAnimationClick = () => {
    Animated.timing(
      animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }
  useEffect(() => {
    runAnimationClick();
  }, []);
  return (
    <View>
      <Animated.View style={{ 
        height: 200, width: 200, backgroundColor: 'red', 
        transform: [{
          scale: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 2]
          })
        }]
      }}/>
    </View>
  )
}

export default Moving