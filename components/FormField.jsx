import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const FormField = ({ 
  title, 
  value, 
  placeholder, 
  handleChangeText, 
  otherStyles, 
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  // Border color logic: green if there's text, otherwise light gray
  const borderColor = value ? '#32CD32' : '#D3D3D3'; // Green or light gray

  return (
    <View style={{ marginBottom: 16, ...otherStyles }}>
      {/* Field Label */}
      <Text style={{ color: '#4A4A4A', fontWeight: 'bold', marginBottom: 8, fontSize: 16 }}>
        {title}
      </Text>

      {/* Input Container */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: borderColor, // Dynamic border color based on value
          height: 56,
          paddingHorizontal: 16,
          borderRadius: 16,
          backgroundColor: '#F8F8F8', // Light background for input container
        }}
      >
        {/* TextInput */}
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            color: '#333', // Dark gray text color
          }}
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#D1D1D1"
          onChangeText={handleChangeText} // Updates value dynamically
          secureTextEntry={title === 'Password' && !showPassword} // Hide/show password
          {...props} // Additional props
        />

        {/* Password Toggle Icon */}
        {title === 'Password' && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
            accessibilityLabel={showPassword ? 'Hide Password' : 'Show Password'}
            style={{ marginLeft: 8 }}
          >
            <Feather
              name={showPassword ? 'eye' : 'eye-off'} // Icon based on visibility
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
