import React from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";
type inputBoxPropType = {
    text : string,
    onChangeText : (Text : string) => void,
};



function InputBox(props:inputBoxPropType): React.JSX.Element {
    function TextChanged(text : string) {
       
            props.onChangeText(text); 
            
        
    }
    return(
        <View style={styles.inputView}>
            <TextInput style={styles.inputBox} placeholder="Password Length (8-16)" value={props.text} onChangeText={TextChanged}></TextInput>
        </View>
    );
}


const styles = StyleSheet.create({
    inputBox : {
        borderWidth : 1,
        borderColor : "black",
        backgroundColor : "white",
        borderRadius : 5,
        padding : 10,
    },
    inputView:{
        width:'80%',
        margin : 10,
 
    }
});

export default InputBox;