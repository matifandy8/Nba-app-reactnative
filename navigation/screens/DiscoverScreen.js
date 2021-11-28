import * as React from 'react';
import { View, Text } from 'react-native';
import Banner from '../../components/discover/Banner';
import Teams from '../../components/discover/Teams';

export default function DiscoverScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Banner/>
            <Teams/>
        </View>
    );
}