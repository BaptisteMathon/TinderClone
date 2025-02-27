import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default function HomeScreen() {

  const profiles = [
    {
      id: 1,
      name: "Personne 1",
      age: 19,
      bio: "Bio de personne 1",
      image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="
    },
    {
      id: 2,
      name: "Personne 2",
      age: 25,
      bio: "Bio de personne 2",
      image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="      
    },
    {
      id: 3,
      name: "Personne 3",
      age: 23,
      bio: "Bio de personne 3",
      image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="      
    },
    {
      id: 4,
      name: "Personne 4",
      age: 24,
      bio: "Bio de personne 4",
      image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="      
    }
  ]

  return (
    <View style={styles.main}>
      <Swiper
        cards={profiles || []}
        renderCard={(profile: any) => (
          <View style={styles.card}>
            <Image source={{uri: profile.image}} style={styles.image}/>
            <Text style={styles.name}>{profile.name}, {profile.age}</Text>
            <Text style={styles.bio}>{profile.bio}</Text>
          </View>
        )}
        onSwipedLeft={() => console.log('Rejeté')}
        onSwipedRight={() => console.log('Accepté')}
        stackSize={2}
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
    padding: 20, 
    alignItems: 'center',
    userSelect: 'none'
  },
  image: {
    width: 300, 
    height: 400, 
    borderRadius: 10, 
    marginBottom: 10,
    userSelect: 'none'
  },
  name: {
    fontSize: 24, 
    fontWeight: 'bold',
    userSelect: 'none'
  },
  bio: {
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 5,
    userSelect: 'none'
  }
});
