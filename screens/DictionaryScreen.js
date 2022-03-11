import React,{useEffect} from 'react';
import { FlatList } from 'react-native'

import Words from '../components/Words';
import Layout from "../components/Layout";
import { alphabet, vocabulary} from "../content";

const DictionaryScreen = ({navigation, route}) =>{

  const getContent = alphabet.map(function(content){
    if(content.id === route.params.id){
      return {id: content.id,name: content.name, image: content.icon, sound: content.sound};
    }
  })
  
  const update = getContent.filter(function(val){
    return val!==undefined;
  }) 

  const getTitle = vocabulary.map(function(content){
    if(content.id === route.params.id){
      return content.title;  
    }
  })

  const title = getTitle.filter(function(val){
    return val!==undefined;
  }).toString() 

  useEffect(() => {
      navigation.setOptions({ headerTitle: title,});
  }, []);

  const renderItem = ({ item }) => {
    return <Words  item={item}/>
  };
  return (
    <Layout>
      <FlatList
        style={{width: '100%'}}
        keyExtractor={(item, index) => index.toString()}
        data={update}
        renderItem={renderItem}
      />
    </Layout>
  );
};
export default DictionaryScreen;
