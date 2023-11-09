import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavigationButton(props) {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={ () => navigation.navigate(props.navigation) }
      >
        <Text style={styles.textButton}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: '#6AB7E2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    onMainView: {
        marginTop: 30,
    },
    onResultView: {
        marginTop: 10,
        marginBottom: 5,
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    }
});