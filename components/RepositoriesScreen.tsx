import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from '../styles/ListItem'
import Toast from "react-native-root-toast";
import toastConfig from "../config/toastConfig";

export default function RepositoriesScreen({ route, navigation }) {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${route.params.userId}/repos`)
            .then((response) => {
                if (response.status === 404) {
                    Toast.show('usuário não existe', toastConfig)
                    navigation.goBack()
                }
                return response.json()
            })
            .then((repositoriesData) => {
                if (repositoriesData.length === 0) {
                    Toast.show('este usuário não tem repositórios', toastConfig)
                    navigation.goBack()
                }
                else setRepositories(repositoriesData.map(repository => repository.name))
            })
            .catch((error) => {
                Toast.show('não foi possível obter os dados do usuário', toastConfig)
                console.log(`ERROR: \n${error}`)
            })
    }, [])

    function renderItem({ item: repository }) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {repository}
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={repositories}
            renderItem={renderItem}
            keyExtractor={(item) => item}
        />

    )
}