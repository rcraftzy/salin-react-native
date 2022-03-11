import React from "react";
import {FlatList,Text} from "react-native";

import { galeryVideos } from "../content";
import GaleryItem from "./GaleryItem";

const Galery = () => {
  const renderItem = ({item}) => {
    return <GaleryItem item={item} />
  }; 
  return(
    <FlatList 
      style={{width: '100%'}}
      keyExtractor={(item, index) => index.toString()}
      data={galeryVideos}
      renderItem={renderItem}
    />
  );
};
export default Galery;
