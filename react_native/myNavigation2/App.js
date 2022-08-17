import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const SettingsScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button 
        title="프로필 페이지로"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>프로필 페이지입니다.</Text>
      <Button
        title="세팅 페이지로"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="디테일 페이지로"
        onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button 
        title="홈스크린 페이지로"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="디테일 페이지 다시"
        onPress={() => navigation.push('Details')}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShow: false }}>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen
                name="Profile"
                component={ProfileScreen}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <SettingsStack.Screen
                name="Home"
                component={HomeScreen}
              />
              <SettingsStack.Screen
                name="Details"
                component={DetailsScreen}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
