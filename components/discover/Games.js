import * as React from "react";
import { View, Text, Image, ScrollView, FlatList, Touchable,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const DATA = [
  {
    id: "1",
    nameOne: "Brooklyn Nets",
    nameTwo: "Boston Celtics",
    imageOne: "https://sports.cbsimg.net/fly/images/nba/logos/team/349.svg",
    imageTwo: "https://sports.cbsimg.net/fly/images/nba/logos/team/334.svg",
  },
  {
    id: "2",
    nameOne: "New York Knicks",
    nameTwo: "Philadelphia 76ers",
    imageOne: "https://sports.cbsimg.net/fly/images/nba/logos/team/350.svg",
    imageTwo: "https://sports.cbsimg.net/fly/images/nba/logos/team/351.svg",
  },
  {
    id: "3",
    nameOne: "Brooklyn Nets",
    nameTwo: "Boston Celtics",
    imageOne: "https://sports.cbsimg.net/fly/images/nba/logos/team/349.svg",
    imageTwo: "https://sports.cbsimg.net/fly/images/nba/logos/team/334.svg",
  },
  {
    id: "4",
    nameOne: "New York Knicks",
    nameTwo: "Philadelphia 76ers",
    imageOne: "https://sports.cbsimg.net/fly/images/nba/logos/team/350.svg",
    imageTwo: "https://sports.cbsimg.net/fly/images/nba/logos/team/351.svg",
  },
  {
    id: "5",
    nameOne: "Brooklyn Nets",
    nameTwo: "Boston Celtics",
    imageOne: "https://sports.cbsimg.net/fly/images/nba/logos/team/349.svg",
    imageTwo: "https://sports.cbsimg.net/fly/images/nba/logos/team/334.svg",
  },
  {
    id: "6",
    nameOne: "New York Knicks",
    nameTwo: "Philadelphia 76ers",
    imageOne: "https://sports.cbsimg.net/fly/images/nba/logos/team/350.svg",
    imageTwo: "https://sports.cbsimg.net/fly/images/nba/logos/team/351.svg",
  },
];

export default function Games({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}>Games</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <ScrollView horizontal={true} contentContainerStyle={styles.games}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('GameDetails', {selectedGame: item})
            }} style={styles.game}>
              <View style={styles.teamImages}>
                <Image source={item.imageOne} style={styles.img} />
                <Image source={item.imageTwo} style={styles.img} />
              </View>

              <View>
                <Text style={styles.text}>{item.nameOne}</Text>
                <Text style={styles.text}>VS</Text>
                <Text style={styles.text}>{item.nameTwo}</Text>
              </View>
            </TouchableOpacity>
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
  viewAll: {
    fontSize: 14,
    margin: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Poppins",
  },

  titletext: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "Poppins",
  },
  text: {
    fontSize: 10,
    margin: 5,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  games: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  game: {
    //backgroundColor: "#d9d9d9",
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  teamImages: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  img: {
    width: 40,
    height: 45,
    borderRadius: 20,
    margin: 10,
  },
});
