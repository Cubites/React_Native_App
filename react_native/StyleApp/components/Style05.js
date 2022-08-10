import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Style05 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Div>
          <TextCenter>A</TextCenter>
        </Div>
        <Div>
          <TextCenter>B</TextCenter>
          <View style={[styles.smallDiv, {position: 'absolute', right: 0, bottom: 0}]}>
            <TextCenter>E</TextCenter>
          </View>
        </Div>
        <Div>
          <TextCenter>C</TextCenter>
        </Div>
      </View>
      <Div style={{position: 'absolute', right: 0, bottom: 0}}>
        <TextCenter>D</TextCenter>
      </Div>
    </View>
  )
}

const Div = (props) => {
  return (
    <View style={[styles.div, props.style]}>
      {props.children}
    </View>
  )
}

const TextCenter = (props) => {
  return (
    <Text style={[styles.textCenter, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    width:300,
    height:300,
    margin:40,
    marginTop: 100,
    borderWidth:1
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  div: {
    width:100,
    height:100,
    backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center'
  },
  smallDiv: {
    width:30,
    height:30,
    borderWidth:1,
    justifyContent:'center',
    backgroundColor:'lightgrey'
  },
  textCenter: {
    textAlign:'center',
    margin: 10
  }
});

export default Style05