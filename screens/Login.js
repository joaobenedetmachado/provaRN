import { useNavigation } from '@react-navigation/native';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                <Text style={{fontSize: 25}}>Login</Text>
                <TextInput
            placeholder='Email'
            style={styles.textInput}
            />

            <TextInput
            placeholder='Senha'
            style={styles.textInput}
            />

            <Button
            title='Entrar'
            onPress={ ()=> {
                navigation.navigate("DrawerNav")
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 60,
    },
    textInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderRadius: 12,
    }
  });