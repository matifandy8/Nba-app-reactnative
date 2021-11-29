import * as React from 'react';
import { useState,useEffect } from 'react';
import { ScrollView,Text,TouchableOpacity,View} from 'react-native';



export default function GameDetails({ navigation, route }) {
    const [selectedGame, setSelectedGame] = useState(null);

    useEffect(() => {
      let { selectedGame } = route.params;
      setSelectedGame(selectedGame);
    }, []);
  
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <View>
               <TouchableOpacity  onPress={() => {
            navigation.goBack();
          }}>Go Back</TouchableOpacity> 
            </View>
        </ScrollView>
    );
}