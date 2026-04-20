import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function TentangScreen() {
const router = useRouter();

return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
<Ionicons name="arrow-back" size={24} color="#fff" />
</TouchableOpacity>
<Text style={styles.headerTitle}>Profil Pengembang</Text>
</View>

<ScrollView contentContainerStyle={styles.scrollContent}>
<View style={styles.profileCard}>
<View style={styles.imageContainer}>
{/* GANTI NAMA FILE DI BAWAH: Ubah 'react-logo.png' menjadi nama foto Anda (pisahkan di folder assets/images, misalnya 'foto_saya.jpg') */}
<Image 
source={require('../assets/images/profil.jpg')} 
style={styles.profileImage} 
/>
<View style={styles.statusBadge} />
</View>

<Text style={styles.name}>Hamami Hamzah</Text>
<Text style={styles.codename}>@HamZzz</Text>
<View style={styles.divider} />

<View style={styles.infoSection}>
<View style={styles.infoRow}>
<Ionicons name="school-outline" size={20} color="#3B82F6" />
<View style={styles.infoTextWrapper}>
<Text style={styles.infoLabel}>Pendidikan</Text>
<Text style={styles.infoValue}>Informatika Komputer - LP3I Cirebon</Text>
</View>
</View>

<View style={styles.infoRow}>
<Ionicons name="shield-checkmark-outline" size={20} color="#3B82F6" />
<View style={styles.infoTextWrapper}>
<Text style={styles.infoLabel}>Fokus Keahlian</Text>
<Text style={styles.infoValue}>FullStak Developer & CyberSecurity Enthusiast </Text>
</View>
</View>

<View style={styles.infoRow}>
<Ionicons name="code-working-outline" size={20} color="#3B82F6" />
<View style={styles.infoTextWrapper}>
<Text style={styles.infoLabel}>Teknologi</Text>
<Text style={styles.infoValue}>React Native, TypeScript, Node.js</Text>
</View>
</View>

<View style={styles.infoRow}>
<Ionicons name="location-outline" size={20} color="#3B82F6" />
<View style={styles.infoTextWrapper}>
<Text style={styles.infoLabel}>Lokasi</Text>
<Text style={styles.infoValue}>Cirebon, Jawa Barat</Text>
</View>
</View>
</View>
</View>

<View style={styles.quoteCard}>
<Ionicons name="quote" size={20} color="#fff" />
<Text style={styles.quoteText}>
"Keamanan bukan tentang ketiadaan ancaman, tapi tentang kemampuan untuk bertahan."
</Text>
</View>

<Text style={styles.version}>App Version 1.0.0 (UTS Project)</Text>
</ScrollView>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: "#0F172A" },
header: { 
flexDirection: "row", 
alignItems: "center", 
backgroundColor: "#1E3A8A", 
paddingTop: 50, 
paddingBottom: 20, 
paddingHorizontal: 20,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
},
backBtn: { marginRight: 15 },
headerTitle: { fontSize: 20, fontWeight: "bold", color: "#fff" },
scrollContent: { padding: 20, alignItems: "center" },
profileCard: { 
backgroundColor: "#1E293B", 
width: "100%", 
borderRadius: 25, 
padding: 25, 
alignItems: "center",
elevation: 10,
shadowColor: "#3B82F6",
shadowOpacity: 0.2,
shadowRadius: 10,
},
imageContainer: {
position: "relative",
marginBottom: 15,
},
profileImage: { 
width: 120, 
height: 120, 
borderRadius: 60, 
borderWidth: 3, 
borderColor: "#3B82F6" 
},
statusBadge: {
position: "absolute",
bottom: 5,
right: 10,
width: 20,
height: 20,
borderRadius: 10,
backgroundColor: "#22C55E",
borderWidth: 3,
borderColor: "#1E293B",
},
name: { fontSize: 24, fontWeight: "bold", color: "#F8FAFC" },
codename: { fontSize: 16, color: "#3B82F6", fontWeight: "600", marginBottom: 15 },
divider: { 
width: "100%", 
height: 1, 
backgroundColor: "#334155", 
marginBottom: 20 
},
infoSection: { width: "100%" },
infoRow: { 
flexDirection: "row", 
alignItems: "center", 
marginBottom: 18 
},
infoTextWrapper: { marginLeft: 15 },
infoLabel: { fontSize: 12, color: "#94A3B8", textTransform: "uppercase" },
infoValue: { fontSize: 15, color: "#E2E8F0", fontWeight: "500" },
quoteCard: {
backgroundColor: "#3B82F6",
padding: 20,
borderRadius: 20,
marginTop: 20,
width: "100%",
flexDirection: "row",
alignItems: "center",
},
quoteText: {
flex: 1,
color: "#fff",
fontStyle: "italic",
marginLeft: 10,
fontSize: 14,
lineHeight: 22,
},
version: { marginTop: 30, color: "#475569", fontSize: 12 },
});