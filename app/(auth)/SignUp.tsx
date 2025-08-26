import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title="Sign In" onPress={() => router.push("/(auth)/SignIn")} />
    </View>
  );
};

export default SignUp;
