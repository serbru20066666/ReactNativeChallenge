import React from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite'; // <-- ADD THIS
import LoginViewModel from '../viewmodels/LoginViewModel';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = async () => {
    if (!LoginViewModel.email || !LoginViewModel.password) {
      Alert.alert('Validation Failed', 'Email and password cannot be empty.');
      return;
    }
    try {
      const response = await LoginViewModel.login();
      Alert.alert('Login Successful', `Welcome back!`);
      navigation.navigate('Dashboard');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={LoginViewModel.email}
        onChangeText={LoginViewModel.setEmail}
      />
      <TextInput
        placeholder="Password"
        value={LoginViewModel.password}
        onChangeText={LoginViewModel.setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Registration')} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate('Password Recovery')} />
    </View>
  );
};

// 👉 Wrap the export with observer
export default observer(LoginScreen);
