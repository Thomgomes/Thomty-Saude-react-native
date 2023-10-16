import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function ResultIMC(props){
    return(
        <View style={styles.result}>
            <Text style={styles.textResult}>{props.messageResultImc}</Text>
            <Text style={styles.textResult}>{props.resultImc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        marginLeft: 30
    },
    textResult: {
        color: '#808080',
        fontWeight: '600',
        fontSize: 18,
    }
})