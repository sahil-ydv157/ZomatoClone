import {Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getCart,
  updateCartQuantity,
} from '../../utils/services';
import styles from './styles';

const CartButton = ({item}) => {
  const [quantity, setQuantity] = useState(0);


  useEffect(() => {
    getCurrentCount();
  }, []);

  const getCurrentCount = async () => {
    const currentCart = await getCart();
    const currentItem = currentCart.find(cartItem => {
      return cartItem?.id === item?.id});
    if (currentItem?.quantity > 0) {
      setQuantity(currentItem.quantity);
    }
  };

  const updateCart = async isAdd => {
    const newQuantity = isAdd ? quantity + 1 : quantity - 1;
    setQuantity(newQuantity);
    await updateCartQuantity(item, newQuantity);
  };

  return (
    <View
      style={styles.outerContainer}>
      <Pressable
        onPress={() => updateCart(false)}
        disabled={quantity <= 0}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.text}>-</Text>
      </Pressable>
      <Pressable
        onPress={() => updateCart(true)}
        disabled={quantity > 0}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.text}>
          {quantity ? quantity : 'Add to Cart'}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => updateCart(true)}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

export default CartButton;
