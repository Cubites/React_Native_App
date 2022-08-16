import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Button} from 'react-native';

const Repeat = () => {
  const boxRed = useRef(new Animated.Value(0)).current;
  const boxBlue = useRef(new Animated.Value(0)).current;
  const boxAni = () => {
    Animated.stagger(500, [
      Animated.timing(boxRed, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      // Animated.delay(1000),
      Animated.timing(boxBlue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start((finished) => {
      if(finished){
        boxBlue.setValue(0);
        boxRed.setValue(0);
      }
    });
  }

  useEffect(() => {
    boxAni();
  }, [])
  

  return (
    <View>
      <Animated.View style={[
        styles.box, styles.red, {
          transform: [{
            translateX: boxRed.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 250]
            })
          }]
        }
      ]}/>
      <Animated.View style={[
        styles.box, styles.blue, {
          transform: [{
            translateX: boxBlue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 250]
            })
          }]
        }
      ]}/>
      <Button title="박스 이동" onPress={boxAni}/>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  blue: {
    backgroundColor: 'blue',
  },
  red: {
    backgroundColor: 'red',
  }
});

export default Repeat