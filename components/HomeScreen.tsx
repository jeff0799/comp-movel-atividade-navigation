import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { MenuItem } from './MenuItem';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';
import styles from '../styles/HomeScreen';
import { useEffect, useState } from 'react';
import Toast from 'react-native-root-toast';
import toastConfig from '../config/toastConfig';

interface User {
  id: string;
  avatar_url: string;
  name: string;
}

export default function HomeScreen({ route, navigation }) {
  const [showInput, setShowInput] = useState(false)
  const [inputText, setInputText] = useState('')
  const [user, setUser] = useState<User>()

  const defaultImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'

  useEffect(() => {
    // let user = 'tadeuzagallo'
    // let user = 'ronaldaraujo'
    // let user = 'jeff0799'
    if (route?.params?.userId) getUser(route.params.userId)
  }, [])

  function getInputedUser() {
    if (!inputText) return
    getUser(inputText.toLocaleLowerCase())
  }

  function getUser(userId: string) {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.status === 404) {
          Toast.show('usuário não existe', toastConfig)
          return
        }
        return response.json()
      })
      .then((userData) => {
        if (!userData) return
        setUser({
          id: userData.login,
          avatar_url: userData.avatar_url,
          name: userData.name
        })
        setInputText('')
      })
      .catch((error) => {
        Toast.show('não foi possível obter os dados do usuário', toastConfig)
        console.log(error)
      })
  }

  function onPressSearch() {
    if (!showInput) {
      setShowInput(true)
    }
    else {
      setShowInput(false)
      getInputedUser()
    }
  }
  function onInputBlur() {
    setShowInput(false)
    getInputedUser()
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.profileContainer}>
        <View>
          <Image
            source={{ uri: user?.avatar_url ?? defaultImage }}
            style={styles.logo} />
          <View style={styles.searchContainer}>
            <TextInput
              style={[styles.input,
              !showInput ? styles.inputHidden : {}]}
              onChangeText={setInputText}
              onBlur={onInputBlur}
              value={inputText}
            />
            <Pressable style={styles.searchButton}
              onPress={onPressSearch}>
              <Feather name="search" size={26} color="white" />
            </Pressable>
          </View>
        </View>
        <Text style={styles.nameText}>{user?.name}</Text>
        <Text style={styles.idText}>{user?.id ? '@' + user?.id : null}</Text>
      </View>
      <View style={styles.menuContainer}>
        <MenuItem icon={<Ionicons name="md-person-outline" size={24} color="black" />}
          title='Bio'
          subtitle='Um pouco sobre o usuário'
          navigateTo='Bio'
          navigation={navigation}
          userId={user?.id} />
        <View style={styles.menuItemSeparator}></View>

        <MenuItem icon={<MaterialCommunityIcons name="headset" size={24} color="black" />}
          title='Orgs'
          subtitle='Organizações que o usuário faz parte'
          navigateTo='Orgs'
          navigation={navigation}
          userId={user?.id} />
        <View style={styles.menuItemSeparator}></View>

        <MenuItem icon={<MaterialCommunityIcons name="file-document-outline" size={24} color="black" />}
          title='Repositórios'
          subtitle='Lista contendo todos os repositórios'
          navigateTo='Repositories'
          navigation={navigation}
          userId={user?.id} />
        <View style={styles.menuItemSeparator}></View>

        <MenuItem icon={<MaterialCommunityIcons name="face-recognition" size={24} color="black" />}
          title='Seguidores'
          subtitle='Lista de seguidores'
          navigateTo='Followers'
          navigation={navigation}
          userId={user?.id} />
      </View>

      <View style={styles.resetButtonContainer}>
        <Pressable style={styles.resetButton}
          onPress={() => setUser(null)}>
          <Text>
            <FontAwesome name="sign-out" size={17} color="black" />
            <Text style={styles.resetButtonText}> Resetar</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}