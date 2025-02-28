import {useQuery} from '@tanstack/react-query'

interface Profile {
    name: string;
    age: number;
    bio: string;
    image: string;
}

export function getOwnProfile(){
    return useQuery({
        queryKey: ['profile'],
        queryFn: async (): Promise<Profile> => {
            const response = await fetch("https://api-tinder-next.vercel.app/api/me")

            if(!response.ok){
                throw new Error('Erreur lors du chargement du profil')
            }

            const data = await response.json()
            return data

        }
    })
}