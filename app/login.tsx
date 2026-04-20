import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk mata password

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Gagal", "Username dan Password tidak boleh kosong!");
      return;
    }

    if (username === "user" && password === "user") {
      router.replace({ pathname: "/home", params: { username } });
    } else {
      Alert.alert("Akses Ditolak", "Username atau Password salah!");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* LOGO SECTION */}
        <View style={styles.logoSection}>
          <View style={styles.logoCircle}>
            <Ionicons name="book" size={60} color="#3B82F6" />
          </View>
          <Text style={styles.headerTitle}>Hadist & Doa</Text>
          <Text style={styles.subTitle}>Silakan masuk untuk melanjutkan</Text>
        </View>

        {/* FORM SECTION */}
        <View style={styles.card}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={20} color="#94A3B8" style={styles.iconInput} />
            <TextInput
              style={styles.input}
              placeholder="Masukkan username"
              placeholderTextColor="#64748B"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#94A3B8" style={styles.iconInput} />
            <TextInput
              style={styles.input}
              placeholder="Masukkan password"
              placeholderTextColor="#64748B"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity 
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={22} 
                color="#94A3B8" 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>MASUK</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" style={{marginLeft: 10}} />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>© 2026 LP3I Cirebon - Hamami Hamzah</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 25,
  },
  logoSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#3B82F6",
    marginBottom: 20,
    elevation: 10,
    shadowColor: "#3B82F6",
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  headerTitle: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    color: "#94A3B8",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 25,
    borderRadius: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#E2E8F0",
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  iconInput: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 55,
    color: "#fff",
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
  },
  button: {
    backgroundColor: "#3B82F6",
    height: 55,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    elevation: 5,
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  footerText: {
    textAlign: "center",
    color: "#475569",
    marginTop: 40,
    fontSize: 12,
  }
});