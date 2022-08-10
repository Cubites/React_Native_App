import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ Mode }) => {
  return (
    <View style={headerstyle.container}>
      <Text style={[headerstyle.titleText, {color: Mode ? '#000' : '#fff'}]}>
        WELLCOME B-BUGGER!
      </Text>
    </View>
  )
}

const headerstyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40
  }, 
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default Header