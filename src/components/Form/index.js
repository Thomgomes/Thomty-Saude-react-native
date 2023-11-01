import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import ResultIMC from './ResultIMC';
import Table from './Table';
import { Vibration } from 'react-native';

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")
    const [messageError, setMessageError] = useState('')

    const imcResult = imc + " kg/m²"

    function imcCalculator() {
        return setImc(((weight * 10000) / (height * height)).toFixed(2))
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate()
            setMessageError('Campo Obrigatorio *')
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            setMessageError(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular IMC")
        setMessageImc("preencha o peso e a altura")
    }

    return (
        <View style={styles.main}>
            <View style={styles.formContext}>

                <Text style={styles.formLabel}>Altura</Text>
                {messageError === '' || height !== null ? null : <Text style={styles.messageError}>{messageError}</Text>}
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    maxLength={3}
                    placeholder='ex: 175cm'
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                {messageError === '' || weight !== null ? null : <Text style={styles.messageError}>{messageError}</Text>}
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    maxLength={6}
                    placeholder='ex: 78.66 kg'
                    keyboardType='numeric'
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC
                messageResultImc={messageImc}
                resultImc={(imc === null) ? imc : imcResult}
            />
            <Table />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    formContext: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: '#808080',
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: 20,
    },
    messageError: {
        color: 'red',
        fontWeight: '600',
        fontSize: 8,
        paddingLeft: 20,
        margin: 0
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        backgroundColor: '#6AB7E2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,

    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#fff'
    },
});