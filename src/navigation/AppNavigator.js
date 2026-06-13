import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/theme';

import HomeScreen from '../screens/HomeScreen';
import DoaScreen from '../screens/DoaScreen';
import HadistScreen from '../screens/HadistScreen';
import FavoritScreen from '../screens/FavoritScreen';
import TentangScreen from '../screens/TentangScreen';
import TasbihScreen from '../screens/TasbihScreen';
import DetailScreen from '../screens/DetailScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Beranda') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Doa') iconName = focused ? 'book' : 'book-outline';
          else if (route.name === 'Hadist') iconName = focused ? 'library' : 'library-outline';
          else if (route.name === 'Favorit') iconName = focused ? 'heart' : 'heart-outline';
          else if (route.name === 'Tentang') iconName = focused ? 'information-circle' : 'information-circle-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Doa" component={DoaScreen} />
      <Tab.Screen name="Hadist" component={HadistScreen} />
      <Tab.Screen name="Favorit" component={FavoritScreen} />
      <Tab.Screen name="Tentang" component={TentangScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Tasbih" component={TasbihScreen} />
    </Stack.Navigator>
  );
}
