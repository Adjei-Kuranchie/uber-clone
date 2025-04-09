import { GoogleInputProps } from "@/types/type";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
      <GooglePlacesAutocomplete
        placeholder="Where do you want ot go?"
        query={"Akim Oda"}
      />
    </View>
  );
};
export default GoogleTextInput;
