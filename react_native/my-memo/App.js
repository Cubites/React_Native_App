import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import MemoList from './components/MemoList';
import AddMemo from './components/AddMemo';
import Empty from './components/Empty';

export default function App() {
  const dt = new Date();
  const theDate = `${dt.getFullYear()} - ${dt.getMonth() + 1} - ${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}`;
  const toDay = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 ${dt.getHours()}시`
  const [myMemo, setmyMemo] = useState([
    {id: 1, content: '오늘의 날씨는 흐려요.', dt: '2022-08-12 11:00', done: true},
    {id: 2, content: '달리기 30Km 하고 집에와 씻음.', dt: '2022-08-12 12:00', done: true},
    {id: 3, content: '점심으로 아이스크림을 먹음.', dt: '2022-08-12 14:00', done: true},
    {id: 4, content: '저녁에 게임장을 감.', dt: '2022-08-12 16:00', done: false},
    {id: 5, content: '오늘의 날씨는 흐려요.', dt: '2022-08-13 11:00', done: true},
    {id: 6, content: '달리기 30Km 하고 집에와 씻음.', dt: '2022-08-13 12:00', done: false},
    {id: 7, content: '점심으로 아이스크림을 먹음.', dt: '2022-08-13 14:00', done: true},
    {id: 8, content: '저녁에 게임장을 감.', dt: '2022-08-13 16:00', done: true},
    {id: 9, content: '오늘의 날씨는 흐려요.', dt: '2022-08-14 11:00', done: false},
    {id: 10, content: '달리기 30Km 하고 집에와 씻음.', dt: '2022-08-14 12:00', done: false},
    {id: 11, content: '점심으로 아이스크림을 먹음.', dt: '2022-08-14 14:00', done: true},
    {id: 12, content: '저녁에 게임장을 감.', dt: '2022-08-14 16:00', done: true},
  ]);

  // 불러오기
  // useEffect(() => {

  // }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'adding'})}
          style={styles.avoid}
        >
          <DateHead date={toDay} />
            {
              myMemo.length === 0 ? <Empty /> : <MemoList myMemo={myMemo} />
            }
          <AddMemo />
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
