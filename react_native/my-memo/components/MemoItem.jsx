import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MemoItem = ({ id, content, dt, done, onRemove, onDone }) => {
  let backgroundColor = done ? '#bb48ca' : '#f4a1ff';
  let color = done ? '#fff' : '#000';

  const remove = () => {
    Alert.alert(
      '삭제', 
      '정말로 삭제하시겠습니까?', [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {text: '삭제', onPress: () => { onRemove(id); }, style: 'destructive'}
      ], {
        cancelable: true,
        onDismiss: () => {}
      }
    );
  }

  return (
    <View style={[styles.card, {backgroundColor: backgroundColor}]}>
      <View style={styles.cardCheck}>
        <View>
          <TouchableOpacity onPress={() => onDone(id)}>
            <View style={[styles.itemCircle, done && styles.filled]}>
              {
                done && (
                  <Image source={require('../assets/images/check_white/check_white.png')} />
                )
              }
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardMiddle}>
        <View style={styles.cardContent}>
          <Text style={{color: color}}>{content}</Text>
        </View>
        <View style={styles.cardDate}>
          <Text style={{color: color, fontSize: 12}}>{dt}</Text>
        </View>
      </View>
      <View style={styles.edtboxWhenNotEditButton}>
        {/* <TouchableOpacity>
          <Icon name="edit" size={32} color="#6b00b3" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={remove}>
          <Icon name="delete" size={32} color="#b62b2b" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 200,
    minHeight: 80,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  cardCheck: {
    flex: 1, 
    paddingVertical: 10,
    borderRightWidth: 2, 
    borderColor: '#fbd9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: '#eeeeee',
    borderWidth: 1,
    marginRight: 15,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMiddle: {
    flex: 6, 
    marginLeft: 10, 
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardContent: {
    marginTop: 10,
  },
  cardDate: {
    alignSelf: 'flex-end'
  },
  edtbox: {
    flex: 2, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  edtboxWhenNotEditButton: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default MemoItem