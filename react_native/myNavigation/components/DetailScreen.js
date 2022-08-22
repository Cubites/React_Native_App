import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  const [Count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="카운트 증가"/>
      )
    });
  });

  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>Count : {Count}</Text>
      <Text>itemId: { JSON.stringify(itemId) } </Text>
      <Text>otherParam: { JSON.stringify(otherParam) } </Text>
      <Button 
        title='Detail 페이지로 다시이동' 
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          otherParam: '자기 페이지로 이동합니다'
        })}/>
      <Button title='Home으로 이동' onPress={() => navigation.navigate('Home')}/>
      <Button title='Go Back' onPress={() => navigation.goBack()}/>
      <Button title='Go First Screen' onPress={() => navigation.popToTop()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreen