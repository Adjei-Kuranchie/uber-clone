import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading indicator while auth state is loading
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  } else {
    return <Redirect href={"/(auth)/welcome"} />;
  }
}
