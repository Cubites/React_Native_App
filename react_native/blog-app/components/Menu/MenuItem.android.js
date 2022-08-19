import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

const MenuItem = (props) => {
  let { isSelected, icon, tintColor } = props, 
    textStyles=[styles.text], 
    containerStyles = [styles.container],
    iconContainerStyles = [styles.iconContainer],
    iconElement = icon;
  
  if(isSelected){
    if(tintColor){
      textStyles.push({color: tintColor});
    }else{
      textStyles.push(selectedStyles.text);
    }
    containerStyles.push(selectedStyles.container);
    iconContainerStyles.push(selectedStyles.iconContainer);
    if(icon){
      iconElement = React.cloneElement(
        icon,
        {color: props.tintColor || selectedTextColor}
      )
    }
  }

  return (
    <TouchableNativeFeedback
      background={props.background}
      onPress={() => props.onPress(props.id)}
    >
      <View style={containerStyles}>
        <View style={iconContainerStyles}></View>
        <Text style={textStyle}>
          {props.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    width: 44,
    height: 48,
    marginRight: 12, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    marginRight: 16,
    fontSize: 14,
    fontWeight: 'bold'
  }
});

const selectedTextColor = '';
const selectedBackGroundColor = '';
const selectedStyles = StyleSheet.create({
  container: {
    backgroundColor: selectedBackGroundColor
  },
  iconContainer: {
    backgroundColor: selectedBackGroundColor
  },
  text: {
    color: selectedTextColor
  }
})

export default MenuItem