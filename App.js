import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar } from 'react-native';
// import Title from './src/components/Title';
// import Form from './src/components/Form';
import Routes from './src/routes'

export default function App() {
  return (
    // <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    //   <Title/>
    //   <Form/>
    // </Pressable>
    <NavigationContainer>
      <StatusBar backgroundColor='#6AB7E2' barStyle='light-content'/>
      <Routes />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#6AB7E2',
//     paddingTop: 50,

//   },
// });
