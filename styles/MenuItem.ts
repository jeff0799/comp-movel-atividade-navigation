import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        flex: 1
    },
    IconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 5
    },
    rightIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    icon: {
        backgroundColor: 'red',
        padding: 5,
        marginRight: 5,
        borderRadius: 5
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 13,
        color: 'gray'
    }
})