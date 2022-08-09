import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

const Todo = ({data, todoDelete, toggleComplete}) => {
  return (
    <View style={[styles.todoContainer, data.complete ? styles.todoComplete : styles.todoNotComplete]}>
      <View style={styles.textbox}>
        <Text style={styles.textValue}>{data.title}</Text>
      </View>
      <TouchableHighlight 
        style={styles.button}
        activeOpacity={0.6}
        underlayColor="#dddddd"
        onPress={() => toggleComplete(data.todoIndex)}
      >
        <Text style={styles.textValue}>완료</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.button}
        activeOpacity={0.6}
        underlayColor="#dddddd"
        onPress={() => todoDelete(data.todoIndex)}
      >
        <Text style={styles.textValue}>삭제</Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10
  },
  todoComplete: {
    backgroundColor: '#a8dde4',
  },
  todoNotComplete: {
    backgroundColor: '#c5eec5',
  },
  textbox: {
    flex: 4
  },
  textValue: {
    height: '100%',
    textAlignVertical: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 10
  }
})

export default Todo