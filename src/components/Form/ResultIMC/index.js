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
        marginBottom: 6,
        marginTop: 6,
        alignItems: 'center',
        width: '100%',
    },
    textResult: {
        color: '#6AB7E2',
        fontWeight: '600',
        fontSize: 18,
    }
})