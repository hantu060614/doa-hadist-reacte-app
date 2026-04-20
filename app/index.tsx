import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Ionicons name="book" size={60} color="#3B82F6" />
      </View>
      <Text style={styles.title}>Hadist & Doa</Text>
      <Text style={styles.subtitle}>Memudahkan Ibadah Harian Anda</Text>
      <ActivityIndicator size="large" color="#3B82F6" style={{ marginTop: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F172A' },
  logoCircle: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    backgroundColor: '#1E293B', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20, 
    borderWidth: 2, 
    borderColor: '#3B82F6',
    elevation: 10,
    shadowColor: "#3B82F6",
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#F8FAFC' },
  subtitle: { fontSize: 16, color: '#94A3B8', marginTop: 8 },
});