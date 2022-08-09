import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>To Do List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
  },
  title: {
    fontWeight: '600',
    fontSize: 40,
    width: '100%',
    textAlign: 'center',
    marginTop: 60
  },
})

export default Heading