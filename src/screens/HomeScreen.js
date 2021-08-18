import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const HomeScreen = () => {

  return (
    <LinearGradient
      colors={['#ffaf00', '#ffd500']}
      style={styles.container}>
      <View>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

