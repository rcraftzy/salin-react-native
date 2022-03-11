import React from 'react';
import { Easing } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import VideoPlayerScreen from './VideoPlayerScreen';
import GaleryVideosScreen from './GaleryVideosScreen';

const Stack = createStackNavigator();

const config = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    }
};
const VideosScreen = () =>{
    return (        
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true, 
                transitionSpec: {
                    open: config, 
                    close: config 
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen 
                name="GaleryVideosScreen" 
                component={GaleryVideosScreen} 
                options={{
                    headerShown: false,
                    title: 'Vocabulary',
                    headerStyle: { backgroundColor: "#082032"},
                    headerTintColor: "#fff"
                }}
            />
            <Stack.Screen name="VideoPlayerScreen" 
                options={{
                    title: 'Vocabulary',
                    headerTitle: ' ',
                    headerStyle: { backgroundColor: "#082032"},
                    headerTintColor: "#fff"
                }}
                component={VideoPlayerScreen} />
        </Stack.Navigator>
    );
};
export default VideosScreen;

