import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { COLORS } from '../utils/theme';

export default function TentangScreen() {
  return (
    <View style={styles.container}>
      <Header title="Tentang Aplikasi" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="book" size={50} color={COLORS.white} />
          </View>
          <Text style={styles.appName}>Doa & Hadist App</Text>
          <Text style={styles.version}>Versi 2.0.0 (UAS Edition)</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.desc}>
            Aplikasi ini dirancang sebagai panduan lengkap untuk membaca dan mempelajari berbagai doa harian serta hadist pilihan. Dilengkapi dengan fitur pencarian, filter kategori, Text-to-Speech, Tasbih Digital, dan penyimpanan favorit lokal.
          </Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="person-circle" size={24} color={COLORS.primary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Dikembangkan Oleh</Text>
              <Text style={styles.infoValue}>Hamami Hamzah (NIM: 12345678)</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="school" size={24} color={COLORS.primary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Institusi</Text>
              <Text style={styles.infoValue}>Politeknik LP3I Cirebon</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="code-slash" size={24} color={COLORS.primary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Mata Kuliah</Text>
              <Text style={styles.infoValue}>React Native (UAS)</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={24} color={COLORS.primary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Tahun Ajaran</Text>
              <Text style={styles.infoValue}>2025/2026</Text>
            </View>
          </View>

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
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.border,
    marginVertical: 20,
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoTextContainer: {
    marginLeft: 15,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
  }
});
