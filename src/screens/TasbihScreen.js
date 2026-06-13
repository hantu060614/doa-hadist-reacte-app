import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { COLORS } from '../utils/theme';

export default function TasbihScreen({ navigation }) {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    // Vibrate lightly on every 33rd count
    if ((count + 1) % 33 === 0) {
      Vibration.vibrate(100);
    }
  };

  const resetCount = () => {
    setCount(0);
    Vibration.vibrate(50);
  };

  return (
    <View style={styles.container}>
      <Header title="Tasbih Digital" showBack={true} navigation={navigation} />
      
      <View style={styles.content}>
        <View style={styles.displayBoard}>
          <Text style={styles.countText}>{count}</Text>
        </View>

        <TouchableOpacity 
          style={styles.mainButton} 
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <View style={styles.innerButton}>
            <Ionicons name="finger-print" size={80} color={COLORS.white} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={resetCount}>
          <Ionicons name="refresh" size={24} color={COLORS.white} />
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayBoard: {
    backgroundColor: COLORS.white,
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 20,
    marginBottom: 50,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.primary + '30',
  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  mainButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary + '30',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  innerButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resetText: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  }
});
