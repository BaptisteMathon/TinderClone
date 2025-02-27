import { create } from 'zustand'


const useUserStore = create((set) => ({
  user: null,
  isAuthentificated: false,
  setUser: (user: any) => set({user}),
  setIsAuthentificated: (isAuthentificated: boolean) => set({isAuthentificated})
}))

export default useUserStore