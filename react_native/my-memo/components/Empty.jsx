import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image 
        source={require('../assets/images/empty.png')}
        style={styles.image}
        // cover(가로 세로 비율을 유지하고 resizing), contain, stretch, repeat
        reaseMode="cover" />
      <Text style={{fontSize: 25, color: '#999'}}>내용이 없습니다.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descr: {
    fontSize: 25,
    color: '#999'
  },
  image: {
    width: 155,
    height: 170,
    marginBottom: 15
  }

})

export default Empty