import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

// THIS IS A TS THING AND IT SIMPLY TELLS OUR REACT APPLICATION WHAT THOSE TYPES OF THE PROPS ARE OR SHOULD BE
interface Props {
  placeholder: string;
  onPress ? : () => void;  
}

const SearcBar = ({placeholder, onPress} : Props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(31, 41, 55, 0.3)', 
      borderRadius: 99, paddingHorizontal: 15, paddingVertical: 12}}>
      <Image source={icons.search} 
      style={{width: 20, height: 20, resizeMode: 'contain', tintColor: '#ab8bff'}}
      />
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        style={{flex: 1, marginLeft: 6, color: 'white'}}
      />
    </View>
  )
}

export default SearcBar