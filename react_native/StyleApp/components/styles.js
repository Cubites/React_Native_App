import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    center: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center'
    }
});

const texts = StyleSheet.create({
    h1: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black'
    },
    p: {
        fontSize: 16,
        color: '#333333'
    }
});

const buttons = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const blackNWhite = StyleSheet.create({
    bgColorWhite: {
        backgroundColor: "#ffffff"
    },
    bgColorDark: {
        backgroundColor: '#666666'
    },
    textColorWhite: {
        color: "black"
    },
    textColorDark: {
        color: "white"
    }
})

// export default styles;
export { styles, texts, buttons, blackNWhite };