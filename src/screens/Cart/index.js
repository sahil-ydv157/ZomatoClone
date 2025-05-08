import { ActivityIndicator, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCart } from '../../utils/services';
import ListingCard from '../../components/ListingCard';
import Header from '../../components/Header';
import styles from '../ProductListingPage/styles';

const Cart = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCartData();
  }, []);

  useEffect(() => {
    if (productList?.length) {
      setLoading(false);
    }
  }, [productList]);
  const getCartData = async()=>{
    const currentData =  await getCart();
    console.log("🚀 ~ getCartData ~ currentData:", currentData)
    setProductList(currentData);
  }
  return (
    <View style={styles.outerContainer}>
      <Header title={'Cart'} showback={true} showCart={false} />
      {!loading && productList.length ? (
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          data={productList}
          renderItem={({item}) => <ListingCard item={item} navigation={navigation} />}
          keyExtractor={item => item?.id}
          initialNumToRender={20}
        />
      ) : <View></View>}
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
    </View>
  );
}

export default Cart;

