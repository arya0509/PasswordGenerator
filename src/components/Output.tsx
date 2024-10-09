import React from "react";
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Clipboard,
} from "react-native";


type outputPropType = {
    generatedPassword : string,
    placeholder : string,
    handleCopy : (textToCopy : string) => void,
}

function Output(props : outputPropType) : React.JSX.Element {
    const result = props.generatedPassword;
    const placeholder = props.placeholder;
    const handleCopy = props.handleCopy;

    const txtColor = {color : result === '' ? 'black' : '#3C3D37'};
    return (
        <View style={style.container}>
            <View style={style.outputView}>
                <Text style={[style.outputTxt]}>
                    {result === "" ? placeholder : result}
                </Text>
                <Pressable 
                style={style.iconView}
                onPress={() => handleCopy(result)}
                >
                    <Image 
                    style={style.icon} 
                    source={require("../../assets/icons/copy.png")} 
                    />
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '80%',
        marginVertical: 20,
        
    },

    outputView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'black',
        backgroundColor: 'white',
        width: '100%',
        // height: 60,
        alignSelf: 'center',
        paddingStart: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },

    outputTxt: {
        // fontSize: 20,

        // color: '#3C3D37',
    },

    iconView: {
        width: 55,
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#B7B7B7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        
    }
});

export default Output;