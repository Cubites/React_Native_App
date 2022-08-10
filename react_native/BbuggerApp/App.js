import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import BestMenu from './components/BestMenu';
import WeeklyMenu from './components/WeeklyMenu';
import ModeButton from './components/ModeButton';

const App = () => {
  const [Mode, setMode] = useState(false);
  const toggleMode = () =>{
    setMode(!Mode);
  }
  return (
    <ScrollView style={[appstyle.container, {backgroundColor: Mode ? '#fff' : '#333'}]}>
      <Header Mode={Mode} />
      <BestMenu Mode={Mode} />
      <WeeklyMenu Mode={Mode} />
      <ModeButton Mode={Mode} toggleMode={toggleMode} />
    </ScrollView>
  )
}

const appstyle = StyleSheet.create({
  container: {
    padding: 40,
    height: '100%'
  }
})

export default App