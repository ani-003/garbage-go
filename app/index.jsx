import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter, Redirect, router } from 'expo-router'; // Correctly import useRouter
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css"; // Assuming this imports your Tailwind configuration

import imagePaths from '../constants/images';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  const router = useRouter(); // Hook to access navigation

  return (
    <SafeAreaView className="bg-lightGray h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="items-center justify-center w-full px-4 py-10"> 
          {/* Logo Images */}
          <View className="items-center justify-center w-full mb-12"> 
            <Image
              source={imagePaths.glogo}
              className="w-[250px] h-[120px]"  
              resizeMode="contain"
            />
            <Image
              source={imagePaths.landingImg}
              className="w-[250px] h-[250px]"  
              resizeMode="contain"
            />
          </View>

          {/* Main Text */}
          <View className="w-full items-center justify-center px-10 mb-12"> 
            <Text className="text-4xl font-bold text-center text-darkGray">
              Say{' '}
              <Text className="text-4xl font-lato font-bold text-primaryGreen">
                Goodbye
              </Text>{' '}
              to Garbage with One Click
            </Text>
          </View>

          {/* Get Started Button */}
          <CustomButton
            title="Get Started"
            handlePress={() => router.push('/sign-in')}
            containerStyles="h-[50px] w-[300px] mt-5"  
            textStyles="text-white text-2xl"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
