import React from 'react';
import { View, Text } from 'react-native';

const Layout01 = () => {
  return (
    <View style={{ marginTop: 30, height: '100%' }}>
      <View style={{ flex: 1, backgroundColor: '#e93e43' }}/>
      <View style={{ flex: 2, flexDirection: 'row', margin: 30 }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#e93e43'}}>
          <Text>1</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: '#f5a941'}}>
          <Text>2</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: '#4ebd7a'}}>
          <Text>3</Text>
        </View>
      </View>
      <View style={{ flex: 3, margin: 30 }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#e93e43'}}>
          <Text>1</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: '#f5a941'}}>
          <Text>2</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: '#4ebd7a'}}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  )
}

export default Layout01