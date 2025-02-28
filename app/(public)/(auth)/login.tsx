import {useState, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import {useRouter} from 'expo-router'
import useUserStore from '@/store/user.store';
// import {save} from '@lib/utils/secure_store';

export default function LoginScreen() {
    const router = useRouter();
    const {setIsAuthentificated, setUser} = useUserStore()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = async () => {       
        // if(email && password){  
        if(email  === "test@gmail.com" && password === "azerty123456"){            
            setIsAuthentificated(true);
            // await save('isAuthentificated', 'true');
            router.replace("/(private)/(tabs)");            
        } else {
            setError(true)
            console.error('error' + error)
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page de Connexion</Text>

      <Image source={require('@/assets/images/Tinder.png')} style={styles.logo}/>      

      {error && <Text style={styles.error}>Email ou mot de passe incorrect !</Text>}

      <TextInput
        style={styles.input}
        placeholder='Name'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}> 
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    logo: {
        marginBottom: 15,
        width: 72,
        height: 84
    },
    error: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 15,
        color: '#fff',
        width: '100%',
        textAlign: 'center',
    }
});
