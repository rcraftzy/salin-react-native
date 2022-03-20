import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { Audio, ResizeMode } from 'expo-av';

const Item = ({ item }) => {

  const navigation = useNavigation();

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
      <TouchableOpacity
        onPress={() => navigation.navigate("DictionaryScreen", { id: item.id })}
      >
        <View style={style.itemContainer}>
          <View style={{
            alignItems: "center", 
            width:"100%", 
            backgroundColor: item.color,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
            <Image
              style={{
                height: 130,
              }}
              source={item.icon}
            />
          </View>
          <View style={style.info}>
            <View>
              <Text style={style.title}>{item.title}</Text>
              <Text style={style.count}>{item.count}</Text>
            </View>
            <TouchableOpacity onPress={playSound}>
              <View>
                <Image style={{width: 40, height: 40,}}source={iconSound}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container:{
    backgroundColor: "#40345c",
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  itemContainer: {
    borderRadius: 10,
    flexDirection: "column",
  },
  info: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  count: {
    color: "#fff",
    fontSize: 14,
  },
});
export default Item;
