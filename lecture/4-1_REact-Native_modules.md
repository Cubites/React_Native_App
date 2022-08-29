# React Native Modules

## 네비게이션
### 필요 모듈
* @react-natigation/native, @react-navigation/native-stack
  <br>> <code>npm install @react-navigation/native @react-navigation/native-stack</code>
* react-native-screens, react-native-safe-area-context
  <br>> <code>expo install react-native-screens react-native-safe-area-context</code>
  <br>> npm, yarn 으로도 설치가능
* IOS 용 > <code>npx pod-install ios</code>

### 수정작업
* (expo create-react-app 은 세팅이 되어있어 수정할 필요없음)
* react-native-screens 패키지가 android에서 동작하려면 MainAcitivy.java의 수정 필요
  * 위치 : android/app/src/main/java/프로젝트이름/MainAcitivy.java
  * 수정 작업
    ```java
    import android.os.Bundle;

    @Override
    protected void onCreate(Bundle saveInstanceState){
      super.onCreate(null);
    }
    ```

### NavigationContainer, createNativeStackNavigator
* <code>import { NavigationContainer } from '@react-navigation/native';</code>
* <code>import { createNativeStackNavigator } from '@react-navigation/native-stack</code>
* native-stack은 createNativeStackNavigator 와 Screen 두 개의 속성을 포함하는 객체를 반환하는 함수. 경로에 대한 구성을 정의하려면 요소를 자식으로 Navigator에 포함해야 함
* 기본 구조
  ```javascript
  <NavigationContainer>
    <Stack.Navigator initialRouteName="기본페이지">
      <Stack.Screen name="페이지아이디1" component={페이지이름1} />
      <Stack.Screen name="페이지아이디2" component={페이지이름2} />
    </Stack.Navigator>
  </NavigationContainer>
  ```

#### 기능
* initialRouteName :스택의 초기 경로(기본 페이지)를 지정할 때 사용
* 화면 별 옵션을 지정하려면 options의 prop을 Stack.Screen에 전달할 수 있음
* 일반적인 옵션의 경우 prop을 전달할 수도 있음
  ```javascript
  <Stack.Screen name="Home">
    {(props) => <HomeScreen {...props} extraData={someDate} />}
  </Stack.Screen>
  ```
* navigation이 갖고 있는 세 가지 함수
  * <code>navigation.navigate('이동페이지')</code>
  * <code>navigation.push('이동페이지')</code> - 자기 자신 페이지 포함
  * <code>navigation.goBask()</code> - 하나 이전 페이지로 이동
  * <code>navigation.topToTop()</code> - 모달(첫 페이지)로 이동
* Stack.Screen
  * 갖는 속성 : name(아이디값), components(스크린값), options
    * options는 navigation과 route 두 값을 가지고 있음
  * 타이틀 업데이트 : <code>navigation.setOptions({ title: '업데이트할 내용'})</code>
  * options
    ```javascript
    options={
      title: '타이틀',
      headerStyle: {
        // 헤더의 스타일시트 적용
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // 헤더의 폰트 스타일시트 적용
      }
    }
    ```
    * headerLeft, headerRight
    * 뒤로가기 : headerBackTitle, headerTitleStyle, headerBackImageSource
* TopTab
  * @react-navigation/material-top-tabs, react-native-tab-view

## Drawer
* 햄버거 아이콘을 누르면 메뉴가 나오는 기능이 구현된 모듈
### 설치
* <code>@react-navigation/drawer</code>, <code>react-native-reanimated</code> 설치
### 기능
* <code>navigation.dispatch(DrawerActions.openDrawer())</code> : drawer 열기
  <br>> <code>navigation.openDrawer()</code>
* <code>navigation.dispatch(DrawerActions.closeDrawer())</code> : drawer 닫기
  <br>> <code>navigation.closeDrawer()</code>
* <code>navigation.dispatch(DrawerActions.toggleDrawer())</code> : drawer 열고 닫기
  <br>> <code>navigation.toggleDrawer()</code>
* <code>const isDrawerOpen = useDrawerStatus() === 'open'</code> : drawer가 열려있는지 확인

## expo-app-loading
* 앱 로딩 화면과 관련된 모듈


## 용도 확인 필요한 모듈
* 그 외 사용한 모듈(용도 확인 필요)
  * react-native-screens, 
  * react-native-safe-area-context
  * @react-navigation/material-top-tabs
  * react-native-tab-view
  * react-native-table-view
  * react-native-pager-view
  * react-native-paper
  * react-native-reanimated
  * react-native-shared-element
  * react-navigation-shared-element
  * react-native-animatable : 애니메이션을 용이하게 해줌
  * react-native-gesture-handler 
  * react-native-vector-icons : 벡터 아이콘
  * expo-app-loading
  * expo-asset
  * expo-font
  * expo-location
  * react-native-location, expo-location
* plugin
  * @react-navigation/bottom-tabs 
  * @react-navigation/material-bottom-tabs 
  * @react-navigation/material-top-tabs 
  * @react-navigation/native 
  * @react-navigation/stack
  * @react-navigation/native-stack
  * @react-native-community/masked-view