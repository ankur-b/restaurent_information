import React, {useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Image,ScrollView} from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({navigation}) =>{
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result)
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result){
        return null;
    }
    return (
    <>
        <Text>{result.name}</Text>
        <ScrollView>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </ScrollView>
    </>
    )
}
const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
})
export default DetailsScreen;