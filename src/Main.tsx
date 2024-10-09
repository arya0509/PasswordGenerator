import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Clipboard,
} from "react-native";
import { useState } from "react";
import InputBox from "./components/InputBox";
import FormCheckBox from "./components/FormCheckBox";
import Output from "./components/Output";
import Btn from "./components/Btn";
import { generatePasswordString } from "./utility/passwordGenerator";
import showErrorSnackbar  from "./utility/utils";
import {showSuccessSnackBar,showInfoSnackBar} from "./utility/utils";

function Main() : React.JSX.Element {
    const [text,setText] = useState("");

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const [generatedPassword, setGeneratedPassword] = useState("");
    const [copiedText, setCopiedText] = useState('');

    function CopyText(){
        setCopiedText(generatedPassword);
        Clipboard.setString(generatedPassword);
        showSuccessSnackBar("Password Copied");
    }
    function reset(){
        setText("");
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setGeneratedPassword("");
        showInfoSnackBar("Reset Successful");
    }
    
    function generatePassword() {
        let IntText=parseInt(text)

        if(text==""){
            showErrorSnackbar("Please enter a value");
            setGeneratedPassword(generatePasswordString({length: 0, includeUpper: false, includeLower: false, includeNumber: false, includeSymbol: false}));
            return;
        }
        if(parseInt(text)<8 || parseInt(text)>16){
            showErrorSnackbar("Please enter a value between 8 and 16");
            setGeneratedPassword(generatePasswordString({length: 0, includeUpper: false, includeLower: false, includeNumber: false, includeSymbol: false}));
            setText("");
            
            return;
        }
        if(isNaN(IntText)){
            showErrorSnackbar("Please enter a valid number");
            setText("");
            setGeneratedPassword(generatePasswordString({length: 0, includeUpper: false, includeLower: false, includeNumber: false, includeSymbol: false}));
            return;
        }
        if(!isChecked1 && !isChecked2 && !isChecked3 && !isChecked4){
            showErrorSnackbar("Please select atleast one checkbox");
            setText("");
            setGeneratedPassword(generatePasswordString({length: 0, includeUpper: false, includeLower: false, includeNumber: false, includeSymbol: false}));
            return;
        }
        
        else{
            setGeneratedPassword(generatePasswordString({length: parseInt(text), includeUpper: isChecked1, includeLower: isChecked2, includeNumber: isChecked4, includeSymbol: isChecked3}));
        }
        
       
        
        
    }
    

    return (
        <View style={styles.mainView}>
            <Text style={styles.TextStyle}>Password Generator</Text>
            <InputBox text={text} onChangeText={setText}></InputBox>
            
            <FormCheckBox id="1" label="Uppercase Case Letter" isChecked={isChecked1} CheckBoxColor={"red"} onChecked={setIsChecked1} borderColor="red"></FormCheckBox>
            <FormCheckBox id="2" label="Lowercase Case Letter" isChecked={isChecked2} CheckBoxColor={"blue"} onChecked={setIsChecked2} borderColor="blue"></FormCheckBox>
            <FormCheckBox id="3" label="Special Character" isChecked={isChecked3} CheckBoxColor={"orange"} onChecked={setIsChecked3} borderColor="orange"></FormCheckBox>
            <FormCheckBox id="4" label="Numbers" isChecked={isChecked4} CheckBoxColor={"yellow"} onChecked={setIsChecked4} borderColor="yellow"></FormCheckBox>
       
            <Output generatedPassword={generatedPassword} placeholder="Generated Password" handleCopy={CopyText}></Output>

            <Btn type={1} title="Generate Password" onPress= {generatePassword}></Btn>
            <Btn type={2} title="Reset" onPress={reset}></Btn>

        </View>
    );
}

const styles = StyleSheet.create({
    mainView:{
        padding:10,
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        backgroundColor:"lightblue",
    },
    TextStyle:{
        fontSize:30,
        fontWeight:"bold",
    }
});

export default Main;