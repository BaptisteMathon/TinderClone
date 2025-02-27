import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query'
import { withDecay } from 'react-native-reanimated';


export default function HomeScreen() {

  // const profiles = [
  //   {
  //     id: 1,
  //     name: "Personne 1",
  //     age: 19,
  //     bio: "Bio de personne 1",
  //     image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="
  //   },
  //   {
  //     id: 2,
  //     name: "Personne 2",
  //     age: 25,
  //     bio: "Bio de personne 2",
  //     image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="      
  //   },
  //   {
  //     id: 3,
  //     name: "Personne 3",
  //     age: 23,
  //     bio: "Bio de personne 3",
  //     image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="      
  //   },
  //   {
  //     id: 4,
  //     name: "Personne 4",
  //     age: 24,
  //     bio: "Bio de personne 4",
  //     image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="      
  //   }
  // ]

  const fetchProfiles = async () => {
    const {data} = await axios.get('https://api-tinder-next.vercel.app/api/profiles');
    return data
  }

  const {data: profiles, isLoading, error} = useQuery({
    queryKey: ['profiles'],
    queryFn: fetchProfiles
  })

  if(isLoading) return <View style={styles.image2}>
    <Image source={require('@/assets/images/Tinder.png')} style={{width: 72, height: 84}}/>
  </View>
  if(error)return <Text>Erreur: {error.message}</Text>

  return (
    <View style={styles.main}>
      <Swiper
        cards={profiles || []}
        renderCard={(profile: any) => (
          <View style={styles.card}>
            <Image source={{uri: profile.image}} style={styles.image}/>
            <View style={styles.info}>
              <Text style={styles.name}>{profile.name}, {profile.age}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
            </View>
          </View>
        )}
        onSwipedLeft={() => console.log('Rejeté')}
        onSwipedRight={() => console.log('Accepté')}
        stackSize={2}
        backgroundColor="transparent"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
  },
  card: {
    backgroundColor: 'white', 
    borderRadius: 10, 
    // padding: 20, 
    alignItems: 'center',
    userSelect: 'none'
  },
  image: {
    width: 320, 
    height: 500, 
    borderRadius: 10, 
    // marginBottom: 10,
    userSelect: 'none'
  },
  image2: {
    width: '100%', 
    height: '100%',
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24, 
    fontWeight: 'bold',
    userSelect: 'none',
    color: '#fff'
  },
  bio: {
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 5,
    userSelect: 'none',
    color: '#fff'
  },
  info: {
    position: 'absolute',
    bottom: 5
  }
});
