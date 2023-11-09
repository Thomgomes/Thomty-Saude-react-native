import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import NavigationButton from '../../components/NavigationButton'
import * as Animatable from 'react-native-animatable'

export default function Welcome() {
  return (
    <Container>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='zoomIn'
          source={require('../../assets/thomty.gif')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>
      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Animatable.Text delay={700} animation='fadeInUp' style={styles.containerTitle}>Thomty Saúde</Animatable.Text>
        <Animatable.Text delay={750} animation='fadeInUp' style={styles.containerText}>Uma calculadora de índice de massa corporal (IMC), que pode ajudar a identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos.</Animatable.Text>

        <Animatable.View delay={1300} animation='fadeIn'>
          <NavigationButton
            navigation='Calculator'
            text='Ir à calculadora de IMC'
          />
        </Animatable.View>
      </Animatable.View>
    </Container>
  )
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    alignSelf: 'center',
  },
  containerText: {
    color: '#808080',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 12,
  },
})