import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ItemGaleryLearn = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("VideoPlayerScreen", { video: item.video })}>
    <View style={style.itemContainer}>
      <Image style={{width: "100%", height: 190, borderTopLeftRadius: 10, borderTopRightRadius: 10}} source={item.image}/>
      <Text style={style.title}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#40345c",
    color: "#fff",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default ItemGaleryLearn;
