import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen 
        name="home" 
        options={{ 
          headerShown: true, 
          title: 'Main Menu',
          headerStyle: { backgroundColor: '#1E3A8A' },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen name="kumpulan_doa" />
      <Stack.Screen name="kumpulan_hadist" />
      <Stack.Screen name="doa_tidur" />
      <Stack.Screen name="doa_bangun_tidur" />
      <Stack.Screen name="doa_sebelum_makan" />
      <Stack.Screen name="doa_setelah_makan" />
      <Stack.Screen name="doa_sapu_jagat" />
      <Stack.Screen name="hadist_niat" />
      <Stack.Screen name="hadist_ilmu" />
      <Stack.Screen name="hadist_kebersihan" />
      <Stack.Screen name="tentang" />
    </Stack>
  );
}