import React, {useEffect} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const AppSplashScreen = () => {
  useEffect(() => {
    // Ocultar a splash screen após 3 segundos
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./path-to-your-image.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao Meu App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
  },
});

export default AppSplashScreen;

