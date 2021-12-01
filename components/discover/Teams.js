import * as React from "react";
import { View, Text, Image, ScrollView, FlatList ,StyleSheet} from "react-native";
const DATA = [
  {
    id: "1",
    name: "Boston Celtics",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/334.svg",
  },
  {
    id: "2",
    name: "Brooklyn Nets",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/349.svg",
  },
  {
    id: "3",
    name: "New York Knicks",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/350.svg",
  },
  {
    id: "4",
    name: "Philadelphia 76ers",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/352.svg",
  },
  {
    id: "5",
    name: "Toronto Raptors",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/358.svg",
  },
  {
    id: "6",
    name: "Chicago Bulls",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/336.svg",
  },
  {
    id: "7",
    name: "Cleveland Cavaliers",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/337.svg",
  },
  {
    id: "8",
    name: "Detroit Pistons",
    image: "https://sports.cbsimg.net/fly/images/nba/logos/team/340.svg",
  },
];

export default function Teams() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}>Teams</Text>
        <Text style={styles.text}>View All</Text>
      </View>

      <ScrollView horizontal={true} contentContainerStyle={styles.teams}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.team} >
            <Image source={item.image} style={styles.img} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titletext: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "Poppins",
  },
  text: {
    fontSize: 14,
    margin: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Poppins",
  },
  teams: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  team: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 10,
  },

  img: {
    width: 60,
    height: 65,
    borderRadius: 20,
    margin: 10,
  },
});
