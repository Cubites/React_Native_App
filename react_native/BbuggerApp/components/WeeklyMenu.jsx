import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeeklyMenu = () => {
  return (
    <View style={weeklyStyle.container}>
      <Text style={weeklyStyle.title}>금주의 메뉴</Text>
      <View style={weeklyStyle.card}>
        <View style={weeklyStyle.leftBox}>
          <Text style={weeklyStyle.leftBoxTitle}>French fries</Text>
          <Text style={weeklyStyle.leftBoxContent}>금주의 메뉴는 엄청나게 엄청난 프렌치 프라이입니다.</Text>
          <Image source={require('../images/fries.png')} style={weeklyStyle.leftBoxImage}/>
        </View>
        <View style={weeklyStyle.rightBox}>
          <View style={weeklyStyle.rightBoxTop}>

          </View>
          <View style={weeklyStyle.rightBoxBottom}>

          </View>
        </View>
      </View>
    </View>
  )
}

const weeklyStyle = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'space-between',
    minHeight: 250
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    paddingVertical: 5,
    paddingTop: 15
  },
  card: {
    flex: 3,
    borderRadius: 10,
    minHeight: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftBox: {
    backgroundColor: '#f08040',
    height: '100%',
    borderRadius: 10,
    marginRight: 10,
    maxWidth: '45%'
  },
  leftBoxTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
    marginHorizontal: 11
  },
  leftBoxContent: {
    color: '#ffffff',
    marginHorizontal: 11
  },
  leftBoxImage: {
    width: '50%',
    height: '45%',
    alignSelf: 'center',
    position: 'relative',
    bottom: -10
  },
  rightBox: {
    justifyContent: 'space-between',
    maxWidth: '45%'
  },
  rightBoxTop: {
    backgroundColor: '#e3e3f1',
    width: '100%',
    flex: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginBottom: 5
  },
  rightBoxBottom: {
    backgroundColor: '#e3e3f1',
    flex: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 5
  }
})

export default WeeklyMenu