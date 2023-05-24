import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from '../styles/ListItem'
import Toast from "react-native-root-toast";
import toastConfig from "../config/toastConfig";

export default function OrgsScreen({ route, navigation }) {
    const [orgs, setOrgs] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${route.params.userId}/orgs`)
            .then((response) => {
                if (response.status === 404) {
                    Toast.show('usuário não existe', toastConfig)
                    navigation.goBack()
                }
                return response.json()
            })
            .then((orgsData) => {
                if (orgsData.length === 0) {
                    Toast.show('este usuário não tem organizações', toastConfig)
                    navigation.goBack()
                }
                else setOrgs(orgsData.map(org => org.login))
            })
            .catch((error) => {
                Toast.show('não foi possível obter os dados do usuário', toastConfig)
                console.log(`ERROR: \n${error}`)
            })
    }, [])

    function renderItem({ item: org }) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {org}
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={orgs}
            renderItem={renderItem}
            keyExtractor={(item) => item}
        />

    )
}