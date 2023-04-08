import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LoginAuth = () => {
  return (
    <View>
      <LinearGradient
        colors={['#1D976C', '#93F9B9']}
        style={styles.authBackground}
      >
        <View>
          <Text>sadsadsadasdasdsad</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginAuth;

const styles = StyleSheet.create({
  authBackground: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
