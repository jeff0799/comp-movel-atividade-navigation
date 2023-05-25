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
  const menuScreensProps = [
    {
      name: 'Bio',
      component: BioScreen,
      nameOnTitle: 'Bio'
    },
    {
      name: 'Orgs',
      component: OrgsScreen,
      nameOnTitle: 'Organizações'
    },
    {
      name: 'Repositories',
      component: RepositoriesScreen,
      nameOnTitle: 'Repositórios'
    },
    {
      name: 'Followers',
      component: FollowersScreen,
      nameOnTitle: 'Seguidores'
    },
  ]

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
          {menuScreensProps.map((screen)=>(
            <Stack.Screen key={screen.name}
              name={screen.name} component={screen.component}
              //@ts-ignore
              options={({ route }) => ({ title: `${screen.nameOnTitle} de ${route.params?.userId}` })}
            />
          ))}
          
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}


