import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Card, Paragraph } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Welcome to Style Hunt</Title>
      <Card style={styles.card}>
        <Card.Title title="Find Similar Products" />
        <Card.Content>
          <Paragraph>Upload a photo of any fashion item to find similar products.</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Save Favorites" />
        <Card.Content>
          <Paragraph>Save your favorite items to view them later.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeScreen;
