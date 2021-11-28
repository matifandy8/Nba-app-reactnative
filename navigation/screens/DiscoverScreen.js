import * as React from 'react';
import { View, Text } from 'react-native';
import Banner from '../../components/discover/Banner';

export default function DiscoverScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Banner/>
        </View>
    );
}