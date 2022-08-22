import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, Animated, Dimensions } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Home = () => {
  const windowHeight = Dimensions.get('window').height;
  const [Status, setStatus] = useState(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
  
  const successColor = '#157347';
  const successHeader = 'Success!';
  const successMessage = '축하드립니다. 성공했습니다.';
  const failColor = '#dc3545';
  const failHeader = 'Failed!';
  const failMessage = '실패했습니다!';

  const popIn = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * 0.35 * -1,
        duration: 300,
        useNativeDriver: true
      }).start(popOut());
    }, 1000);
  }
  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * 0.6 * -1,
        duration: 150,
        useNativeDriver: true
      }).start();
    }, 3000);
  }

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true
    }).start();
  }

  return (
    <View>
      <Animated.View style={[sty.toastContainer, {transform: [{ translateY: popAnim }]}]}>
        <View style={sty.toastRow}>
          <AntDesign 
            name={Status === "success" ? "checkcircleo" : "closecircleo"}
            size={24}
            color={Status === "success" ? successColor : failColor}
          >
            <View style={sty.toastText}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {Status === "success" ? successHeader : failHeader}
              </Text>
              <Text style={{fontSize: 13}}>
                {Status === "success" ? successMessage : failMessage}
              </Text>
            </View>
            <TouchableHighlight onPress={instantPopOut}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableHighlight>
          </AntDesign>
        </View>
      </Animated.View>
      <Button title="성공 메시지" onPress={() => { setStatus('success'); popIn(); }} style={{marginTop: 30}}/>
      <Button title="실패 메시지" onPress={() => { setStatus('fail'); popIn(); }} style={{marginTop: 30}}/>
    </View>
  )
}

const sty = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.85,

    elevation: 5
  },
  toastRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  toastText: {
    width: '70%',
    padding: 2
  }
})

export default Home