import React from "react";
import { View, Image, Text, StyleSheet} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CategoriaScreen from './CategoriaScreen';
import VideoMusicaScreen from './VideoMusicaScreen';
import VideoLearnScreen from './VideoLearnScreen';

const Tab = createMaterialTopTabNavigator();

const icons = {
    all: {
        on: require('../assets/tabIcon/allOn.png'), 
        of: require('../assets/tabIcon/allOf.png'),
    },
    music: {
        on: require('../assets/tabIcon/musicOn.png'), 
        of: require('../assets/tabIcon/musicOf.png'),
    },
    learn: {
        on: require('../assets/tabIcon/focoOn.png'), 
        of: require('../assets/tabIcon/focoOf.png'),
    }
}

const GaleryVideosScreen = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: "#082032",
                height: 70,
            },
            tabBarIndicatorStyle: {
                backgroundColor: "#40345c",
            },
        }}>
            <Tab.Screen 
                name="CategoriaScreen" 
                component={CategoriaScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabContainerItem}>
                            <Image 
                                style={styles.tabIcon}
                                source={focused ? icons.all.on : icons.all.of}
                                resizeMode='contain'
                            />
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                        <View style={styles.tabContainerItem}>
                            <Text style={{color: focused ? '#fff' : '#a5a5a5',marginVertical: 10, fontWeight: "bold"}}>
                                ALL
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="MusicScreen" 
                component={VideoMusicaScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabContainerItem}>
                            <Image 
                                style={styles.tabIcon}
                            source={focused ? icons.music.on : icons.music.of}
                            resizeMode='contain'
                            />
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                        <View style={styles.tabContainerItem}>
                            <Text style={{color: focused ? '#fff' : '#a5a5a5',marginVertical: 10}}>
                                MUSIC 
                            </Text>
                        </View>
                    )
                }}
            />
                <Tab.Screen 
                    name="LearnScreen" 
                    component={VideoLearnScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.tabContainerItem}>
                                <Image 
                                    style={styles.tabIcon}
                                    source={focused ? icons.learn.on : icons.learn.of}
                                    resizeMode='contain'
                                />
                            </View>
                        ),
                        tabBarLabel: ({focused}) => (
                            <View style={styles.tabContainerItem}>
                                <Text style={{color: focused ? '#fff' : '#a5a5a5', marginVertical: 10}}>
                                    LEARN
                                </Text>
                            </View>
                        )
                    }}
                />
        </Tab.Navigator>

    );
};
export default GaleryVideosScreen;
const styles = StyleSheet.create({
    tabContainerItem: {
        alignItems: 'center', 
        justifyContent: 'center', 
        bottom: 3
    },
    tabIcon: {
        width: 40, 
        height: 40
    },
})
