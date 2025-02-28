import { getOwnProfile } from '@/hooks/getOwnProfile';
import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import useUserStore from '@/store/user.store';
import { useRouter } from 'expo-router';



export default function ProfilScreen() {

    // const profiles = {
    //   id: 1,
    //   name: "Emma",
    //   age: 28,
    //   bio: "Biographie de Emma",
    //   image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="
    // }

    // const fetchUsers = async () => {
    //   const {data} = await axios.get('https://api-tinder-next.vercel.app/api/me');
    //   return data
    // }

    // const {data: users, isLoading, error} = useQuery({
    //   queryKey: ['users'],
    //   queryFn: fetchUsers
    // })

    const {data: profile, isLoading, error} = getOwnProfile()
    const router = useRouter();
    const {logout} = useUserStore();

    if(isLoading) return <View style={styles.image}>
      <Image source={require('@/assets/images/Tinder.png')} style={{width: 72, height: 84}}/>
    </View>
    if(error)return <Text>Erreur: {error.message}</Text>

    const handleLogout = () => {
      logout()
      router.replace('/login')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Mon Profil</Text>
          <Image
            source={{ uri: profile?.image}}
            style={styles.profileImage}
          />
        <Text style={styles.name}>{profile?.name}, {profile?.age} ans</Text>

        <View style={styles.aboutSection}>
            <Text style={styles.aboutSection}>A propos :</Text>
            <Text style={styles.bio}>{profile?.bio}</Text>            
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Modifier le profil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} style={styles.logout}>
          <Image
            source={require('@/assets/images/logout.jpg')}   
            style={styles.logout2}         
          />
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutSection: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%', 
    height: '100%',
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    position: 'absolute',
    top: 40,
    right: 5
  },
  logout2: {
    width: 50,
    height: 50,
    borderRadius: 50
  }
});