import { StyleSheet, Text, View } from 'react-native';
import AppLoadings from './components/AppLoadings';

export default function App() {
  return (
    <View style={styles.container}>
      <AppLoadings />
    </View>
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
