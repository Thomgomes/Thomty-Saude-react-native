import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Thomty Saúde</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    }
});