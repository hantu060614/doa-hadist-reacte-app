import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';
import Header from '../components/Header';
import { COLORS } from '../utils/theme';
import { isFavorite, saveFavorite, removeFavorite } from '../utils/storage';

export default function DetailScreen({ route, navigation }) {
  const { item, type } = route.params;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, []);

  const checkFavorite = async () => {
    const status = await isFavorite(item.id);
    setFavorite(status);
  };

  const toggleFavorite = async () => {
    if (favorite) {
      await removeFavorite(item.id);
      setFavorite(false);
    } else {
      await saveFavorite(item);
      setFavorite(true);
    }
  };

  const copyToClipboard = async () => {
    const textToCopy = `${item.title}\n\n${item.arab}\n\n${item.latin}\n\n${item.arti}${item.sumber ? `\n\n${item.sumber}` : ''}`;
    await Clipboard.setStringAsync(textToCopy);
    Alert.alert('Berhasil', 'Teks telah disalin ke clipboard!');
  };

  const speakText = () => {
    // Membaca tulisan latin (atau arti) menggunakan TTS
    Speech.speak(item.arti, { language: 'id-ID' });
  };

  return (
    <View style={styles.container}>
      <Header title={`Detail ${type}`} showBack={true} navigation={navigation} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.categoryBadge}>{item.category}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={speakText} style={styles.actionBtn}>
                <Ionicons name="volume-high" size={24} color={COLORS.primary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={copyToClipboard} style={styles.actionBtn}>
                <Ionicons name="copy-outline" size={24} color={COLORS.primary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFavorite} style={styles.actionBtn}>
                <Ionicons name={favorite ? "heart" : "heart-outline"} size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.title}>{item.title}</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.arab}>{item.arab}</Text>
          <Text style={styles.latin}>{item.latin}</Text>
          <Text style={styles.arti}>{item.arti}</Text>
          
          {item.sumber && (
            <Text style={styles.sumber}>{item.sumber}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 25,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryBadge: {
    backgroundColor: COLORS.secondary + '20',
    color: COLORS.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
  },
  actionBtn: {
    marginLeft: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 25,
  },
  arab: {
    fontSize: 32,
    color: COLORS.text,
    textAlign: 'right',
    marginBottom: 20,
    lineHeight: 50,
  },
  latin: {
    fontSize: 16,
    fontStyle: 'italic',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  arti: {
    fontSize: 15,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 24,
  },
  sumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.secondary,
    textAlign: 'center',
    marginTop: 20,
  }
});
