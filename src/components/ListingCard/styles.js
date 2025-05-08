import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerContainer:{flexDirection: 'row', padding: 10, flex: 1, gap: 10},
    image: {height: 90, aspectRatio: 1, borderRadius: 12},
    textContainer : {flexDirection: 'column', flex: 1, gap: 4},
    titleText: {fontWeight: 'bold', fontSize: 16},
    priceText: {fontSize: 16, fontStyle: 'italic'},
    descriptionText: {fontSize: 14}
});

export default styles;