import { Pressable, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../styles/MenuItem";
import Toast from "react-native-root-toast";
import toastConfig from "../config/toastConfig";

interface MenuItemProps {
    icon: any;
    title: string;
    subtitle: string;
    navigateTo: string;
    navigation: any;
    userId: string;
}

export function MenuItem(props: MenuItemProps) {

    function openScreen() {
        if (!props.userId) Toast.show('pesquise um perfil primeiro', toastConfig)
        else props.navigation.push(props.navigateTo, { userId: props.userId })

    }

    return (
        <Pressable style={styles.container}
            onPress={openScreen}>
            <View style={styles.IconContainer}>
                <Text style={styles.icon}>
                    {props.icon}
                </Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>
            <View style={styles.rightIconContainer}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </Pressable>
    )
}

