import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  
  useEffect(() => {
    if(route.params?.post){
      // 서버 작업 하는 위치
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>HomeScreen 입니다.</Text>
      <Button 
        title='Detail 페이지로 이동' 
        onPress={() => navigation.navigate('Details', {
          itemId: 50,
          otherParam: '이곳에 내용을 전달합니다.'
        })}/>
      <Button 
        title='글쓰기 창으로 이동' 
        onPress={() => navigation.navigate('CreatePost', {
          itemId: 50,
          otherParam: '이곳에 내용을 전달합니다.'
        })}/>
      <Text style={{margin: 10}}>
        받은 글 : { route.params?.post }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen