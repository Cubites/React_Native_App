import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home!!!</Text>
      <Button 
        onPress={() => navigation.navigate('Sub')}
        title='Go to SubScreen' 
      />
    </View>
  );
}
const SubScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SubScreen</Text>      
      <Button 
        onPress={() => navigation.navigate('Home')}
        title='Go to HomeScreen' 
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' useLegacyImplementation>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sub" component={SubScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
