import { StyleSheet } from 'react-native';

import {  Dimensions } from 'react-native'

const width = Dimensions.get('screen').width/2 - 30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal:20,
        // justifyContent:'space-between',
        // backgroundColor: 'f4f4f4',
    },

    searchContainer:{
        height:40,
        top:20,
        backgroundColor:'white',
        borderRadius:8,
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        width:280,
        
        

    },
    input:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray',
        width:250


    },
    filterButton:{
        marginLeft:310,
        height:40,
        width:40,
        backgroundColor:'#6902FC',
        top:-20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
        
    },
    categoryContainer:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:30,
        justifyContent:'space-between',
    },
    categoryText:{
        color:'grey',
        fontSize:14,
        fontWeight:'bold'
    },
    categoryTextSelected:{
        color:'#6902FC',
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:'#6902FC'
    }, 
    
    card:{
        backgroundColor:'white',
        height:225,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        padding:15,


    },
})


export default styles;