import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromFavorites } from '../store/slices/favoritesSlice';
import { Product } from '../types';

const FavoritesScreen = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  const renderItem = ({ item }: { item: Product }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>${item.price}</Paragraph>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => dispatch(removeFromFavorites(item.id))}>
          Remove from Favorites
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default FavoritesScreen;
