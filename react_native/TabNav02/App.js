import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


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

const MyTabs = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Feed'
      // screenOptions={{ tabBarActiveTintColor: '#e91e63' }}
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      // backgroundColor 지정
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#9999ee'
        }
      }}
      // style={{ backgroundColor: 'gray' }}
    >
      <Tab.Screen name="Feed" component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }} />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="face-woman-profile" color={color} size={26}/>
          )
        }}/>
      <Tab.Screen name="Product" component={Product} 
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26}/>
          )
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs />
    </NavigationContainer>
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
