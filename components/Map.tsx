import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  return (
    <View className="flex-1 rounded-2xl overflow-hidden">
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        tintColor="black"
        mapType="mutedStandard"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
