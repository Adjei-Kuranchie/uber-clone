import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onSignUpPress = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate a sign-up process
    console.log("Sign Up Successful", form);
    alert("Sign Up Successful!");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[300px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[300px]" />
          <Text className="text-black text-2xl absolute bottom-5 left-5 font-JakartaBold">
            Create your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label={"Name"}
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label={"Email"}
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label={"Password"}
            placeholder="Enter your password"
            icon={icons.eyecross}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className={`mt-6`}
          />

          {/*Oauth*/}
          <OAuth />

          <Link
            href={`/sign-in`}
            className="text-lg text-center mt-10 text-general-200"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Login</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};
export default SignUp;
