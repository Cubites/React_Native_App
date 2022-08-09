import React, { useState } from 'react';
import { View, TextInput, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

const Input = ({InputValue, inputchange, submitTodo}) => {

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputbox}>   
        <TextInput 
          style={styles.textInput}
          placeholder='할 일을 입력해주세요.'
          value={InputValue}
          onChangeText={(e) => inputchange(e)}
          onSubmitEditing={submitTodo}
        />
      </View>
      <View style={styles.textInputButton}>
        <TouchableHighlight 
          activeOpacity={0.6}
          underlayColor="#528852"
          style={{backgroundColor: '#aad3aa'}}
          onPress={submitTodo}
          >
          <Text style={styles.buttonText}>추가</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: 'black',
    paddingHorizontal: 50,
    flex: 1,
    top: 0
  },
  inputbox: {
    flex: 4,
  },
  textInput: {
    fontSize: 17,
    borderBottomWidth: 1,
    marginRight: 20,
    paddingLeft: 10,
    height: '100%'
  },
  textInputButton: {
    flex: 1,
    height: '80%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  buttonText: {
    height: '100%',
    textAlign: 'center',
    fontSize: 20,
    textAlignVertical: 'center',
  },
})

export default Input