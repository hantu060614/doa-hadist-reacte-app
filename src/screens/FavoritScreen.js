import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import Card from '../components/Card';
import { getFavorites } from '../utils/storage';
import { COLORS } from '../utils/theme';

export default function FavoritScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  return (
    <View style={styles.container}>
      <Header title="Favorit Saya" />
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Belum ada Doa atau Hadist yang ditambahkan ke Favorit.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Card 
              item={item} 
              onPress={() => navigation.navigate('Detail', { item, type: item.arab.includes('الل') ? 'Doa' : 'Hadist' })} 
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 24,
  }
});
