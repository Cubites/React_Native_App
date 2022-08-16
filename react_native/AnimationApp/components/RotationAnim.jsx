import React, { useEffect, useRef } from 'react';
import { Animated, View, Button, Text, StyleSheet, Easing } from 'react-native';

const RotationAnim = ({Loading, setLoading}) => {
  const animatedRotaion = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.loop(
      Animated.timing(
        animatedRotaion, {
          toValue: 1,
          duration: 1800,
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    ).start();
  }
  const rotation = animatedRotaion.interpolate({
    inputRange: [0, 0.5],
    outputRange: ['0deg', '360deg']
  });

  useEffect(() => {
    animate();
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const reload = () => {
    setLoading(true);
    animate();
    setTimeout(() => setLoading(false), 3000);
  }

  return (
    <View style={styles.container}>
      {
        Loading ? (
          <Animated.Image 
            source={require('../assets/loading.png')} 
            style={{ width: 40, height: 40, transform: [{rotate: rotation}] }}
          />
        ) : (
          <Text>Welcome My AnimationApp</Text>
        )
      }
      <Button title="다시 로드" onPress={reload}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50
  }
})

export default RotationAnim