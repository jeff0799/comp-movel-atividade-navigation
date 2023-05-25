import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        flex: 2,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 20,
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
    idText: {
        color: 'gray',
        fontSize: 20
    },

    searchContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: "row"
    },
    searchButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 15
    },
    input:{
        backgroundColor: 'black',
        color: 'white',
        padding: 5,
        fontSize: 20,
        borderRadius: 15,
        width: 150
    },
    inputHidden:{
        display: 'none'
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