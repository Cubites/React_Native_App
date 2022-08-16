import React, { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';

const Box = ({ backgroundColor = '#3cae6f', scale = 1 }) => {
  return (
    <Animated.View style={{
      width: 100,
      height: 100,
      backgroundColor,
      transform: [{scale}]
    }} />
  )
}

const usePulse = (startDelay = 500) => {
  const scale = useRef(new Animated.Value(1)).current;
  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.3, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 0.7, useNativeDriver: true })
    ]).start(() => pulse());
    return scale;
  }

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), startDelay);
    return () => clearTimeout(timeout);
  }, []);
}

const App = () => {
  const scale = usePulse();
  const scale2 = usePulse(750);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Box scale={scale2} backgroundColor='#1f9cb8' />
      <Text>pulse</Text>
      <Box scale={scale} />
    </View>
  );
}

export default App;