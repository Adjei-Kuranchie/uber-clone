import { SignedIn, useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.firstName}</Text>
        {/* <Text>Hello {user?.emailAddresses[0].emailAddress}</Text> */}
      </SignedIn>
    </View>
  );
}
