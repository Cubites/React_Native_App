import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MemoItem = ({ id, content, dt, done }) => {
  let backgroundColor = done ? '#bb48ca' : '#f4a1ff';
  let color = done ? '#fff' : '#000';
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.date}>
        <Text style={{color: color, fontSize: 12}}>{dt}</Text>
      </View>
      <View style={styles.content}>
        <Text style={{color: color}}>{content}</Text>
      </View>
      <View style={styles.edtbox}>
        <TouchableOpacity>
          <Icon name="edit" size={32} color="#6b00b3" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="delete" size={32} color="#b62b2b" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 150,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  date: {
    flex: 2, 
    paddingVertical: 10,
    borderRightWidth: 2, 
    borderColor: '#fbd9ff',
    justifyContent: 'center',
  },
  content: {
    flex: 6, 
    marginLeft: 5, 
    justifyContent: 'center',
  },
  edtbox: {
    flex: 2, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default MemoItem