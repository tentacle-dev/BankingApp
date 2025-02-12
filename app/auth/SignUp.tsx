import React, { useEffect, useState } from "react";
import { Stack } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { CheckSquare, Square } from "lucide-react-native";
import CountryPicker, { Country, CountryCode } from "react-native-country-picker-modal";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneno, setPhoneno] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [callingCode, setCallingCode] = useState<string>("1"); 

  useEffect(() => {
    setIsDisabled(!(email.trim() && password.trim() && phoneno.trim() && checked));
  }, [email, password, phoneno, checked]);

  const handleSignIn = (): void => {
    Alert.alert("Sign Up Successful", `Welcome, ${email}!`);
    setEmail("");
    setPassword("");
    setPhoneno("");
    setChecked(false);
    setCountryCode("US"); 
    setCallingCode("1");
  };

  return (
    <>
    <Stack.Screen options={{ title: 'Sign Up' }} />
    <View className="flex-1" style={{backgroundColor: "#0b2adb"}}>
    <View className="bg-white flex-1  rounded-t-3xl p-6 shadow-lg" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
      <Text className="text-4xl font-bold text-blue-800 pt-4">Welcome to us,</Text>
      <Text className="pl-1 text-lg mb-3">Hello there, create New account</Text>
      <Image source={require("../../assets/images/signup.png")} className="w-50 h-50 mx-auto"/>

      <TextInput
        className="w-full h-15 rounded-2xl px-4 mb-4 border border-gray-700 text-black"
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

<View className="flex-row items-center border border-gray-700 rounded-2xl px-4 mb-4">
            {/* Country Picker */}
            <CountryPicker
              countryCode={countryCode || "US"}
              withFlag
              withCallingCode
              withFilter
              withModal
              onSelect={(country: Country) => {
                setCountryCode(country.cca2);
                setCallingCode(country.callingCode[0]);
              }}
              visible={false}
            />
            <Text className="text-lg text-gray-800 ml-2">+{callingCode}</Text>

            <TextInput
              className="flex-1 h-12 pl-2 text-gray-800"
              placeholder="Enter phone number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={phoneno}
              onChangeText={setPhoneno}
            />
          </View>

<TextInput
        className="w-full h-15 text-black rounded-2xl px-4 mb-5 border border-gray-700"
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      

      <View className="flex-row mr-4 items-center mb-5">
      <TouchableOpacity onPress={() => setChecked(!checked)}>
        {checked ? (
          <CheckSquare size={35} color="#3B82F6" /> // Checked icon
        ) : (
          <Square size={35} color="grey" /> // Unchecked icon
        )}
      </TouchableOpacity>

      <Text className="text-gray-800 ml-2 mr-4 text-md">
        By creating an account, you agree to our{" "}
        <Text className="text-blue-600 font-bold" onPress={() => alert("Redirect to Terms & Conditions")}>
          Terms and Conditions
        </Text>
      </Text>
    </View>
    <TouchableOpacity
        className = {`w-full h-12 rounded-2xl justify-center items-center mb-2 `}
        style={{backgroundColor:isDisabled?'gray' : "#0b2adb"}}
        onPress={handleSignIn}
        disabled={isDisabled} 
      >
        <Text className="text-white font-semibold text-lg">Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
    
    </>
  );
};

export default SignUp;
