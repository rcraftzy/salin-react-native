import React from 'react';
import { CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Image, View, Text, Easing } from 'react-native';

import VocabularyScreen from './VocabularyScreen'
import DictionaryScreen from './DictionaryScreen'

const Stack = createStackNavigator();
const config = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    }
}
function LogoTitle() {
    return (
        <View style={{alignItems: "center", flexDirection: "row",}}>
            <Image source={require('../assets/salin100.png')}style={{width: 27,resizeMode: 'contain',borderRadius: 10}} />
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 30, marginLeft: 8 }}>
                SALIN
            </Text>
        </View>
    );
}
const HomeScreen = () =>{
    return (
        <Stack.Navigator 
            screenOptions={{
                gestureEnabled: true, 
                transitionSpec: {
                    open: config, 
                    close: config 
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen 
                name="VocabularyScreen" 
                component={VocabularyScreen} 
                options={{
                    headerTitle: (props) => <LogoTitle {...props}/>, 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: "#082032"},
                    headerTitleStyle: {
                        color: "#fff", 
                        fontWeight: "bold", 
                        fontSize: 30
                    },
                }}
            />
            <Stack.Screen 
                name="DictionaryScreen" 
                component={DictionaryScreen} 
                options={{
                    title: 'Vocabulary',
                    headerStyle: { backgroundColor: "#082032"},
                    headerTintColor: "#fff"
                }}
            />
        </Stack.Navigator>
    );
};
export default HomeScreen;
