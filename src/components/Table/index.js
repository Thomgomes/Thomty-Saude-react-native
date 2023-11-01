import React from 'react';
import { View, Text, FlatList, StyleSheet, } from 'react-native';

const data = [
    { id: 1, imcValue: 'Abaixo de 18,5', classficação: 'Baixo peso' },
    { id: 2, imcValue: '18,5 a 24,9', classficação: 'Normal' },
    { id: 3, imcValue: '25 a 29,9', classficação: 'Sobrepeso' },
    { id: 4, imcValue: '30 a 34,9', classficação: 'Obesidade grau I' },
    { id: 5, imcValue: '35 a 39,9', classficação: 'Obesidade grau II' },
    { id: 6, imcValue: 'Acima de 40', classficação: 'Obesidade grau III' },
]

export default function Table() {

    const item = ({ item }) => {
        return (
            <View style={styles.flexRow}>
                {/* <View>
                    <View style={styles.tableItens}>
                        <Text>{item.imcValue}</Text>
                    </View>
                </View> */}
                <View>
                    <View style={(item.id & 1) ? [styles.tableItens , styles.tableItensColor] : styles.tableItens}>
                        <Text>{item.imcValue}</Text>
                    </View>
                </View>

                <View>
                    <View style={(item.id & 1) ? [styles.tableItens , styles.tableItensColor] : styles.tableItens}>
                        <Text>{item.classficação}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        // <View>
        //     <Text>Futuras tabelas</Text>
        //     <Text>IMC</Text>
        //     <Text>Peso</Text>
        //     <Text></Text>
        //     <Text>Magreza</Text>
        //     <Text>Normal</Text>
        //     <Text>Sobrepeso</Text>
        //     <Text>Obesidade</Text>
        // </View>
        <View style={styles.tableMain}>
            <View style={[styles.flexRow, styles.distance]}>
                <Text>IMC (kg/m²)</Text>
                <Text>Classificação</Text>
            </View>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={item}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tableMain: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: .5,
        borderRadius: 3,
        borderColor: '#6AB7E2',

    },
    flexRow: {
        flexDirection: 'row',
    },
    distance: {
        gap: 78,
        marginVertical: 10
    },
    tableItens: {
        width: 160,
        alignItems: 'center',
        padding: 5,
    },
    tableItensColor: {
        backgroundColor: '#6AB7E241',
    }
})