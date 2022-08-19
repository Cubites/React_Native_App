import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is Feed Screen</Text>
      <Button title="open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="close Drawer" onPress={() => navigation.closeDrawer()} />
    </View>
  );
}

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is Noticivation Screen</Text>
      <Button title="toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="닫기" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Feed' component={Feed} />
      <Drawer.Screen name='Notification' component={Notification} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
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
