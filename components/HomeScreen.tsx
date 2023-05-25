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
  const menuItemsProps = [
    {
      icon: <Ionicons name="md-person-outline" size={24} color="black" />,
      title: 'Bio',
      subtitle: 'Um pouco sobre o usuário',
      navigateTo: 'Bio'
    },
    {
      icon: <MaterialCommunityIcons name="headset" size={24} color="black" />,
      title: 'Orgs',
      subtitle: 'Organizações que o usuário faz parte',
      navigateTo: 'Orgs'
    },
    {
      icon: <MaterialCommunityIcons name="file-document-outline" size={24} color="black" />,
      title: 'Repositórios',
      subtitle: 'Lista contendo todos os repositórios',
      navigateTo: 'Repositories'
    },
    {
      icon: <MaterialCommunityIcons name="face-recognition" size={24} color="black" />,
      title: 'Seguidores',
      subtitle: 'Lista de seguidores',
      navigateTo: 'Followers'
    }
  ]

  useEffect(() => {
    if (route?.params?.userId) getUserFromAPI(route.params.userId)
  }, [])

  function getInputedUser() {
    if (!inputText) return
    getUserFromAPI(inputText)
  }

  function getUserFromAPI(userId: string) {
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
  function HandleInputBlur() {
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
              onBlur={HandleInputBlur}
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
        {menuItemsProps.map((menuItemProps, i) => (
          <MenuItem key={menuItemProps.navigateTo}
            style={{ borderTopWidth: 1, borderTopColor: '#F0F0F0' }}
            icon={menuItemProps.icon}
            title={menuItemProps.title}
            subtitle={menuItemProps.subtitle}
            navigateTo={menuItemProps.navigateTo}
            navigation={navigation}
            userId={user?.id} />
        ))}
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