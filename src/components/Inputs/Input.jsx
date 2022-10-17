import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Input = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput secureTextEntry={true} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'grey',
  },
});
