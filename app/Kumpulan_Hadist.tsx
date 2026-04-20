import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const LIST_HADIST = [
  { id: "1", title: "Hadist Tentang Niat", path: "/hadist_niat" },
  { id: "2", title: "Hadist Kebersihan", path: "/hadist_kebersihan" },
  { id: "3", title: "Hadist Menuntut Ilmu", path: "/hadist_ilmu" },
];

export default function KumpulanHadistScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kumpulan Hadist</Text>
      </View>
      <FlatList
        data={LIST_HADIST}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.listItem} 
            onPress={() => item.path ? router.push(item.path as any) : null}
          >
            <View style={styles.itemLeft}>
              <View style={[styles.numberCircle, {backgroundColor: '#10B981'}]}>
                <Text style={styles.numberText}>{item.id}</Text>
              </View>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A" },
  header: { flexDirection: "row", alignItems: "center", backgroundColor: "#1E3A8A", paddingTop: 50, paddingBottom: 20, paddingHorizontal: 15 },
  backBtn: { marginRight: 15 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  listContent: { padding: 15 },
  listItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#1E293B", padding: 15, borderRadius: 10, marginBottom: 12 },
  itemLeft: { flexDirection: "row", alignItems: "center" },
  numberCircle: { width: 35, height: 35, borderRadius: 17.5, justifyContent: "center", alignItems: "center", marginRight: 15 },
  numberText: { color: "#fff", fontWeight: "bold" },
  itemTitle: { fontSize: 16, color: "#E2E8F0", fontWeight: "bold" },
});