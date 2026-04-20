import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DoaSapuJagatScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doa Sapu Jagat</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.arab}>رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</Text>
          <Text style={styles.latin}>"Rabbana aatina fiddunya hasanah wa fil akhirati hasanah wa qina 'adzaaban naar."</Text>
          <Text style={styles.arti}>Artinya: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka."</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A" },
  header: { flexDirection: "row", alignItems: "center", backgroundColor: "#1E3A8A", paddingTop: 50, paddingBottom: 20, paddingHorizontal: 15 },
  backBtn: { marginRight: 15 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  content: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  card: { backgroundColor: "#1E293B", padding: 30, borderRadius: 20, width: "100%", elevation: 5 },
  arab: { fontSize: 32, textAlign: "center", marginBottom: 20, fontWeight: "bold", color: "#60A5FA", lineHeight: 50 },
  latin: { fontSize: 16, fontStyle: "italic", textAlign: "center", color: "#94A3B8", marginBottom: 15 },
  arti: { fontSize: 14, textAlign: "center", color: "#E2E8F0", lineHeight: 24 },
});