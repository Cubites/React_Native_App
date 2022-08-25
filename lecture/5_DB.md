# 모바일 DB
* 앱이 꺼져도 데이터가 유지될 필요가 있음
* React Native에서는 이러한 저장소로 AsyncStorage를 제공

## Async Await
* 함수 선언부 앞 부분에 sync 키워드를 붙이고 Promise의 앞 부분에 await 사용
  <br>> then, catch 없이도 쉽게 비동기 작업을 관리할 수 있음

## AsyncStorage
* 앱 안에 있는 저장소를 사용함
* 안드로이드, IOS 에 따라 구현이 다름
  * 안드로이드 : react-native 가 AsyncStorage를 이용하여 안드로이드에 내장되어 있는 자체 DB인 SQLite를 이용
  * IOS : react-native에서 AsyncStorage를 이용하여 자체 저장소를 만듬
* 예전에는 AsyncStorage가 react-native에 내장되어 있었음
  <br>> <code>import { Asyncstorage } from 'react-native'</code>로 사용할 수 있었음
  <br>> 현재는 커뮤니티에서 AsyncStorage를 수정, 업그레이드 등을 할 수 있게 따로 분리
  <br>> 즉, 따로 install 해주어야 함
    * <code>npm install @react-native-async-storage/async-storage</code>
    * ios 는 pod를 다시 install 해주어야 함(<code>cd ios</code>, <code>pod install</code>)
* AsyncStorage는 브라우저의 localStorage와 유사함
  * 유사한 점
    * 값을 저장할 때는 문자열 타입으로 저장해야함
    * getItem, setItem, removeItem, clear 과 같은 localStorage에서 사용하는 메서드와 같은 메서드들 존재
  * 차이점
    * AsyncStorage는 비동기형. 즉 값을 조회하거나 설정할 때 Promise를 반환

### 사용법
  | 함수 | 기능 |
  | --- | --- |
  | <code>getItem()</code> | 불러오기 |
  | <code>setItem()</code> | 저장하기 |
  | <code>clear()</code> | 초기화하기 |
  
```javascript
const save = async () => {
  try{
    // 저장하기
    await AsyncStorage.setItem('key', 'value');
  }catch(e){
    // 오류처리
  }
}
// 주의 : 값은 문자열 타입으로 저장해야함. 
// 객체 또는 배열은 JSON.stringfy()함수 이용하여 문자열로 저장

// 불러오기
const list = async () => {
  try{
    const value = await AsyncStorage.getItem('key');
    // 배열이나 오브젝트인 경우 다시 원상복구 해주어야 함
    const values = JSON.parse(value);
  }catch(e){
    // 오류, 예외 처리
  }
}
// 삭제하기
const clearAll = async () => {
  try{
    await AsyncStorage.clear('key');
  }catch(e){
    // 오류, 예외 처리
  }
}
```
