import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/theme';
import { DOA_DATA } from '../data/doa';
import { HADIST_DATA } from '../data/hadist';
import * as ImagePicker from 'expo-image-picker';
import { getProfileImage, saveProfileImage } from '../utils/storage';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [profileUri, setProfileUri] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      loadProfile();
    }, [])
  );

  const loadProfile = async () => {
    const uri = await getProfileImage();
    if (uri) setProfileUri(uri);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setProfileUri(result.assets[0].uri);
      await saveProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Assalamu'alaikum,</Text>
          <Text style={styles.title}>Selamat Datang</Text>
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.profileContainer}>
          {profileUri ? (
            <ImageBackground source={{ uri: profileUri }} style={styles.profileImage} imageStyle={{ borderRadius: 30 }} />
          ) : (
            <Ionicons name="person" size={30} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Ionicons name="book" size={32} color={COLORS.primary} />
          <Text style={styles.statNumber}>{DOA_DATA.length}</Text>
          <Text style={styles.statLabel}>Kumpulan Doa</Text>
        </View>
        <View style={styles.statBox}>
          <Ionicons name="library" size={32} color={COLORS.secondary} />
          <Text style={styles.statNumber}>{HADIST_DATA.length}</Text>
          <Text style={styles.statLabel}>Kumpulan Hadist</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Akses Cepat</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Doa')}>
          <View style={[styles.menuIcon, { backgroundColor: COLORS.primary + '15' }]}>
            <Ionicons name="book" size={28} color={COLORS.primary} />
          </View>
          <Text style={styles.menuText}>Doa Harian</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Hadist')}>
          <View style={[styles.menuIcon, { backgroundColor: COLORS.secondary + '15' }]}>
            <Ionicons name="library" size={28} color={COLORS.secondary} />
          </View>
          <Text style={styles.menuText}>Hadist Pilihan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Tasbih')}>
          <View style={[styles.menuIcon, { backgroundColor: '#3B82F615' }]}>
            <Ionicons name="finger-print" size={28} color="#3B82F6" />
          </View>
          <Text style={styles.menuText}>Tasbih Digital</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Favorit')}>
          <View style={[styles.menuIcon, { backgroundColor: '#EF444415' }]}>
            <Ionicons name="heart" size={28} color="#EF4444" />
          </View>
          <Text style={styles.menuText}>Favorit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    color: COLORS.white,
    fontSize: 18,
    opacity: 0.9,
  },
  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: -30,
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 10,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 15,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '47%',
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  menuIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
  },
});
