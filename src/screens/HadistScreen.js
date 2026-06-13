import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Card from '../components/Card';
import { HADIST_DATA, HADIST_CATEGORIES } from '../data/hadist';
import { COLORS } from '../utils/theme';

export default function HadistScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua');

  const filteredData = HADIST_DATA.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'Semua' || item.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <View style={styles.container}>
      <Header title="Hadist Pilihan" />
      <SearchBar 
        value={search} 
        onChangeText={setSearch} 
        placeholder="Cari hadist..." 
      />
      <CategoryFilter 
        categories={HADIST_CATEGORIES} 
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
            onPress={() => navigation.navigate('Detail', { item, type: 'Hadist' })} 
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
