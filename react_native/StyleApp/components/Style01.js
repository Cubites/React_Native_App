import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from './styles';

const Style01 = ({ BlackNWhite }) => {
  return (
    <View style={[styles01.container, styles.center]}>
      <Text style={[styles01.fontStyle, styles01.fontWeight, styles.center]}>스타일시트 적용</Text>
      <Text style={styles01.fontStyle}>스타일시트 적용</Text>
    </View>
  )
}

const styles01 = StyleSheet.create({
  container: {
    marginTop: 60
  },
  fontStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  },
  fontWeight: {
    fontWeight: 'bold'
  }
})

export default Style01