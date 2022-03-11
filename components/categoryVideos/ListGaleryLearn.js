import React from "react";
import {FlatList} from "react-native";

import { galeryVideos } from "../../content";
import ItemGaleryLearn from "./ItemGaleryLearn";

const ListGaleryLearn = () => {
  const getContent = galeryVideos.map(function(content){
    if(content.id === 3){
      return {image: content.image, title: content.title, video: content.video};
    }
  })
  const update = getContent.filter(function(val){
    return val!==undefined;
  })
  const renderItem = ({item}) => {
    return <ItemGaleryLearn item={item} />
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
export default ListGaleryLearn;
