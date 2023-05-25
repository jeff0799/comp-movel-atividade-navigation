import { useEffect, useState } from "react";
import { FlatList, Pressable, Text } from "react-native";
import styles from '../styles/ListItem'
import Toast from "react-native-root-toast";
import toastConfig from "../config/toastConfig";

export default function FollowersScreen({ route, navigation }) {
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${route.params.userId}/followers`)
            .then((response) => {
                if (response.status === 404) {
                    Toast.show('usuário não existe', toastConfig)
                    navigation.goBack()
                }
                return response.json()
            })
            .then((followersData) => {
                if (followersData.length === 0) {
                    Toast.show('este usuário não tem seguidores', toastConfig)
                    navigation.goBack()
                }
                else setFollowers(followersData.map(follower => follower.login))
            })
            .catch((error) => {
                Toast.show('não foi possível obter os dados do usuário', toastConfig)
                console.log(`ERROR: \n${error}`)
            })
    }, [])
    function showProfile(userId: string) {
        navigation.push('Home', { userId })
    }

    function renderItem({ item: follower }) {
        return (
            <Pressable
                onPress={() => showProfile(follower)}
                style={styles.container}>
                <Text style={styles.text}>
                    {follower}
                </Text>
            </Pressable>
        )
    }

    return (
        <FlatList
            data={followers}
            renderItem={renderItem}
            keyExtractor={(item) => item}
        />
    )
}