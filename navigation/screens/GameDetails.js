import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image , StyleSheet} from "react-native";

export default function GameDetails({ navigation, route }) {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    let { selectedGame } = route.params;
    setSelectedGame(selectedGame);
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            Go Back
          </TouchableOpacity>
        </View>

        <View style={styles.gamedetail}>
          <View style={styles.team}>
            <Image source={selectedGame?.imageOne} style={styles.img} />
            <Text style={styles.name}>{selectedGame?.nameOne}</Text>
          </View>
          <View style={styles.team}>
            <Image source={selectedGame?.imageTwo} style={styles.img} />
            <Text style={styles.name}>{selectedGame?.nameTwo}</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    },
    back: {
      marginTop: 20,
      fontSize: 20,
    },
    gamedetail: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 20,
      marginBottom: 250,
    },
    team: {
      margin: 20,
    },
    name: {
      fontSize: 17,
      color: '#000',
      fontWeight  : 'bold',
      fontStyle: 'normal',
      lineHeight: 17,
      marginTop: 15,
  },
  img: {
    width:  100,
    height: 100,
  },
});
