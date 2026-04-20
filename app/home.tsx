import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function HomeScreen() {
  const { username } = useLocalSearchParams<{ username: string }>();

  return (
    <View style={styles.container}>
      {/* Header Profile */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.welcomeText}>Assalamu'alaikum,</Text>
            <Text style={styles.username}>{username || 'Hamami'}</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/tentang')} style={styles.avatarWrapper} activeOpacity={0.8}>
            <Image 
              source={require('../assets/images/profil.jpg')} 
              style={{ width: '100%', height: '100%', borderRadius: 25 }} 
            />
          </TouchableOpacity>
        </View>

        {/* Motivational / Greeting Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerIconWrapper}>
            <Ionicons name="sunny" size={30} color="#FBBF24" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Semoga Harimu Berkah</Text>
            <Text style={styles.bannerSubtitle}>Awali aktivitasmu dengan doa dan niat yang kuat.</Text>
          </View>
        </View>
      </View>

      {/* Main Grid Options */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pilihan Menu</Text>
        </View>

        <View style={styles.grid}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/Kumpulan_Hadist')} activeOpacity={0.8}>
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
              <Ionicons name="book" size={28} color="#3B82F6" />
            </View>
            <Text style={styles.menuText}>Kumpulan Hadist</Text>
            <Text style={styles.menuDesc}>Baca hadist pilihan</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/Kumpulan_doa')} activeOpacity={0.8}>
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
              <Ionicons name="moon" size={28} color="#10B981" />
            </View>
            <Text style={styles.menuText}>Kumpulan Doa</Text>
            <Text style={styles.menuDesc}>Doa sehari-hari</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/tentang')} activeOpacity={0.8}>
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(139, 92, 246, 0.15)' }]}>
              <Ionicons name="information-circle" size={28} color="#8B5CF6" />
            </View>
            <Text style={styles.menuText}>Tentang Aplikasi</Text>
            <Text style={styles.menuDesc}>Informasi pembuat</Text>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity style={styles.menuCard} onPress={() => router.replace('/login')} activeOpacity={0.8}>
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(239, 68, 68, 0.15)' }]}>
              <Ionicons name="log-out" size={28} color="#EF4444" />
            </View>
            <Text style={styles.menuText}>Logout</Text>
            <Text style={styles.menuDesc}>Keluar dari akun</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0F172A' 
  },
  header: { 
    backgroundColor: '#1E293B', 
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: { 
    color: '#94A3B8', 
    fontSize: 16,
    fontWeight: '500'
  },
  username: { 
    color: '#F8FAFC', 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.4)',
    overflow: 'hidden',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    marginTop: 25,
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  bannerIconWrapper: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 18,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    marginBottom: 15,
    marginTop: 5,
  },
  sectionTitle: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
  },
  menuCard: { 
    width: '48%', 
    backgroundColor: '#1E293B', 
    padding: 20, 
    borderRadius: 20, 
    alignItems: 'center', 
    marginBottom: 15, 
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  iconContainer: { 
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuText: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#F8FAFC',
    marginBottom: 4,
  },
  menuDesc: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  }
});