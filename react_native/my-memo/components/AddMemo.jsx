import React, { useState } from 'react';
import { 
  StyleSheet, View, TextInput, Image, TouchableOpacity, 
  TouchableNativeFeedback, Platform, Keyboard } from 'react-native';

const AddMemo = ({ onInsert }) => {
  const [text, setText] = useState('');
  // console.log(text);
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  }
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/images/add_white/add_white.png')}/>
    </View>
  );
  return (
    <View style={styles.block}>
      <TextInput 
        placeholder='메모를 입력하세요.' 
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"/>
      <View style={styles.circleWrapper}>
      { 
        Platform.select({
          ios: (
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
              {button}
            </TouchableOpacity>
          ),
          android: (
            <TouchableNativeFeedback onPress={onPress}>
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
    backgroundColor: '#fff',
    height: 70,
    paddingHorizontal: 18,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#d500f9',
    borderRadius: 24
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
    width: 48,
    height: 48,
  }
})

export default AddMemo