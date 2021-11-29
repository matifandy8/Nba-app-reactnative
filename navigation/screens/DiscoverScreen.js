import * as React from 'react';
import { ScrollView} from 'react-native';
import Banner from '../../components/discover/Banner';
import Teams from '../../components/discover/Teams';
import Games from '../../components/discover/Games';


export default function DiscoverScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Banner/>
            <Teams/>
            <Games navigation={navigation}/>
        </ScrollView>
    );
}