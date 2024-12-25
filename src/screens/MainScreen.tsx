import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavoritesScreen from './FavoritesScreen';
import ProfileScreen from './ProfileScreen';
import { MainTabParamList } from '../navigation/types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;