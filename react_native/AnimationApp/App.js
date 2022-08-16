import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AutoButton from './components/AutoButton';
import Class01 from './components/Class01';
import Moving from './components/Moving';
import Repeat from './components/Repeat';
import RotationAnim from './components/RotationAnim';
import Scalebar from './components/Scalebar';

export default function App() {
  const [Loading, setLoading] = useState(true)
  return (
    <View style={styles.container}>
      {/* <Class01 /> */}
      {/* <Scalebar /> */}
      {/* <Moving /> */}
      {/* <Repeat /> */}
      {/* <AutoButton /> */}
      <RotationAnim Loading={Loading} setLoading={setLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20
  },
});
