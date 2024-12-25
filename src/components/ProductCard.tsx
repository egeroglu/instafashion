import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../store/slices/favoritesSlice';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: product.image }} />
      <Card.Content>
        <Paragraph>{product.name}</Paragraph>
        <Paragraph>${product.price}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => dispatch(addToFavorites(product))}>
          Add to Favorites
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
});

export default ProductCard;