import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import "../global.css"

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
   
      <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      
       className={`bg-primaryGreen  justify-center items-center rounded-xl ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}

       disabled={isLoading}
       
       >
        
          <Text className={`font-latoBlack ${textStyles}`}> {title} </Text>

      </TouchableOpacity>
  
  )
}

export default CustomButton