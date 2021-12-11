import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'skyblue',
    },
    img: {
     
        marginHorizontal: 10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 300,
        height: 400,
      },
      txt: {
        color: '#6902FC',
        // backgroundColor: 'f4f4f4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',

      }
      ,

    forget_btn:
    {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:15
    },

})


export default styles;

