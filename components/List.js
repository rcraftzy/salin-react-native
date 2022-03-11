import React from "react";
import {FlatList} from "react-native";

import { vocabulary } from "../content";
import Item from './Item';

const keyExtractor = (item, index) => index.toString();

const List = () => {

  const renderItem = ({item}) => {
    return <Item  item={item}/>
  };

  return (
    <FlatList
      style={{width: '100%'}}
      keyExtractor={keyExtractor}
      data={vocabulary}
      renderItem={renderItem}
    />
  );
};
export default List;
