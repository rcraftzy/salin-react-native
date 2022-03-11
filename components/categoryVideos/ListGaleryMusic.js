import React from "react";
import {FlatList} from "react-native";

import { galeryVideos } from "../../content";
import ItemGaleryMusic from "./ItemGaleryMusic";

const ListGaleryMusic = () => {
  const getContent = galeryVideos.map(function(content){
    if(content.id === 2){
      return {image: content.image, title: content.title, video: content.video};
    }
  })
  
  const update = getContent.filter(function(val){
    return val!==undefined;
  })

  const renderItem = ({item}) => {
    return <ItemGaleryMusic item={item} />
  }; 
  return(
    <FlatList 
      style={{width: '100%'}}
      keyExtractor={(item, index) => index.toString()}
      data={update}
      renderItem={renderItem}
    />
  );
};
export default ListGaleryMusic;
