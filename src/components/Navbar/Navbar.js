import React from 'react'
import Basket from '../../assets/basket.png'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";


function Navbar() {
  return (
    <View>
      <Image source={Basket} />

    </View>
  )
}

export default Navbar