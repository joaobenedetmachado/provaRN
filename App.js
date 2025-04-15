import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import Estoque from './screens/Estoque';
import FeedBack from './screens/FeedBack';
import Login from './screens/Login';

function DrawerNav() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen 
      name="Estoque" component={Estoque} />
      <Drawer.Screen name="Fale Conosco" component={FeedBack} />
    </Drawer.Navigator>
  );
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerNav" component={DrawerNav}      options={{
        headerShown:false,
      }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
