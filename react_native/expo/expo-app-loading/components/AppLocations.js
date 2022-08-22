import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

/* 
  안드로이드의 경우 퍼미션 셋팅이 필요할 수도 있음
  android.permission.ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION, FORGROUND_LOCATION
  백그라운드에서 위치기능을 사용하려면 android.permission.ACCESS_BACKGROUND_LOCATION

  IOS에서는 location 백그라운드 모드 설정은 Info.plist 파일에서 지정
*/
const AppLocations = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){ // granted == 퍼미션을 허용하지 않은 경우
        setErrorMsg('위치정보를 켜지 않아 위치를 찾을 수 없습니다.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })
  }, []);
  let text = 'Waiting...';
  if(errorMsg){
    text = errorMsg;
  }else if(location){
    text = JSON.stringify(location);
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{text}</Text>
    </View>
  )
}

export default AppLocations