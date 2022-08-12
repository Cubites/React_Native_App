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

## 특징
### 스타일 시트가 javscript로 이루어짐
* object 타입의 낙타표기법으로 구성
* 컴포넌트 특징에 따른 스타일 시트가 따로 있음
  * 예
    |  | View | Text |
    | --- | --- | --- |
    | fontWeight | X | O |
    | flex | O | X |
    | ShadowColor | O | X |
    | textShadowColor | X | O |
    * 특정 브라우저에서만 동작하는 시트도 있음

### Position
* relative, absolute 2가지만 존재, 기본값은 relative

### Font
#### fontSize
* 숫자만 작성(안드로이드는 sp, IOS는 dp로 단위가 다르기 때문)
#### fontStyle
* 'normal', 'italic' 두 가지 옵션만 있음
#### fontWeight
* 'normal'(400), 'bold'(700), '100' ~ '900'
#### fontFamily
* 안드로이드 기본폰트 : 나눔 고딕 / IOS 기본폰트 : NOTO Sans
* monospace 옵션은 IOS에 존재하지 않음(안드로이드만 적용 가능)
* 적용 방법 예
  <pre>
  fonts: {
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter'
      },
      android: {
        fontFamily: 'monospace'
      }
    })
  }
  </pre>
### 안드로이드 혹은 IOS만 적용가능한 옵션
* IOS
  <br>: letterSpacing, textDecorationColo, textDecorationstyle, writingDirection
* Android
  <br>: textAlignVertical
* both
  <br>: lineHeight, textAlign, textDecorationLine, textShadowColor, textShadowOffset, textShadowRadius, (letterSpacing; 최신기기는 적용가능)
* 양쪽에서 모두 적용가능한 옵션만 사용을 권장

## 해상도
* 해상도 확인 사이트 : https://screensiz.es/
* 디스플레이에 표시되는 픽셀 수, 보통 디바이스의 높이와 폭에 표현되는 픽셀 수를 의미
* Pixels/Inch (ppi) : 1인치 안의 픽셀 수 / Dots/Inch (dpi)
* 모니터의 기본 해상도 : 대부분 72ppi (4K(UHD), 8K(OLED)도 있음)
* 모바일은 기기마다 ppi가 다름 > 때문에 다른 단위를 사용
  * 안드로이드 단위 : dp (density-independent pixel; 밀도 수) 
    <br>> hdpi, xhdpi, xxhdpi, xxxhdpi
  * IOS 단위 : PT (Point-PT)
    <br>> 1x, 2x, 3x
  * 실제 dp로 디자인하면 너무 크므로 보통 가로 세로를 각각 1/4 해서 디자인 함

### 입체감 표현
* 안드로이드 : 그림자를 이용
  * 기본 정책 = Material Design
  * react-native 기본 기능으로는 그리잠자를 넣기 매우 어려움
    <br>> 보통 모듈을 사용함(react-native-shadow, react-native-shadow-view)
    * react-native-shadow-view : 안드로이드에서 react-native-shadow가 적용되게 해주는 모듈
* IOS : 그라데이션을 이용
  * 컨텐츠를 중시하는 디자인
* 디자인 코드 예
  <pre>
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 10
        },
        shadowOpacity: 0.3
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 50
      }
    }),
  </pre>

## Transform 속성
* translateX, translateY
* rotate, rotateX, rotateY, rotateZ
* scale, scaleX, scaleY
* skewX, skewY (각도 변환; 마름모 모양으로 보임)
* perspective(원근감; z-index 와 유사한 기능)

## 모듈
* prop-types : PropTypes를 이용하여 컴포넌트에 적용되는 속성을 지정
* immutability-helper : 