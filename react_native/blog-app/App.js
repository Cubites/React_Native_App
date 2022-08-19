import React, { Component } from 'react';
import { Navigator } from 'react-native';
import InitPage from './pages/InitPage';

export default function App() {
  return (
    <Navigator
      initialRoute={{ component: InitPage }}
      configureScene={() => Navigator.ScenceConfigs.PushFromRight}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return React.createElement(Component, {...route.passProps, navigator})
      }}
    />
  );
}