import { useContext } from "react";
import { Text, View } from "react-native";
import userContext from "../context/userContext";

export default function BioScreen() {
    const user = useContext(userContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >Bio de {user}</Text>
        </View>
    )
}