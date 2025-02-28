// import { create } from 'zustand'


// const useUserStore = create((set) => ({
//   user: null,
//   isAuthentificated: false,
//   setUser: (user: any) => set({user}),
//   setIsAuthentificated: (isAuthentificated: boolean) => set({isAuthentificated})
// }))

// export default useUserStore


import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserState {
  user: { email: string } | null;
  isAuthentificated: boolean;
  setUser: (user: { email: string }) => void;
  setIsAuthentificated: (isAuthentificated: boolean) => void;
  logout: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthentificated: false,
      setUser: (user) => set({ user, isAuthentificated: true }),
      setIsAuthentificated: (isAuthentificated) => set({ isAuthentificated }),
      logout: () => {
        AsyncStorage.removeItem('user-storage'); 
        set({ user: null, isAuthentificated: false });
      },
      // logout: () => set({ user: null, isAuthentificated: false }),
    }),
    {
      name: 'user-storage', 
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUserStore;
