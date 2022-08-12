import React from 'react';
import { Image, Platform, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const ProfileCard = (props) => {
  console.log(props);
  const { id, image, name, occupation, description, showThumbnail, onPress } = props;

  let containerStyles = [styles.cardContainer];
  if(showThumbnail){
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={() => onPress(id)}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardTitle}>
            {name}
          </Text>
        </View>
        <View style={styles.cardSubtitleContainer}>
          <Text style={styles.cardSubtitle}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  cardThumbnail: {
    transform: [{scale: 0.5}]
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300, 
    height: 400,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    width: 120,
    height: 120,
    borderRadius: 60,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        bordrWidht: 3,
        borderColor: '#000',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 3
  },
  cardSubtitleContainer: {
    borderColor: '#000',
    borderBottomWidth: 3,
  },
  cardSubtitle: {
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40, 
    marginBottom: 10
  }
});

export default ProfileCard