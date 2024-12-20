import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePaths from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { use } from 'react'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import EndSessionButton from '../../components/EndSessionButton'

const SignUp = () => {

  const [Form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {

    if (!Form.username || !Form.email || !Form.password) {
      Alert.alert('Error', 'Please fill all fields')
    }
    // set it to global state...
    setisSubmitting(true);

    try {

      const result = await createUser(Form.email, Form.password, Form.username);

      console.log(result)

      router.replace('/home')

    } catch (error) {
      Alert.alert('Error', error.message)

    } finally {
      setisSubmitting(false);
    }

  }



  return (
    <SafeAreaView className="bg-lightGray">
      <ScrollView>
        <View className="w-full min-h-[80vh] justify-center px-4 my-8">
          <Image
            source={imagePaths.glogo}
          />

          <Text className="text-2xl text-darkGray font-latoBold my-4"> Sign Up to GarbageGo</Text>

          <FormField
            title='Email'
            value={Form.email}
            handleChangeText={(e) => setForm({ ...Form, email: e })}
            otherStyles='mt-5'
            keyBoardType='email-address'
          />
          <FormField
            title='Username'
            value={Form.username}
            handleChangeText={(e) => setForm({ ...Form, username: e })}
            otherStyles='mt-8'

          />
          <FormField
            title='Password'
            value={Form.password}
            handleChangeText={(e) => setForm({ ...Form, password: e })}
            otherStyles='mt-5'

          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-8 h-14"
            textStyles="text-white text-xl font-lato"
            isLoading={isSubmitting} />

          <View className="flex-row justify-center pt-5 gap-2">

            <Text className="text-darkGray font-lato text-lg">Have an account already?
            </Text>

            <Link
              href="/sign-in"
              className="text-successGreen font-latoBold text-lg">Sign In</Link>

          </View>




          {/* <EndSessionButton/> */}

        </View>





      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp