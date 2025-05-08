import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartButton from '../CartButton';
import styles from './styles';
/*

{"item": {"index": 19, "item": {"category": "women's clothing", "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.", "id": 20, "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", "price": 12.99, "rating": [Object], "title": "DANVOUY Womens T Shirt Casual Cotton Short"}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}}

*/
const ListingCard = props => {
  const {
    item,
    item: {description, image, price, title},
    navigation,
  } = props;

  const handleItemPress = () => {
    navigation.navigate('PDP', {product: item});
  };
  return (
    <Pressable
      onPress={handleItemPress}
      style={styles.outerContainer}>
      <Image
        source={{uri: image}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>${price}</Text>
        <Text style={styles.descriptionText} numberOfLines={2}>
          {description}
        </Text>
        <CartButton item={item} />
      </View>
    </Pressable>
  );
};

export default ListingCard;
