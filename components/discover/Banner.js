import * as React from "react";
import { View, Text } from "react-native";

export default function Banner() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "start" }}>
      <Text style={styles.text}>
      Lakers' LeBron James fined $15K by NBA for obscene gesture, warned about usage of profanity
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
    },
    img: {
        width: 200,
        height: 200,
    },
});
S