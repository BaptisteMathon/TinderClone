import {StyleSheet, View, Text, Image, FlatList } from 'react-native';
import {getProfiles} from '@/hooks/getProfiles';

export default function MatchsScreen() {

  const {data: profiles, isLoading, error} = getProfiles()

  // if(isLoading) return <View style={styles.image2}>
  if(isLoading) return <View>
      <Image source={require('@/assets/images/Tinder.png')} style={{width: 72, height: 84}}/>
    </View>

  if(error) return <Text>Erreur: {error.message}</Text>

  if(!profiles || profiles.length === 0) 
    return <Text>Aucun profil disponible</Text>  
  
  return (    
    <View style={styles.container}>            
      <View style={styles.messages}>
        <Text style={styles.messages2}>Mes messages</Text>
      </View>
      <FlatList
        data={profiles}
        renderItem={({ item }) => (
          <View style={styles.profileCard}>
            <Image source={{ uri: item.image }} style={styles.profileImage} />
            <Text style={styles.profileName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,    
    cursor: 'pointer'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messages: {
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0055',
    // borderRadius: 10,
  },
  messages2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});