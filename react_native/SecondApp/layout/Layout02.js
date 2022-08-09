import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

const Layout02 = () => {
  const [Todo, setTodo] = useState("");
  return (
    <View style={styles.main}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputbox}>
        <TextInput 
          style={styles.textInputbox}
          placeholder='할 일을 입력해주세요.'/>
        <TouchableOpacity style={styles.textInputButton}>
          <Text style={styles.buttonText}>추가</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.todoList}>
        
      </View>

      <View style={styles.sortbox}>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortBtnText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortBtnText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortBtnText}>Complete</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column', 
    width: '100%', 
    height: '100%',
    backgroundColor: '#ddd'
  },
  title: {
    fontWeight: '600',
    fontSize: 40,
    width: '100%',
    textAlign: 'center',
    marginTop: 60,
    flex: 1
  },
  inputbox: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: 'black',
    paddingHorizontal: 50,
    flex: 1
  },
  textInputbox: {
    flex: 4,
    fontSize: 17,
    borderBottomWidth: 1,
    marginRight: 20
  },
  textInputButton: {
    flex: 1,
    height: '80%',
    backgroundColor: '#aad3aa',
    alignSelf: 'center',
    borderRadius: 10
  },
  buttonText: {
    height: '100%',
    textAlign: 'center',
    fontSize: 20,
    textAlignVertical: 'center'
  },
  todoList: {
    flex: 7
  },
  // bottom buttons
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
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white'
  },
  sortBtnText: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#aad3aa'
  }
});

export default Layout02