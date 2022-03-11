import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View, Image, Text} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import VideosScreen from "../screens/VideosScreen";

const Tab = createBottomTabNavigator();
const iconVoca = require('../assets/tabIcon/vocaImg1.png');
const iconVoca2 = require('../assets/tabIcon/vocaImg2.png');
const iconVide = require('../assets/tabIcon/videImg1.png');
const iconVide2 = require('../assets/tabIcon/videImg2.png');

const ScreenApp = () => {
  return (
        <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
          headerShown: false, 
          tabBarStyle: {
              backgroundColor: "#0a1c2c",
              height: 60,
              shadowColor: '#0a1c2c',
              shadowOpacity: 0.06,
              borderTopColor: '#0a1c2c', 
              shadowOffset:{
                height: 10,
                width: 10,
              }
            }
        }}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 10,}}>
                <Image 
                  source={focused ? iconVoca : iconVoca2 }
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{color: focused ? '#fff' : '#a5a5a5', marginBottom: 15}}>VOCABULARY</Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="Videos" component={VideosScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 10,}}>
                <Image 
                  source={focused ? iconVide : iconVide2 }
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{color: focused ? '#fff' : '#a5a5a5', marginBottom: 15}}>VIDEOS</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ScreenApp;

