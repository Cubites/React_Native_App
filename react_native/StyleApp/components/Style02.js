import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles, texts, buttons, blackNWhite } from './styles';

const Style02 = ({ BlackNWhite, toggleDarkMode }) => {
  return (
    <View style={styles.center}>
      <Text style={[texts.h1, BlackNWhite ? blackNWhite.textColorWhite : blackNWhite.textColorDark]}>스타일시트</Text>
      <TouchableHighlight
          style={[buttons.button, BlackNWhite ? blackNWhite.bgColorDark : blackNWhite.bgColorWhite]}
          activeOpacity={0.8}
          underlayColor="#bb9999"
          onPress={() => toggleDarkMode()} // 없으면 동작안됨(underlayColor, activeOpacity 도 동작안함)
      >
        <Text 
          style={[
            buttons.text, 
            styles.center,
            BlackNWhite ? blackNWhite.textColorDark : blackNWhite.textColorWhite]}
        >
          Dark mode로 변경
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default Style02