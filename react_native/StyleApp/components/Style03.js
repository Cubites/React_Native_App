import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Style03 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Icon name="user" size={85} color="#000000"/>
        </View>
        <TextCenter style={{fontSize: 30, color: '#fff'}}>
          홍길동
        </TextCenter>
        <TextCenter style={{fontSize: 20, borderBottomWidth: 1}}>
          React Native Developer
        </TextCenter>
        <P style={{ fontSize: 16, padding: 20, marginBottom: 20}}>
          놀이 사라지지 아름답고 없으면, 긴지라 피고 따뜻한 이것이야말로 얼음이 사막이다. 설레는 그들에게 주며, 동력은 황금시대다.
        </P>
      </View>
    </View>
  )
}

const Div = (props) => {
  return (
    <View style={[styles.div, styles.props]}>
      {props.children}
    </View>
  )
}

const TextCenter = (props) => {
  return (
    <Text style={[styles.centerText, props.style]}>
      {props.children}
    </Text>
  )
}

const P = (props) => {
  return (
    <Text style={[styles.fonts, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  div: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  centerText: {
    textAlign:'center',
    marginTop: 15
  },
  cardContainer: {
    backgroundColor: '#2196f3',
    width: 300,
    marginTop: 80,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#0069c0',
    borderStyle: 'solid',
    alignItems: 'center'
  },
  cardImageContainer: {
    backgroundColor: '#ffffff',
    width: 120,
    height: 120,
    marginTop: 30,
    borderRadius: 60,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fonts: {
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter'
      },
      android: {
        fontFamily: 'monospace'
      }
    })
  }
})

export default Style03