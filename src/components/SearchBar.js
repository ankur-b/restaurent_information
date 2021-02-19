import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
 

const SearchBar = ({term,onTermChange,onTermSubmit}) =>{
    return(
        <View style={styles.backgroundStyle}>
            <Icon name="search" style={styles.iconStyle} color="black" />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#f0eeee',
        height:50,
        borderRadius:10,
        marginHorizontal:20,
        flexDirection:'row',
    },
    inputStyle:{
        fontSize:20,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        marginHorizontal:10,
        alignSelf:'center'
    }
}); 
export default SearchBar;