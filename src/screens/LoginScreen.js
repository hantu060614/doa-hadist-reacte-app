import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/theme';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Autentikasi sesuai permintaan pengguna (bisa menggunakan hamz / 123 atau user / user)
    if ((username === 'hamz' && password === '123') || (username === 'user' && password === 'user')) {
      // Jika berhasil login, reset history dan navigasi ke halaman utama
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } else if (username === '' || password === '') {
      Alert.alert('Input Kosong', 'Username dan Password tidak boleh kosong!');
    } else {
      Alert.alert('Gagal Login', 'Username atau Password salah!');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header / Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.iconCircle}>
            <Ionicons name="book" size={60} color={COLORS.white} />
          </View>
          <Text style={styles.appName}>Doa & Hadist</Text>
          <Text style={styles.subtitle}>Masuk untuk melanjutkan</Text>
        </View>

        {/* Form Section */}
        <View style={styles.card}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color={COLORS.textLight} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Masukkan username"
              placeholderTextColor={COLORS.textLight}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color={COLORS.textLight} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Masukkan password"
              placeholderTextColor={COLORS.textLight}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={22} 
                color={COLORS.textLight} 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.loginText}>MASUK</Text>
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} style={{ marginLeft: 10 }} />
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => Alert.alert('Info', 'Fitur Daftar sedang dalam tahap pengembangan.')}>
              <Text style={styles.registerText}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.copyright}>© 2026 LP3I Cirebon - Hamami Hamzah</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginTop: 5,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 25,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 55,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  footerText: {
    color: COLORS.textLight,
    fontSize: 14,
  },
  registerText: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  copyright: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginTop: 30,
    fontSize: 12,
  }
});
