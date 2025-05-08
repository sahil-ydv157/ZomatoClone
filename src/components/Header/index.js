import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = ({showback, title, showCart}) => {
    const navigation = useNavigation();
  const  handleBackPress = () => {
    navigation.pop();
  }

  const  handleCartPress = () => {
    navigation.navigate('Cart');
  }
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
      {showback ? (
        <Pressable onPress={handleBackPress}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/002/205/875/non_2x/backward-arrow-icon-free-vector.jpg',
            }}
            style={{width:30,aspectRatio:1}}
          />
        </Pressable>
      ) : <View/>}
      {title ? <Text style={{fontSize:20,fontWeight:'700'}}>{title}</Text> : <View/>}
      {showCart ? (
        <Pressable onPress={handleCartPress}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/001/504/962/non_2x/shopping-cart-icon-free-vector.jpg',
            }}
            style={{width:30,aspectRatio:1}}
          />
        </Pressable>
      ) : <View/>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
