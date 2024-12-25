import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Profile</Title>
      <List.Section>
        <List.Item
          title="Username"
          description={user?.username}
          left={props => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="Email"
          description={user?.email}
          left={props => <List.Icon {...props} icon="email" />}
        />
      </List.Section>
      <Button mode="contained" onPress={handleLogout} style={styles.button}>
        Logout
      </Button>
    </View>
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
  button: {
    marginTop: 20,
  },
});

export default ProfileScreen;