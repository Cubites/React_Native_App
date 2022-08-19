import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>This is HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="View My Profile" />
    </View>
  );
}

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>This is ProfileScreen</Text>
      <Button onPress={() => navigation.goBack()} title="Profile Page" />
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name='Details' component={DetailScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="Profile" component={ProfileScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
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
  modalScreen: {
    flex: 1, 
    marginTop: 60, 
    borderTopWidth: 1, 
    borderColor: '#ccc', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30
  }
});
