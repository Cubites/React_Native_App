import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Demo = () => {
  return (
    <SafeAreaView style={[styles.container, {justifyContent: 'space-between'}]}>
      <Text>DemoDemo</Text>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home'>
            {
              () => (
                <Tab.Navigator initialRouteName='Work' tabBar={() => null} screenOptions={{ headerShown: false}}>
                  <Tab.Screen name='Work' component={Demo} />
                  <Tab.Screen name='Profile' component={Demo} />
                </Tab.Navigator>
              )
            }
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
