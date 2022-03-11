import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { Audio } from 'expo-av';

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
          <Image
            style={{ width: 50, height: 50, borderRadius: 10 }}
            source={item.icon}
          />
          <View>
            <Text style={style.title}>{item.title}</Text>
            <Text style={style.count}>{item.count}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={playSound}>
        <View style={style.buttonContiner}><Image style={{ width: 40, height: 40}}source={iconSound}/></View>
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
  title: {
    marginLeft: 20,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  count: {
    marginLeft: 20,
    color: "#fff",
    fontSize: 14,
  },
  buttonContiner: {
    marginEnd: 20
  }
});
export default Item;
