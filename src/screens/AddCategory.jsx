import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

import userImage from './../assets/user.png'

export default function AddCategory({ navigation }) {

  return (
    <View style={style.section}>
      <StatusBar />
      <View>
        <Image
          style={style.image}
          source={userImage}
        />
      </View>
      <TouchableOpacity style={style.CategoryButton}>
        {/* onPress={handleOnPress} */}
        <Text style={style.textButton}>Add Category</Text>
      </TouchableOpacity>
      <Text style={style.CategoryTitle}>List Category</Text>
      {/* { category.map((list) => (
        <Text key={list._id}>{list.category}</Text>
      ))} */}
    </View>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    padding: 35
  },
  image: {
    width: '10rem',
    aspectRatio: 1 / 1,
    display: 'block',
    margin: 'auto',
    borderRadius: 999
  },
  CategoryTitle: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20
  },
  textValue: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 25,
    color: 'grey',
    padding: 10,
    borderColor: 'grey'
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  CategoryButton: {
    backgroundColor: '#FF5555',
    height: 45,
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },
  linkNavigateToRegister: {
    color: 'red',
    textAlign: 'center',
  }
})
