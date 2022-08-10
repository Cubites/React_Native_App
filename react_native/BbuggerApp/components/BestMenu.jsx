import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BestMenu = ({ Mode }) => {
  return (
    <View style={bestStyle.container}>
      <Text style={[bestStyle.title, {color: Mode ? '#000' : '#fff'}]}>최고 인기메뉴</Text>
      <View style={bestStyle.card}>
        <View style={bestStyle.cardHeader}>
          <View style={bestStyle.cardHeaderLeft}>
            <Image source={require('../images/bugger_icon.png')} style={bestStyle.cardHeaderLeftImage}/>
          </View>
          <View style={bestStyle.cardHeaderCenter}>
            <Text style={[bestStyle.cardHeaderCenterText, bestStyle.textBold]}>Burger</Text>
            <Text style={bestStyle.cardHeaderCenterText}>Junk Food</Text>
          </View>
          <View style={bestStyle.cardHeaderRight}>
            <Icon name='heart-o' style={bestStyle.cardHeaderRightIcon}></Icon>
          </View>
        </View>
        <View style={bestStyle.cardContents}>
          <View style={bestStyle.cardContentsLeft}>
            <View>
              <Text style={bestStyle.cCLText}>Pimento Burger & cheddar Cheese</Text>
            </View>
            <View style={bestStyle.cCLButton}>
              <Text>price</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>5,000원</Text>
            </View>
          </View>
          <View style={bestStyle.cardContentsRight}>
            <Image source={require('../images/bugger.png')} style={bestStyle.cCRImage} />
          </View>
        </View>
      </View>
    </View>
  )
}

const bestStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    paddingBottom: 5
  },
  card: {
    backgroundColor: '#144c59',
    borderRadius: 10,
    padding: 20,
    minHeight: 200
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeaderLeft: {
    width: 40,
    height: 40,
    backgroundColor: '#2c5d8b',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeaderLeftImage: {
    width: 35,
    height: 35
  },
  cardHeaderCenter: {
    color: 'white',
    width: '70%',
    paddingHorizontal: '5%'
  },
  cardHeaderCenterText: {
    color: 'white'
  },
  textBold: {
    fontWeight: 'bold'
  },
  cardHeaderRight: {
    width: 40,
    height: 40,
    backgroundColor: '#2c5d8b',
    borderRadius: 20,
    justifyContent: 'center'
  },
  cardHeaderRightIcon: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center'
  },
  cardContents: {
    flex: 3,
    flexDirection: 'row',
    paddingTop: 30
  },
  cardContentsLeft: {
    flex: 1
  },
  cCLText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17
  },
  cCLButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  cardContentsRight: {
    flex: 1
  },
  cCRImage: {
    width: '100%',
    height: '80%',
    padding: 20,
    marginTop: 10
  }
});

export default BestMenu