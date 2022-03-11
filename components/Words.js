import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import { Audio } from 'expo-av';

const Words = ({ item }) => {

  const iconSound = require("../assets/sound.png")

  const [sound, setSound] = React.useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      item.sound
    );
    setSound(sound);

    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync(); }
      : undefined;
  }, [sound]);
 
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <View style={style.itemContainer}>
          <Image
            style={{ width: 50, height: 50, resizeMode: 'contain'}}
            source={item.image}
          />
          <Text style={style.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={playSound}>
        <View style={style.buttonSound}>
          <Image sytle={{width: 40, height: 40}} source={iconSound}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: "#40345c",
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    marginLeft: 20,
    fontSize: 20,
  },
  buttonSound: {
    marginEnd: 20
  }
});

export default Words;
