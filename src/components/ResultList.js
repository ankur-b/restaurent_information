import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity, Touchable} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultList = ({title,results,navigation}) =>{
    if (!results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={result => result.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={() => navigation.navigate('Details',{id:item.id}) }>
                    <ResultDetail result={item}/>
                </TouchableOpacity>
                )
            }}
        />
    </View>
};
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultList);