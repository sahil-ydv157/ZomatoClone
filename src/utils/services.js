import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchProductList = setData => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(() => {
      setData({error: true});
    });
};

export const setDataInAsyncStorage = async product => {
  const data = await AsyncStorage.getItem('cart');
  let cart = data ? JSON.parse(data) : [];

  const index = cart.findIndex(item => item.id === product.id);
  if (index >= 0) {
    cart[index].quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }

  await AsyncStorage.setItem('cart', JSON.stringify(cart));
};

export const removeDataAsyncStorage = async product => {
  const data = await AsyncStorage.getItem('cart');
  let cart = data ? JSON.parse(data) : [];

  const updatedCart = cart.filter(item => item.id !== product.id);

  await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
};

export const updateCartQuantity = async (product, quantity) => {
  const data = await AsyncStorage.getItem('cart');
  let cart = data ? JSON.parse(data) : [];

  const index = cart.findIndex(item => item.id === product.id) || 0;
  if (index >= 0) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
  } else {
    cart.push({...product, quantity: 1});
  }
  await AsyncStorage.setItem('cart', JSON.stringify(cart));
};

export const getCart = async () => {
  const data = await AsyncStorage.getItem('cart');
  let cart = data ? JSON.parse(data) : [];
  return cart;
};

export const setCartEmpty = async () => {
  const data = await AsyncStorage.setItem('cart', JSON.stringify([]));
  return data;
};
