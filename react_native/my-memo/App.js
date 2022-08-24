import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import DateHead from './components/DateHead';
import MemoList from './components/MemoList';
import AddMemo from './components/AddMemo';
import Empty from './components/Empty';

export default function App() {
  const theDate = moment().format('YYYY-MM-DD HH:mm');
  const [theDay, toTimes] = theDate.split(' ');
  const nowDay = theDay.split('-');
  const nowTime = toTimes.split(':');
  const tTime = Number(nowTime[0]);
  let vTime;
  if(tTime == 24) {
     vTime = '오전 0'
  }else{
     vTime = tTime > 11 ? '오후 ' + (tTime - 12) : '오전 ' + tTime;
  }
  const toDay = nowDay[0]+"년 "+nowDay[1]+"월 "+nowDay[2]+"일 "+vTime+"시";
  // const dt = new Date();
  // const theDate = `${dt.getFullYear()} - ${dt.getMonth() + 1} - ${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}`;
  // const toDay = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 ${dt.getHours()}시`
  const [myMemo, setmyMemo] = useState([
    {id: 1, content: '오늘의 날씨는 흐려요.', dt: '2022-08-12 11:00', done: true},
    {id: 2, content: '달리기 30Km 하고 집에와 씻음.', dt: '2022-08-12 12:00', done: true},
    {id: 3, content: '점심으로 아이스크림을 먹음.', dt: '2022-08-12 14:00', done: true},
    {id: 4, content: '저녁에 게임장을 감.', dt: '2022-08-12 16:00', done: false},
  ]);

  const onInsert = (text) => {
    /* 
      * 새로 등록할 항목의 id 값을 구함
        * 기존 등록된 아이디 값 중 가장 큰 값을 가져와서 1을 더함
        * 만약 리스트가 없다면 아이디에 1을 넣음
        * 날짜는 theDate를 가져와 입력 
        * done 기본값은 false
    */
    const maxId = myMemo.length > 0 ? Math.max(...myMemo.map(item => item.id)) + 1 : 1;
    const memo = {
      id: maxId,
      content: text,
      dt: theDate,
      done: false
    };
    setmyMemo(myMemo.concat(memo));
  }

  const onRemove = (id) => {
    const nextMyMemo = myMemo.filter(item => item.id !== id);
    setmyMemo(nextMyMemo);
  }

  const onDone = (id) => {
    const nextMyMemo = myMemo.map(item => (
      item.id === id ? {...item, done: !item.done }: item
    ));
    setmyMemo(nextMyMemo);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'adding'})}
          style={styles.avoid}
        >
          <DateHead date={toDay} />
            {
              myMemo.length === 0 ? 
              <Empty /> : 
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
