import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colors } from "../styles/colors";
import { FossilMarker } from "../components/molecules/FossilMarker";

const SAMPLE_FOSSILS = [
  {
    id: "1",
    title: "Fóssil de Dinossauro",
    type: "Osso",
    imageUrl: "https://via.placeholder.com/200",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  {
    id: "2",
    title: "Pegada Pré-Histórica",
    type: "Pegada",
    imageUrl: "https://via.placeholder.com/200",
    latitude: -23.5605,
    longitude: -46.6433,
  },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5505,
          longitude: -46.6333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {SAMPLE_FOSSILS.map((fossil) => (
          <Marker
            key={fossil.id}
            coordinate={{
              latitude: fossil.latitude,
              longitude: fossil.longitude,
            }}
          >
            <FossilMarker
              title={fossil.title}
              type={fossil.type}
              imageUrl={fossil.imageUrl}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
