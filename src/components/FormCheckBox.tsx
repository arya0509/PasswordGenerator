import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet } from "react-native";
type FormCheckboxPropType = {
    id: string,
    label: string,
    isChecked: boolean,
    CheckBoxColor: string,
    borderColor: string,
    onChecked: (isChecked: boolean) => void,
}

function FormCheckbox(props:FormCheckboxPropType):React.JSX.Element {
    const handlePress=()=>{
        props.onChecked(!props.isChecked);
    }
    return (
        <View style={styles.ViewStyle}>
            <BouncyCheckbox
                size={25}
                fillColor={props.isChecked?props.CheckBoxColor:'transparent'}
                iconStyle={{borderColor: props.borderColor,borderWidth: 2, }}
                onPress={handlePress} 
                isChecked={props.isChecked}
            />

            <Text>{props.label}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    ViewStyle:{
        marginVertical:10,
        flexDirection:"row",
        width:"80%",
    }
});

export default FormCheckbox;