import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
    },
    menuContainer: {
        flex: 2,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 20,
        backgroundColor: 'green'
    },
    resetButtonContainer: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    logo: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    emailText: {
        color: 'gray',
        fontSize: 20
    },
    searchButton: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 10,
        borderRadius: 15
    },
    resetButton: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetButtonText: {
        fontSize: 17
    }
});