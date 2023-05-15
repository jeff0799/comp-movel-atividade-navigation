import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import { MenuItem } from './MenuItem';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';
import styles from '../styles/HomeScreen';

export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
    
          <View style={styles.profileContainer}>
            <View>
              <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/1413455?v=4' }}
                style={styles.logo} />
              <Pressable style={styles.searchButton}>
                <Feather name="search" size={26} color="white" />
              </Pressable>
            </View>
            <Text style={styles.nameText}>Ronald</Text>
            <Text style={styles.emailText}>@ronald</Text>
          </View>
          <View style={styles.menuContainer}>
            <MenuItem icon={<Ionicons name="md-person-outline" size={24} color="black" />}
              title='Bio'
              subtitle='Um pouco sobre o usuário'
              navigateTo='Bio'
              navigation={navigation} />
            <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}></View>
    
            <MenuItem icon={<MaterialCommunityIcons name="headset" size={24} color="black" />}
              title='Orgs'
              subtitle='Organizações que o usuário faz parte'
              navigateTo='' 
              navigation={navigation}/>
            <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}></View>
    
            <MenuItem icon={<MaterialCommunityIcons name="file-document-outline" size={24} color="black" />}
              title='Repositórios'
              subtitle='Lista contendo todos os repositórios'
              navigateTo='' 
              navigation={navigation}/>
            <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}></View>
            
            <MenuItem icon={<MaterialCommunityIcons name="face-recognition" size={24} color="black" />}
              title='Seguidores'
              subtitle='Lista de seguidores'
              navigateTo='' 
              navigation={navigation}/>
          </View>
    
          <View style={styles.resetButtonContainer}>
            <Pressable style={styles.resetButton}>
              <Text>
                <FontAwesome name="sign-out" size={17} color="black" />
                <Text style={styles.resetButtonText}> Resetar</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      );
}