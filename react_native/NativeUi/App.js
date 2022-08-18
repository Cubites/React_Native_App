import { StyleSheet, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import AnimTab1 from './bottomTab/AnimTab1';

import Home from './screens/Home';
import Colors from './constants/Colors';

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
}

const Stack = createSharedElementStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Tab1" component={Home}
        options={{ title: 'My ReactNative UI', headerShown: true }} />
      <Stack.Screen name="Tab1" component={AnimTab1} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={dark-content} backgroundColor={Colors.white} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
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
