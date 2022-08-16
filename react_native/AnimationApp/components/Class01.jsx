import React, { useRef } from 'react';
import { Text, View, Button, Animated, StyleSheet } from 'react-native';

const Class01 = () => {
  const fAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(
      fAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      }
    ).start();
  }
  const fadeOut = () => {
    Animated.timing(
      fAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
      }
    ).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, {opacity: fAnim}]}>
        <Text style={styles.fadingText}>
          Fading Text 입니다.
        </Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title='Fade Out' onPress={fadeOut} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: '#176ccc'
  },
  fadingText: {
    fontSize: 20
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16
  }
})

export default Class01