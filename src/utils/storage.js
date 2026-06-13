import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites_data';

export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading favorites:', e);
    return [];
  }
};

export const saveFavorite = async (item) => {
  try {
    const currentFavorites = await getFavorites();
    const isExist = currentFavorites.some((fav) => fav.id === item.id);
    
    if (!isExist) {
      const newFavorites = [...currentFavorites, item];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    }
    return currentFavorites;
  } catch (e) {
    console.error('Error saving favorite:', e);
  }
};

export const removeFavorite = async (id) => {
  try {
    const currentFavorites = await getFavorites();
    const newFavorites = currentFavorites.filter((fav) => fav.id !== id);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    return newFavorites;
  } catch (e) {
    console.error('Error removing favorite:', e);
  }
};

export const isFavorite = async (id) => {
  try {
    const currentFavorites = await getFavorites();
    return currentFavorites.some((fav) => fav.id === id);
  } catch (e) {
    return false;
  }
};

const PROFILE_KEY = '@profile_image';

export const getProfileImage = async () => {
  try {
    const uri = await AsyncStorage.getItem(PROFILE_KEY);
    return uri;
  } catch (e) {
    console.error('Error reading profile image:', e);
    return null;
  }
};

export const saveProfileImage = async (uri) => {
  try {
    await AsyncStorage.setItem(PROFILE_KEY, uri);
    return true;
  } catch (e) {
    console.error('Error saving profile image:', e);
    return false;
  }
};
