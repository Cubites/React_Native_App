import React from 'react';
import { View } from 'react-native';

const Rows = ({ children }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {children}
    </View>
  )
}

export default Rows