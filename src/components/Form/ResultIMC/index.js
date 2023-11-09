import React from 'react';
import { Share, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

export default function ResultIMC(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc
        })
    }

    return (
        <View style={styles.result}>
            <Text style={styles.textResult}>{props.messageResultImc}</Text>
            <Text style={styles.textResult}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            </View>
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
        fontWeight: '700',
        fontSize: 28,
    },
    boxShareButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 3,
        marginTop: 20,
    },
    shared: {
        backgroundColor: "#6AB7E2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },
    shareText: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
})