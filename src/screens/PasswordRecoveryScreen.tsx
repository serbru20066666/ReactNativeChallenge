import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthService from '../services/AuthService'; // Verify this path

type PasswordRecoveryScreenProps = {
  navigation: StackNavigationProp<any>;
};

const PasswordRecoveryScreen: React.FC<PasswordRecoveryScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = async () => {
    try {
      await AuthService.recoverPassword(email);
      Alert.alert('Recovery Email Sent', 'Please check your email for recovery instructions.');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Recovery Failed', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Recover Password" onPress={handleRecovery} />
    </View>
  );
};

export default PasswordRecoveryScreen;
