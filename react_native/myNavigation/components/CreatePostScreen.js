import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

const CreatePostScreen = ({ navigation, route }) => {
  const [PostText, setPostText] = useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder='내용을 입력하세요.'
        style={styles.inputMulti}
        value={PostText}
        onChangeText={setPostText}
        />
        <Button
          title='전송'
          onPress={() => (
            navigation.navigate({
              name: 'Home',
              params: { post: PostText },
              merge: true
            }))
          }
        />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMulti: {
    height: 200,
    padding: 10,
    backgroundColor: '#ededed',
    borderColor: '#ccc'
  }
});

export default CreatePostScreen