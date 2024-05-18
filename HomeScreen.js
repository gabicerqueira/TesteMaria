import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App</Text>
      <Button
        title="Começar"
        onPress={() => navigation.navigate('MainTab')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
