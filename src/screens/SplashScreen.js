import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('screen');

export const SplashScreen = ({ navigation }) => {

  const openHomeScreen = () => {
    navigation.navigate('HomeScreen')
  }


  return (
    <LinearGradient
      colors={['#ffaf00', '#ffd500']}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../img/kitty_screensaver.png')}
        />
      </View>

      <View style={[styles.buttonContainer, { width: width }]}>
        <Button
          onPress={() => openHomeScreen()}
          title="Войти без регистрации">
        </Button>

        <Button
          // onPress={removeTask}
          title="Регистрация">
        </Button>
      </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  imageContainer: {
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 150,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  buttonContainer: {
    marginBottom: 150,
  },
});
