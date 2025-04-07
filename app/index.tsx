import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function Home() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  } else {
    return <Redirect href={"/(auth)/welcome"} />;
  }
}
