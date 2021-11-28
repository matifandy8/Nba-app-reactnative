import * as React from "react";
import { StyleSheet} from 'react-native';

import { View, Text,Image } from "react-native";
const image = { uri: "https://i.ibb.co/pdCpxsg/Rectangle-62.png" };

export default function Banner() {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.img}
        source={{
          uri: 'https://sportshub.cbsistatic.com/i/r/2021/11/03/1b0d84b1-0e3e-4afd-8c78-7100504350c0/thumbnail/770x433/5c10154c3ef8bf96910c902c8c82da09/lebron-james.jpg',
        }}
      />
      <Text style={styles.text}>
      Lakers' LeBron James fined $15K by NBA for obscene gesture, warned about usage of profanity
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginLeft: 0,
    },
    text: {
        fontSize: 17,
        color: '#000',
        width: 300, 
        fontWeight  : 'bold',
        fontStyle: 'normal',
        lineHeight: 17,
        marginTop: 15,
        borderRadius: 5,
        alignSelf: 'center',
    },
    img: {
        width: '100%',
        height: '60%',
    },
});
