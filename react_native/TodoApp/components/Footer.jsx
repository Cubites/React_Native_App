import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Footer = ({ Type, setType }) => {
  return (
    <View style={styles.sortbox}>
      <TouchableHighlight 
        style={styles.sortButton}
        activeOpacity={0.6}
        underlayColor="#528852"
        onPress={() => setType('All')}
      >
        <Text style={styles.sortBtnText}>All</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.sortButton}
        activeOpacity={0.6}
        underlayColor="#528852"
        onPress={() => setType('Active')}
      >
        <Text style={styles.sortBtnText}>Active</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.sortButton}
        activeOpacity={0.6}
        underlayColor="#528852"
        onPress={() => setType('Complete')}
      >
        <Text style={styles.sortBtnText}>Complete</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  sortbox: {
    width: '100%',
    height: '10%',
    position: 'relative',
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sortButton: {
    position: 'relative',
    width: '100%',
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#aad3aa'
  },
  sortBtnText: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
  }
})

export default Footer