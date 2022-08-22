import React from 'react';
// import { LogBox } from 'react-native';
import { Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import CreatePostScreen from './components/CreatePostScreen';

const Stack = createNativeStackNavigator();

// LogBox.ignoreAllLogs(); // 로그가 안뜨게 하는 코드

const LogoTitle = () => {
  return (
    <Image 
      style={{width: 50, height: 50}}
      // source={require('./react-native-logo.png')}
      source={require('./components/logo.png')} 
    />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My Home'}}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{title: 'My Detail'}}/>
        <Stack.Screen name="CreatePost" component={CreatePostScreen} 
          // options={({ route }) => ({title: route.params?.name})}
          options={{
            title: 'My Home',
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button onPress={() => alert('버튼입니다.')}
                title="버튼"
                color="#000" />
            )
            // headerStyle: {
            //   backgroundColor: '#4a148c'
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold'
            // }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}