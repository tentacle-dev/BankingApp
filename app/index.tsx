import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StatusBar } from "react-native";
import { useRouter } from "expo-router";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSignIn = (): void => {
    if (email && password) {
      router.push("/auth/SignUp")
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center p-6">
      <StatusBar barStyle="light-content" />
      <Text className="text-3xl font-bold text-white mb-8">Sign In</Text>

      <TextInput
        className="w-full h-12 bg-gray-800 text-white rounded-lg px-4 mb-4 border border-gray-700"
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full h-12 bg-gray-800 text-white rounded-lg px-4 mb-4 border border-gray-700"
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="w-full h-12 bg-green-600 rounded-lg justify-center items-center mb-2"
        onPress={handleSignIn}
      >
        <Text className="text-white font-semibold text-lg">Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Reset link sent!")}>
        <Text className="text-green-500 underline text-sm mt-2">Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
