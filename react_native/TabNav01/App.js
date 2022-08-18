import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is HomeScreen</Text>
    </View>
  );
}

const SubScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is SubScreen</Text>
    </View>
  );
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? 
          options.tabBarLabel : 
          options.title !== undefined ?
            options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key
          });
          if(!isFocused && !event.defaultPrevented){
            navigation.navigate(route.name);
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        }

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={ isFocused ? { selected: true} : {}}
            accessibilityLabel={ options.tabBarAccessibilityLabel }
            testID={ options.tabBarTestID }
            onPress={ onPress }
            onLongPress={ onLongPress }
            style={{ flex: 1, paddingTop: 5, paddingBottom: 5 }}
          >
            <Text style={{ color: isFocused ? 'red' : '#444', fontWeight: isFocused ? 'bold' : ''}}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>  
  );
}

const Tab = createBottomTabNavigator();

const MyTab = () => { 
  return (  
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sub" component={SubScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTab />
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
