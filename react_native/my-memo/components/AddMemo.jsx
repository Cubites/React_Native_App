import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const AddMemo = () => {
  const [text, setText] = useState('');
  // console.log(text);
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/images/add_white/add_white.png')}/>
    </View>
  )
  return (
    <View style={styles.block}>
      <TextInput 
        placeholder='메모를 입력하세요.' 
        style={styles.input}
        value={text}
        onChangeText={setText}/>
      <View style={styles.circleWrapper}>
      { 
        Platform.select({
          ios: (
            <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('버튼 누름')}>
              {button}
            </TouchableOpacity>
          ),
          android: (
            <TouchableNativeFeedback>
              {button}
            </TouchableNativeFeedback>
          )
        })
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 70,
    paddingHorizontal: 18,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 10
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#d500f9',
    borderRadius: 24,
    marginBottom: 40,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
    width: 48,
    height: 48,
  }
})

export default AddMemo