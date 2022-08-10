import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Style01 from './components/Style01';
import Style02 from './components/Style02';
import Style03 from './components/Style03';
import Style04 from './components/Style04';
import Style05 from './components/Style05';
import { styles, blackNWhite } from './components/styles';

const App = () => {
  const [BlackNWhite, setBlackNWhite] = useState(true);
  const toggleDarkMode = () => {
    setBlackNWhite(!BlackNWhite);
  }
  return (
    <ScrollView
      // style={[styles.container, BlackNWhite ? blackNWhite.bgColorWhite : blackNWhite.bgColorDark]}
    >
      {/* <Style01 BlackNWhite={BlackNWhite} />
      <Style02 BlackNWhite={BlackNWhite} toggleDarkMode={toggleDarkMode} /> */}
      <Style03/>
      {/* <Style04/> */}
      {/* <Style05/> */}
    </ScrollView>
  )
}

export default App