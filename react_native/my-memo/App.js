import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment-timezone';
import DateHead from './components/DateHead';
import MemoList from './components/MemoList';
import AddMemo from './components/AddMemo';
import Empty from './components/Empty';

export default function App() {
  let nowTime = new Date();
  let times = {
    year: moment(nowTime.getTime()).tz('Asia/Seoul').format('YYYY'),
    month: moment(nowTime.getTime()).tz('Asia/Seoul').format('MM'),
    day: moment(nowTime.getTime()).tz('Asia/Seoul').format('DD'),
    hour: moment(nowTime.getTime()).tz('Asia/Seoul').format('HH'),
    minute: moment(nowTime.getTime()).tz('Asia/Seoul').format('mm')
  };
  let vTime;
  if(times.hour == 24) {
    vTime = '오전 0';
  }else if(times.hour == 12) {
    vTime = '오후 12';
  }else{
    vTime = times.hour > 11 ? '오후 ' + (times.hour - 12) : '오전 ' + times.hour;
  }
  const theDay = times.year + '-' + times.month + '-' + times.day + ' ' + times.hour + ':' + times.minute;
  const toDay = times.year + "년 " + times.month +"월 " + times.day + "일 " + vTime + "시";
  const [myMemo, setMyMemo] = useState([]);

  const onInsert = async (text) => {
    /* 
      * 새로 등록할 항목의 id 값을 구함
        * 기존 등록된 아이디 값 중 가장 큰 값을 가져와서 1을 더함
        * 만약 리스트가 없다면 아이디에 1을 넣음
        * 날짜는 toDay 가져와 입력 
        * done 기본값은 false
    */
    const maxId = myMemo.length > 0 ? Math.max(...myMemo.map(item => item.id)) + 1 : 1;
    const memo = {
      id: maxId,
      content: text,
      dt: theDay,
      done: false
    };
    setMyMemo(myMemo.concat(memo));
    console.log(memo);
  }

  const onRemove = async (id) => {
    const nextMyMemo = myMemo.filter(item => item.id !== id);
    setMyMemo(nextMyMemo);
  }

  const onDone = (id) => {
    const nextMyMemo = myMemo.map(item => (
      item.id === id ? {...item, done: !item.done }: item
    ));
    setMyMemo(nextMyMemo);
  }

  let key = 'mymemo';

  useEffect(() => {
    actStorage.set(key, myMemo).catch(console.error);
  }, [myMemo]);
  
  useEffect(() => {
    // actStorage.readKeys().then(console.log).catch(console.error);
    // actStorage.clear().catch(console.error);
    actStorage.get(key).then(setMyMemo).catch(console.error);
  }, []);

  const actStorage = {
    async get(key){
      try{
        const rowMemo = await AsyncStorage.getItem(key);
        const resultMemo = JSON.parse(rowMemo);
        console.log('---- actStorage.get() ----');
        console.log('rowMemo : ', rowMemo, '/ type : ', typeof(rowMemo));
        console.log('resultMemo : ', resultMemo, '/ type : ', typeof(resultMemo));
        return resultMemo;
      }catch(e){
        throw new Error('메모 데이터를 읽는데 실패했습니다.');
      }
    },
    async set(key, value){
      try{
        await AsyncStorage.setItem(key, JSON.stringify(value));
      }catch(e){
        throw new Error('메모 데이터를 쓰는데 실패했습니다.');
      }
    },
    async remove(key){
      try{
        await AsyncStorage.removeItem(key);
      }catch(e){
        throw new Error('메모 데이터를 지우는데 실패했습니다.');
      }
    },
    async readKeys(){
      try{
        return await AsyncStorage.getAllKeys();
      }catch(e){
        throw new Error('키 값을 읽어오는데 실패했습니다.');
      }
    },
    async clear(){
      try{
        await AsyncStorage.clear();
      }catch(e){
        throw new Error('데이터를 초기화하는데 실패했습니다.');
      }
    }
  };
  
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'adding'})}
          style={styles.avoid}
        >
          <DateHead date={toDay} />
            {
              myMemo === null ? <Empty /> : 
              myMemo.length === 0 ? <Empty /> :
              <MemoList myMemo={myMemo} onRemove={onRemove} onDone={onDone} />
            }
          <AddMemo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avoid: {
    flex: 1
  }
});
