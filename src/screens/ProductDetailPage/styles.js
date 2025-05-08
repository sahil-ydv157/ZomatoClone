import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  image: {width: '100%', aspectRatio: 3 / 4},
  title: {fontWeight: 'bold', fontSize: 16},
  price: {fontSize: 16, fontStyle: 'italic'},
  description: {fontSize: 14},
  buttonContainer: {paddingVertical: 10},
});

export default styles;
