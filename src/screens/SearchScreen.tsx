import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';

const SearchScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    }, (response) => {
      if (response.assets && response.assets[0].uri) {
        setSelectedImage(response.assets[0].uri);
        // Here you would normally make an API call to your visual search endpoint
      }
    });
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      <Button mode="contained" onPress={handleImagePick}>
        Pick Image
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});

export default SearchScreen;