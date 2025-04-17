import React from 'react';
import { View, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type DashboardScreenProps = {
  navigation: StackNavigationProp<any>;
};

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const handleLogout = () => {
    // Logic to clear user session or token can be added here
    Alert.alert('Logged Out', 'You have been logged out.');
    navigation.navigate('Login');
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default DashboardScreen;
