import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from './src/screens/Cart';
import ProductDetailPage from './src/screens/ProductDetailPage';
import ProductListingPage from './src/screens/ProductListingPage';

const Stack = createNativeStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="PLP" component={ProductListingPage} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="PDP" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
