import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
      
    },
    imgContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    detailsContainer:{
        flex:0.55,
        backgroundColor:'#F1F1F1',
        marginHorizontal:7,
        marginBottom:7,
        marginTop:30,
        borderRadius:20,
        paddingTop:30,
    },

    categoryLine:{
        width:25,
        height:2,
        backgroundColor:'darkgray',
        marginBottom:5,
        marginRight:3,
        
    },
    priceTag:{
        backgroundColor:"#6902FC",
        width:120,
        height:40,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:'center',
        // alignItems:'center',
      
        alignItems:'center'


    }
})

export default styles;