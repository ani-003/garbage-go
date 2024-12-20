import React from 'react';
import { TouchableOpacity, Text, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Client, Account } from 'react-native-appwrite';
import Config from '../lib/appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your API Endpoint
  .setProject('6762ce6e000b983f8e16'); // Replace with your project ID

const account = new Account(client);

const EndSessionButton = ({ containerStyles, textStyles }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEndSession = async () => {
    setIsLoading(true);
    try {
      // Call the Appwrite function to delete sessions
      const result = await account.deleteSessions();
      console.log(result);

      // Redirect to the sign-in page after successful logout
      router.replace('/sign-in');
      Alert.alert('Success', 'You have been signed out.');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#FF4D4D', // Red background
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          paddingHorizontal: 16,
        },
        containerStyles,
      ]}
      onPress={handleEndSession}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text
          style={[
            {
              color: '#FFF', // White text
              fontSize: 18,
              fontWeight: 'bold',
            },
            textStyles,
          ]}
        >
          End Session
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default EndSessionButton;
