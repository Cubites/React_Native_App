import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const AppLoadings = () => {
  const [Loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try{
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require('../assets/adaption-icon.png')]);
      setLoaded(true);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    preLoad();
  }, []);

  return Loaded ? (
      <View>
        <Text>앱이 실행되었습니다.</Text>
      </View>
    ) : (
      <AppLoading />
    )
}

export default AppLoadings