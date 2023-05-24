import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import BioScreen from './components/BioScreen';
import FollowersScreen from './components/FollowersScreen';
import OrgsScreen from './components/OrgsScreen';
import RepositoriesScreen from './components/RepositoriesScreen';
import { RootSiblingParent } from 'react-native-root-siblings'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
          <Stack.Screen name='Bio' component={BioScreen}
            //@ts-ignore
            options={({ route }) => ({ title: `Bio de ${route.params?.userId}` })}
          />
          <Stack.Screen name='Orgs' component={OrgsScreen}
            //@ts-ignore
            options={({ route }) => ({ title: `Organizações de ${route.params?.userId}` })}
          />
          <Stack.Screen name='Repositories' component={RepositoriesScreen}
            //@ts-ignore
            options={({ route }) => ({ title: `Repositórios de ${route.params?.userId}` })}
          />
          <Stack.Screen name='Followers' component={FollowersScreen}
            //@ts-ignore
            options={({ route }) => ({ title: `Seguidores de ${route.params?.userId}` })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}


