import { StyleSheet, Switch, TextInput } from "react-native";
import theme from "./theme";
import themeContext from '../style/themeContext';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    Title:{
        fontFamily:'Helvetica',
        fontWeight: "bold",
        fontSize: 40,
        paddingBottom: 20,
        textShadowColor:'#737373',
        textShadowOffset:{width: 1.5, height: 1.5},
        textShadowRadius:1,
    },
    Text: {
        fontFamily:"Arial",
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop:10,
        marginBottom:10,
        fontSize: 20,
        fontWeight:"bold",

    },
    TextInput: {
        fontFamily:"Arial",
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginBottom:25,
        fontSize: 20,
        padding:5,
    },
    NumericInput: {
        marginBottom:15,
    },
    button: {
        marginTop: 15,
        borderRadius: 5  ,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
            
     },
    result: {
        fontFamily: 'Arial',
        fontSize: 50,
        textShadowColor:'#737373',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
        padding:20,
     },
     radioB: {
        fontFamily:"Arial",
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop:10,
        marginBottom:10,
        fontSize: 20,
        fontWeight:"bold",
        textShadowColor:'#737373',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
     },
    })