import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Style01 from './components/Style01';
import PropTypes from 'prop-types';
import ProfileCard from './components/ProfileCard';

const userImage = require('./images/user.png');
const str = [{
    id: 1,
    image: userImage, 
    name: '홍길동',
    occupation: 'React Native Developer',
    description: '되려니와, 청춘의 같은 때에, 어디 인생을 것이다. 귀는 갑 작고 거선의 천자만홍이 군영과 가진 품에 청춘 것이다.',
    showThumbnail: true
}];

const App = () => {
  const [Data, setData] = useState(str);

  const handleProfileCardPress = (id) => {
    setData(Data.map(dt => dt.id === id ? { ...dt, showThumbnail : !dt.showThumbnail} : dt));
  }

  let list = Data.map((item, index) => {
    let { id, image, name, occupation, description, showThumbnail } = item;
    return (
      <ProfileCard 
        key={'card-' + index}
        id={id}
        image={image}
        name={name}
        occupation={occupation}
        description={description}
        showThumbnail={showThumbnail}
        onPress={handleProfileCardPress}
      />
    )
  })
  
  return (
    <View style={styles.container}>
      {list}
    </View>
  )
}

ProfileCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App