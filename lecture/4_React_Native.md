# React Native
## 서론
* 페이스북이 지원하는 오픈소스
* React를 바탕으로 만들어짐
* 사용하는 곳
  <br>: Airbnb, 블룸버그, 테슬라, 인스타그램, 티켓마스터, 사운드클라우드, 우버, 월마트, 아마존, 마이크로소프트

### 앱 
* 네이티브앱 : 안드로이드, ios
* 하이브리드앱 : 코르도바, 아이오닉
  * 웹으로 만든 것을 앱으로 만들 수 있게 함
  * 장점 : 제작이 매우 용이
  * 조금 복잡한 앱인 경우 속도 저하
* 웹앱
* React Native : 네이티브앱과 하이브리드앱의 중간 (유사한 프레임워크 : 자마린(C++), Flutter(구글))

## 시작
* 프로젝트 생성
  * 방법 1 : <code>npx react-native init 프로젝트명</code>
  * 방법 2 : <code>npm install -g expo-cli</code>
    <br>><code>expo init 프로젝트명</code> (에러 시, 관리자모드 cmd에서 실행)
  * 방법 3 : <code>npx create-react-native-app 프로젝트명</code>

## 기능
### flexbox
* column (위/아래; 세로방향), row (좌/우; 가로방향)
  <br>> 해당 방향으로 얼마나 채울지 결정 ( default = column )
* flexDirection : row, column, row-reverse, column-reverse
* justifyContent : flex-start, flex-end, space-between, space-around, space-evenly(동일 크기 분배)
* alignItems : stretch(기본값), flex-start, flex-end, center, baseline