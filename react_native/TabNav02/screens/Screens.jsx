import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed!!!</Text>
    </View>
  );
}
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile!!!</Text>
    </View>
  );
}
const Product = () => {
    return (
      <View style={styles.container}>
        <Text>Product!!!</Text>
      </View>
    );
}

const Tab = createBottomTabNavigator();

const MyTabs2 = () => {
  return (
    <Tab.Navigator initialRouteName='Feed'>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Product" component={Product} />
    </Tab.Navigator>
  )
}

const Screens = () => {
  return (
    <MyTabs2 />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screens