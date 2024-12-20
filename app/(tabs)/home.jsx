import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import imagePaths from '../../constants/images'; // Assuming you have the logo stored in your imagePaths
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  const router = useRouter();
  const [greeting, setGreeting] = useState('');
  const [user, setUser] = useState({
    firstName: 'Akash',
    garbagePicked: 25,
    garbageRecycled: 15,
  });

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (

    <SafeAreaView>
      <ScrollView style={styles.container}>

        <View className="mb-8">
          <Image
            source={imagePaths.glogo}
          />
        </View>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>
            {greeting}, {user.firstName}!
          </Text>
<Text className="text-base font-lato"> Ready for cleanup?  </Text>
          

        </View>




        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.recentButton]}
            onPress={() => router.push('/recent-uploads')}>
            <FontAwesome name="upload" size={24} color="white" />
            <Text style={styles.buttonText}>Recent Uploads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.trackButton]}
            onPress={() => router.push('/track-garbage-collector')}>
            <FontAwesome name="map-marker" size={24} color="white" />
            <Text style={styles.buttonText}>Track Garbage Collector</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>This Week's Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.garbagePicked}</Text>
              <Text style={styles.statLabel}>Picked</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.garbageRecycled}</Text>
              <Text style={styles.statLabel}>Recycled</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Pickups Button */}
        <TouchableOpacity
          style={styles.upcomingButton}
          onPress={() => router.push('/upcoming-pickups')}>
          <Text style={styles.upcomingButtonText}>Upcoming Pickups</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },


  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  greetingContainer: {
    marginBottom: 60,
  },
  greetingText: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  button: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  recentButton: {
    backgroundColor: '#FF9800',
  },
  trackButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    marginTop: 5,
  },
  statsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 60,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  statsTitle: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: '#333',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontFamily: 'Lato-Bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: '#888',
  },
  upcomingButton: {
    backgroundColor: '#FF5722',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  upcomingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});

export default HomePage;
