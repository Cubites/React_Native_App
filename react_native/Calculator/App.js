import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './components/Buttons';

export default function App() {
  const btnText = ['CE', 'C', '<=', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
  const [CalValue, setCalValue] = useState("");
  const [InputValue, setInputValue] = useState("0");
  let calSigns = ["+", "-", "×", "÷"];
  const [CalNum, setCalNum] = useState(0);
  const [CalSign, setCalSign] = useState("");
  const [InputNum, setInputNum] = useState(0);
  const inputHandler = (btnText) => {
    console.log('--- 입력 확인 ---');
    console.log('버튼 입력 : ' + btnText);
    switch (btnText){
      case 'CE':
        setInputNum(0);
        setInputValue("0");
        break;
      case 'C':
        setCalNum(0);
        setCalSign("");
        setInputNum(0);
        setCalValue("");
        setInputValue("0");
        break;
      case '<=':
        setInputValue(InputValue.length <= 1 ? "0" : InputValue.slice(0, InputValue.length - 1));
        setInputNum(Number(InputValue.length <= 1 ? "0" : InputValue.slice(0, InputValue.length - 1)));
        break;
      case '.':
        setInputValue(InputValue + '.');
        break;
      case '+/-':
        setInputValue(InputNum > 0 ? '-' + InputValue : InputValue.slice(1, InputValue.length));
        setInputNum(Number(InputNum > 0 ? '-' + InputValue : InputValue.slice(1, InputValue.length)));
        break;
      default:
        break;
    }
    if(Number(btnText) >= 0 && Number(btnText <= 9)){ // 숫자가 입력된 경우
      console.log('숫자 입력');
      inputNumSeq(btnText, CalSign);
    }else if(calSigns.indexOf(btnText) !== -1){ // 사칙연산이 입력된 경우
      console.log('사칙연산 입력 : ' + calSigns[calSigns.indexOf(btnText)]);
      if(CalSign === ""){ // 그전에 입력된 사칙연산이 없는 경우
        setCalValue(InputNum + ' ' + btnText);
        setCalNum(InputNum);
        setCalSign(btnText);
        setInputNum(0);
      }else{ // 그 전에 입력된 사칙연산이 있는 경우
        if(InputNum === 0){ // [숫자 - 사칙연산] 상태에서 사칙연산이 입력된 경우 => 입력 값으로 사칙연산 교체
          setCalValue(CalValue.slice(0, CalValue.length - 1) + btnText);
          setCalSign(btnText);
        }else{ // [숫자 - 사칙연산 - 숫자] 상태에서 사칙연산(or "=")이 입력된 경우 => [ ] 계산
          cal4(btnText);
          setCalSign(btnText);
        }
      }
    }else if(btnText === '='){
      cal4(btnText);
      // setCalValue('= ' + CalNum);
      setCalSign(btnText);
    }
    console.log('화면 출력 : CalValue = ' + CalValue + ', InputValue : ' + InputValue);
    console.log('내부 정보 : CalNum : ' + CalNum + ', InputNum : ' + InputNum + ', CalSign : ' + CalSign);
    console.log('-----------------------');
  }

  const inputNumSeq = (num, sign) => {
    if(sign === '='){
      setCalValue("");
      setInputValue(num);
      setCalNum(0);
      setInputNum(Number(num));
      setCalSign("");
    }else{
      if(InputNum === 0){
        setInputValue(num);
        setInputNum(Number(num));
      }else{
        setInputValue(InputValue + num);
        setInputNum(Number(InputValue + num));
      }
    }
  }

  const cal4 = (sign) => {
    switch(CalSign){
      case '+':
        setCalNum(CalNum + InputNum);
        setCalValue(CalNum + InputNum + ' ' + sign);
        setInputNum(0);
        break;
      case '-':
        setCalNum(CalNum - InputNum);
        setCalValue(CalNum - InputNum + ' ' + sign);
        setInputNum(0);
        break;
      case '×':
        setCalNum(CalNum * InputNum);
        setCalValue(CalNum * InputNum + ' ' + sign);
        setInputNum(0);
        break;
      case '÷':
        setCalNum(CalNum / InputNum);
        setCalValue(CalNum / InputNum + ' ' + sign);
        setInputNum(0);
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.CalValue}>
        <Text style={{fontSize: 16}}>{CalValue}</Text>
      </View>
      <View style={styles.inputValue}>
        <Text style={{fontSize: 30}}>{InputValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Buttons btnText={btnText[0]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[1]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[2]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[3]} inputHandler={inputHandler}/>
        </View>
        <View style={styles.buttons}>
          <Buttons btnText={btnText[4]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[5]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[6]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[7]} inputHandler={inputHandler}/>
        </View>
        <View style={styles.buttons}>
          <Buttons btnText={btnText[8]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[9]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[10]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[11]} inputHandler={inputHandler}/>
        </View>
        <View style={styles.buttons}>
          <Buttons btnText={btnText[12]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[13]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[14]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[15]} inputHandler={inputHandler}/>
        </View>
        <View style={styles.buttons}>
          <Buttons btnText={btnText[16]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[17]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[18]} inputHandler={inputHandler}/>
          <Buttons btnText={btnText[19]} inputHandler={inputHandler}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  CalValue: {
    width: '100%',
    marginTop: 50,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  inputValue: {
    width: '100%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  buttonContainer: {
    flex: 6,
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    backgroundColor: '#aaccaa',
    padding: 2,
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#aaaadd',
    justifyContent: 'space-around'
  }
});
