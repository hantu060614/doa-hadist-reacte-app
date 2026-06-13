import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Card from '../components/Card';
import { DOA_DATA, DOA_CATEGORIES } from '../data/doa';
import { COLORS } from '../utils/theme';

export default function DoaScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua');

  const filteredData = DOA_DATA.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'Semua' || item.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <View style={styles.container}>
      <Header title="Doa Harian" />
      <SearchBar 
        value={search} 
        onChangeText={setSearch} 
        placeholder="Cari doa..." 
      />
      <CategoryFilter 
        categories={DOA_CATEGORIES} 
        selectedCategory={category} 
        onSelectCategory={setCategory} 
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card 
            item={item} 
            onPress={() => navigation.navigate('Detail', { item, type: 'Doa' })} 
          />
        )}
      />
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
});
