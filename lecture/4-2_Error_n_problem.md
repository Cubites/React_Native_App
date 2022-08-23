# 에러
## useNativeDriver 에러
* Animated 속성에 useNativeDriver를 넣지 않아 발생하는 에러
  <br>> userNativeDriver : 애니메이션을 부드럽게 만들어줌
* 넣을 수 있는 값은 true, false
* non-layout(ex: transform, opacity) 프로퍼티에만 적용가능
  <br>layout(ex: width, top, flex) 프로퍼티에는 적용불가

## Drawer 플러그인 에러
* react-native-reanimated 설치 후 babel.config.js 파일에 다음 내용 추가
  ```javascript
  plugins: [
    'react-native-reanimated/plugin'
  ]
  ```

# 문제

## 상단 상태바에 내용이 가리는 문제
* 상단 메뉴바에 디자인이 묻히지 않게 해야함
* <code>react-native-safe-area-context</code> 모듈의 <code>useSafeAreaInsets()</code> 훅을 사용하면 StatusBar의 높이를 구할 수 있음
  <br>> 구한 statusBar 높이만큼 margin을 주면 됨

## 시간대가 한국 시간대로 나오지 않음
* <code>moment-timezone</code> 모듈을 사용하여 아래와 같이 코드 작성
  ```javascript
  const moment = require('moment-timezone');

  let nowTime = new Date();
  let seoul = moment(nowTime.getTime()).tz('Asia/Seoul').format();
  console.log(seoul); // 한국의 현재시간 출력됨
  ```