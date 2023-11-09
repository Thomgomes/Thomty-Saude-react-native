import React from 'react';
import { StyleSheet, Pressable, Keyboard } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';


export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Title/>
      <Form/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6AB7E2',
    paddingTop: 50,

  },
});
