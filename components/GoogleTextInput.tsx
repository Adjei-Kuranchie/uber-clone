import { GoogleInputProps } from "@/types/type";
import { Image, Text, View } from "react-native";

const GoogleTextInput = ({
  icon,
  initialLocation,
  textInputBackgroundColor,
  containerStyle,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-start relative z-50 rounded-2xl mb-5 p-4 ${containerStyle}`}
    >
      <Image source={icon} className="w-6 h-6 mr-4" />
      <Text className="text-general-200">Where do you want to go? </Text>
    </View>
  );
};
export default GoogleTextInput;
