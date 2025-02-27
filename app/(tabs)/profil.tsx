import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';



export default function ProfilScreen() {

    const profiles = {
      id: 1,
      name: "Emma",
      age: 28,
      bio: "Biographie de Emma",
      image: "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g="
    }

    return (
    <View>
        <Text>Mon Profil</Text>
          <Image
            source={{ uri: profiles.image}}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        <Text>{profiles.name}</Text>
        <Text>{profiles.age}</Text>

        <View>
            <Text>À propos</Text>
            <Text>{profiles.bio}</Text>
            <TouchableOpacity>Modifier le profil</TouchableOpacity>
        </View>
    </View>
  );
}

