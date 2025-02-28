import {useQuery} from '@tanstack/react-query';

interface Profile {
    name: string;
    age: number;
    bio: string;
    image: string;
}

export function getProfiles(){
    return useQuery({
        queryKey: ['profiles'],
        queryFn: async (): Promise<Profile[]> => {
            const response = await fetch("https://api-tinder-next.vercel.app/api/profiles")
        
            if(!response.ok){
                throw new Error('Erreur lors du chargement des profils');
            }

            const data = await response.json()
            console.log("Réponse API : ", data)
            return data

        }
    })
}