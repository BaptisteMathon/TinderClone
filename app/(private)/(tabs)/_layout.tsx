import { Tabs, Redirect, useRouter, useRootNavigationState } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import useUserStore from '@/store/user.store';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const {isAuthentificated}: any = useUserStore();
  // const checkIfUserIsAlreadyAuthentificated = await getValueFor("isAuthentificated")
  const router = useRouter();
  const navigationRootState = useRootNavigationState();

  if(!isAuthentificated && navigationRootState.key !== undefined){
    // return <Redirect href="/(public)/(auth)/login"/>
    console.log(isAuthentificated)
    console.log(navigationRootState.key)    
    router.replace("/login")
  }

  if(isAuthentificated){
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="matchs"
          options={{
            title: 'Matchs',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profil"
          options={{
            title: 'Profil',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
      </Tabs>
    );
  }
}
