import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../utils/theme';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.pill,
              selectedCategory === category && styles.pillActive
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text
              style={[
                styles.pillText,
                selectedCategory === category && styles.pillTextActive
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 1,
  },
  pillActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  pillText: {
    color: COLORS.textLight,
    fontWeight: 'bold',
  },
  pillTextActive: {
    color: COLORS.white,
  },
});
