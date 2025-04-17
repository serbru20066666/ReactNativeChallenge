import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthService from '../services/AuthService';

type RegistrationScreenProps = {
  navigation: StackNavigationProp<any>;
};

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Validation Failed', 'All fields are required.');
      return;
    }
    try {
      const response = await AuthService.register(firstName, lastName, email, password);
      Alert.alert('Registration Successful', `Welcome, ${firstName}!`, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } catch (error: any) {
      Alert.alert('Registration Failed', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;