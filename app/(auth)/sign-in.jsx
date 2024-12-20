import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePaths from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { use } from 'react'
import { Link } from 'expo-router'
import { signIn } from '../../lib/appwrite'
import {router } from 'expo-router'


const SignIn = () => {

  const [Form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = async () => {

    if (!Form.email || !Form.password) {
      Alert.alert('Error', 'Please fill all fields')
    }
    // set it to global state...
    setisSubmitting(true);

    try {

      await signIn(Form.email, Form.password);

      router.replace('/home')

    } catch (error) {
      Alert.alert('Error', error.message)

    } finally {
      setisSubmitting(false);
    }

  }



  const [isSubmitting, setisSubmitting] = useState(false)

  return (
    <SafeAreaView className="bg-lightGray">
      <ScrollView>
        <View className="w-full min-h-[80vh] justify-center px-4 my-8">
          <Image
            source={imagePaths.glogo}
          />

          <Text className="text-2xl text-darkGray font-latoBold mt-2 mb-8"> Log in to GarbageGo</Text>

          <FormField 
            title = 'Email'
            value = {Form.email}
            handleChangeText = {(e) => setForm({...Form, email: e})}
            otherStyles = 'mt-5'
            keyBoardType = 'email-address'
          />
          <FormField 
            title = 'Password'
            value = {Form.password}
            handleChangeText = {(e) => setForm({...Form, password: e})}
            otherStyles = 'mt-5'
            
          />

          <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-8 h-14"
          textStyles="text-white text-xl font-lato"
          isLoading={isSubmitting} />

          <View className="flex-row justify-center pt-5 gap-2">

          <Text className="text-darkGray font-lato text-lg">Don't have an account?
          </Text>

          <Link
          href="/sign-up"
          className="text-successGreen font-latoBold text-lg">Sign Up</Link>

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn