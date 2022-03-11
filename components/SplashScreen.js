import React, {useEffect, useRef,} from 'react';
import {Animated, Dimensions, Image, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import salin200 from '../assets/salin200.png' 
import ScreenApp from '../screens/ScreenApp';

const SplashScreen = () => {

  const startAnimation = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;
  
  const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() =>{
    setTimeout(() =>{
      Animated.parallel([
        Animated.timing(
          startAnimation,
          {
            toValue: -Dimensions.get('window').height,
            //toValue: -Dimensions.get('window').height + (edges.top + 1),
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          scaleLogo,
          {
            toValue: 0.3,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          scaleTitle,
          {
            toValue: 0.8,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          moveLogo,
          {
            toValue: {
              x: -(Dimensions.get('window').width / 2) + 130,
              y: (Dimensions.get('window').height / 2 ) - 5,
            },
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          moveTitle,
          {
            toValue: {
              x: -(Dimensions.get('window').width / 2) + 200,
              y: (Dimensions.get('window').height / 2 ) - 98,
            },
            useNativeDriver: true,
          }
        ),
      ]).start();
    },500);
  },[])

  const edges = useSafeAreaInsets();
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#0a1c2c',
          zIndex: 1,
          transform: [
            { translateY: startAnimation }
          ]
        }}
      >
        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Animated.Image source={salin200} style={{
            width: 100,
            height: 135,
            borderRadius: 25,
            marginBottom: 0,
            //transform: [
              //{translateX: moveLogo.x},
              //{translateY: moveLogo.y},
              //{scale: scaleLogo},
            //]
          }}/>
          <Animated.Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white',
            //transform: [
              //{translateY: moveTitle.y},
              //{translateX: moveTitle.x},
              //{scale: scaleTitle}
            //]
          }}>
            SALIN
          </Animated.Text>
        </Animated.View>
      </Animated.View>
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,04)',
        zIndex: 0,
      }}>
        <ScreenApp />
      </Animated.View>
    </View>
  );
};
export default SplashScreen;
