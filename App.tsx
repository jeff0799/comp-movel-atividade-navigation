import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import BioScreen from './components/BioScreen';
import userContext from './context/userContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <userContext.Provider value='ronald'>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
          <Stack.Screen name='Bio' component={BioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  );
}


