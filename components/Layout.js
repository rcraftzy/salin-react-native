import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';

//const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BDQnTR9X9srsNK9oYqP8EhK3bNz0RTC7ARqwwodYav2RlRcGQ8TaKlgYleGPNh8gS7A&usqp=CAU";

            //<ImageBackground style={styles.imageBackgroumd} resizeMode="cover" source={{uri: image}}>
const Layout = ({children}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#082032"/>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#082032",
    },
    imageBackgroumd: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }
})

export default Layout;
