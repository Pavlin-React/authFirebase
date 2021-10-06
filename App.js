import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lottieWrapper} >
        <LottieView source={require('./assets/lottie.json')} loop autoPlay/>
      </View>
      <Text>this is a text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3250c3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150
  },
  lottieWrapper: {
    width: '80%',
    height:300,
    alignItems: 'baseline',
  }
});
