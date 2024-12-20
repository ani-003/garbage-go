import React from 'react';
import { View, StyleSheet } from 'react-native';

const RandomColorBoxes = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#8B00FF'];

  // Randomly select a color from the colors array
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: randomColor() }]} />
      <View style={[styles.box, { backgroundColor: randomColor() }]} />
      <View style={[styles.box, { backgroundColor: randomColor() }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 20,
    height: '100%',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 10,
    margin: 10,
  },
});

export default RandomColorBoxes;
