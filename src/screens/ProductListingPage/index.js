import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListingCard from '../../components/ListingCard';
import {fetchProductList} from '../../utils/services';
import Header from '../../components/Header';
import styles from './styles';

const ProductListingPage = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProductList(setProductList);
  }, []);

  useEffect(() => {
    if (productList?.length) {
      setLoading(false);
    }
  }, [productList]);

  return (
    <View style={styles.outerContainer}>
      <Header showCart title={'Zomato'} />
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
};

export default ProductListingPage;
