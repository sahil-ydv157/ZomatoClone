import {Image, Text, View} from 'react-native';
import React from 'react';
import CartButton from '../../components/CartButton';
import Header from '../../components/Header';
import styles from './styles';

const ProductDetailPage = ({route}) => {
  const {product} = route.params;
  return (
    <View style={styles.outerContainer}>
      <Header showback={true} showCart={true} title={'Product'} />
      <View style={{flex: 1}}>
        <Image
          source={{uri: product?.image}}
          style={styles.image}
          resizeMode="stretch"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CartButton item={product} />
      </View>
    </View>
  );
};

export default ProductDetailPage;
