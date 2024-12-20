import React, { useEffect } from 'react';
import { SplashScreen, Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import "../global.css";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Lato": require("../assets/fonts/Lato-Regular.ttf"),
    "Sour Gummy": require("../assets/fonts/SourGummy-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={{ flex: 1 }}>
      <Slot /> 
      <StatusBar
        style="light" // Light text for status bar
        backgroundColor="#0D6E3F" // A beautiful green for background
        translucent={false} // Makes it opaque
      />
    </View>
  );
};

export default Layout;
