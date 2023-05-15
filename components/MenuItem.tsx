import { Pressable, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../styles/MenuItem";

interface MenuItemProps {
    icon: any;
    title: string;
    subtitle: string;
    navigateTo: string;
    navigation: any;
}

export function MenuItem(props: MenuItemProps) {
    return (
        <Pressable style={styles.container}
            onPress={()=>props.navigation.navigate(props.navigateTo)}>
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

