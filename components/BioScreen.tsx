import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Toast from "react-native-root-toast";
import toastConfig from "../config/toastConfig";

export default function BioScreen({ route, navigation }) {
    const [bio, setBio] = useState()

    useEffect(() => {
        fetch(`https://api.github.com/users/${route.params.userId}`)
            .then((response) => response.json())
            .then((userData) => {
                if (!userData.bio) {
                    Toast.show('este usuário não tem bio', toastConfig)
                    navigation.goBack()
                }
                else setBio(userData.bio)
            })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>
                {bio}
            </Text>
        </View>
    )
}