import React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Home = (route) => {

  return (
    <View style={{flex: 1}}>
      <List.Accordion 
        title="하단 네비게이션"
        left={props => <List.Icon {...props} icon="folder" />}
      >
        <List.Item title="Animatble Tab1" onPress={() =>  navigate('Tab1')} />
        <List.Item title="Animatble Tab2" onPress={() =>  navigate('Tab2')} />
        <List.Item title="Animatble Tab3" onPress={() =>  navigate('Tab3')} />
        <List.Item title="Animatble Tab4" onPress={() =>  navigate('Tab4')} />
        <List.Item title="Animatble Tab5" onPress={() =>  navigate('Tab5')} />
      </List.Accordion>
      <List.Accordion 
        title="본문 리스트"
        left={props => <List.Icon {...props} icon="folder" />}
      >
        
      </List.Accordion>
    </View>
  )
}

export default Home