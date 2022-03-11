import React,{useEffect, useState} from "react";
import { Text,View, StyleSheet,Dimensions } from "react-native";
import { Video } from 'expo-av';
import { useNavigation } from "@react-navigation/native";

import * as ScreenOrientation from 'expo-screen-orientation';

const VideoPlayerScreen = ({route}) => {
  const navigation = useNavigation();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const {width,height} = Dimensions.get("screen");
  const [postData,setPostData] = useState(route.params.id);

  useEffect(()=>{
    var post_data = route.params.id;
    navigation.setOptions({
    tabBarStyle:{
      height: 0,
    }})
  },[])
//function setOrientation() {
  //if (Dimensions.get('window').height > Dimensions.get('window').width) {
    //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  //}
  //else {
    //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  //}
  function setOrientation() {
  if (Dimensions.get('window').height > Dimensions.get('window').width) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  else {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
}
  return(
    <View style={style.mainPlayerView}>
      <View style={{height: "100%", width: "100%", backgroundColor: "#082032"}}>
        <Video 
          source={route.params.video}
          resizeMode="contain"
          shouldPlay
          onFullscreenUpdate={setOrientation}
          useNativeControls
          style={style.video}
        />
      </View>
    </View>
  );
};
export default VideoPlayerScreen;
const style = StyleSheet.create({
  mainPlayerView:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
  },
  video:{
    width: Dimensions.get("window").width, height: "100",
    height: "100%",
  }
})
