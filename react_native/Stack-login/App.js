import React, { useEffect, useMemo, useReducer, useContext, useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthContext = React.createContext();

// 로딩
const SplashScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  )
}
// 홈스크린
const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.center}>로그인 되었습니다!!</Text>
      <Text style={styles.center}>메인 페이지입니다.</Text>
      <Button title="로그아웃" onPress={signOut} />
    </View>
  )
}

// 로그인스크린
const LoginScreen = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <View>
      <TextInput placeholder='userId' value={Username} onChange={setUsername}/>
      <TextInput placeholder='userPass' value={Password} onChange={setPassword}/>
      <Button title='로그인' onPress={() => signIn({ Username, Password })} />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          }
      }
    }, {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  useEffect(() => {
    // 서버와 교신을 통해 토큰을 받아 적절한 장소로 이동시킴
    const bootstrapAsync = async () => {
      let userToken;
      try {
        // 암호화된 저장소에 저장된 토큰 복원작업
        // 예) userToken = await SecureStore.getItemAsync('userToken');
      }catch(e){
        // 토큰 복원 실패
      }
      // 토큰을 복원한 후 유효성 검사할 수 있음
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    }
    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      // 아이디, 비밀번호를 서버로 보내고 확인 토큰을 받는다.
      // 로그인 실패인 경우 오류 처리
      // 토큰을 SecureStore 같은 곳에 저장소를 이용하여 유지
      // 여기서는 dummy 토큰을 사용해보자.
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token'});
    },
    signOut: () => {
      // 세션을 삭제하는 등의 작업 시행
      dispatch({ type: 'SIGN_OUT'})
    },
    signUp: async (data) => {
      // 회원정보를 서버로 보내고 확인 토큰을 받는다.
      // 회원가입 실패인 경우 오류 처리
      // 토큰을 SecureStore 같은 곳에 저장소를 이용하여 유지
      // 여기서는 dummy 토큰을 사용해보자.
      dispatch({ type: 'SIGN_UP', token: 'dummy-auth-token'});
    }
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // 아직 토큰확인이 안되있음
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // 사용자가 로그인하지 않아 토큰에 내용이 비어 있을 때
            <Stack.Screen name="SignIn" component={LoginScreen}
              options={{
                title: '회원 로그인',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push'
              }} 
            />
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15
  }
});
