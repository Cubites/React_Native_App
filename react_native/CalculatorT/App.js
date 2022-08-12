import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Rows from './components/Rows';
import Buttons from './components/Buttons';
import calculator, { initialState } from './script';

// SafeAreaView : 상단의 상태줄에 내용이 가리지 않게 해줌

const App = () => {
  const [State, setState] = useState(initialState);

  const handleTap = (type, value = null) => {
    let AfterResult = calculator(type, value, State);
    console.log(AfterResult);
    setState({
      currentValue : AfterResult.currentValue !== undefined ? AfterResult.currentValue : State.currentValue,
      operator: AfterResult.operator !== undefined ? AfterResult.operator : State.operator,
      previousValue: AfterResult.previousValue !== undefined ? AfterResult.previousValue : State.previousValue
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(State.currentValue).toLocaleString()}
        </Text>
        <Rows>
          <Buttons text="C" theme="secondary" onPress={() => handleTap('clear')}/>
          <Buttons text="+/-" theme="secondary" onPress={() => handleTap('posneg')}/>
          <Buttons text="%" theme="secondary" onPress={() => handleTap('percentage')}/>
          <Buttons text="/" theme="accent" onPress={() => handleTap('operator', '/')}/>
        </Rows>
        <Rows>
          <Buttons text="7" onPress={() => handleTap('number', '7')}/>
          <Buttons text="8" onPress={() => handleTap('number', '8')}/>
          <Buttons text="9" onPress={() => handleTap('number', '9')}/>
          <Buttons text="x" theme="accent" onPress={() => handleTap('number', 'x')}/>
        </Rows>
        <Rows>
          <Buttons text="4" onPress={() => handleTap('number', '4')}/>
          <Buttons text="5" onPress={() => handleTap('number', '5')}/>
          <Buttons text="6" onPress={() => handleTap('number', '6')}/>
          <Buttons text="-" theme="accent" onPress={() => handleTap('operator', '-')}/>
        </Rows>
        <Rows>
          <Buttons text="1" onPress={() => handleTap('number', '1')}/>
          <Buttons text="2" onPress={() => handleTap('number', '2')}/>
          <Buttons text="3" onPress={() => handleTap('number', '3')}/>
          <Buttons text="+" theme="accent" onPress={() => handleTap('operator', '+')}/>
        </Rows>
        <Rows>
          <Buttons text="0" size="double" onPress={() => handleTap('number', '0')}/>
          <Buttons text="." onPress={() => handleTap('number', '.')}/>
          <Buttons text="=" theme="accent" onPress={() => handleTap('equal')}/>
        </Rows>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  value: {
    color: '#fff',
    fontSize: 45,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  }
});

export default App