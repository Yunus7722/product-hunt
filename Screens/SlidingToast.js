
import React, { useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SlidingToast = ({ message, visible, duration }) => {
  const [slideAnim] = useState(new Animated.Value(-50));

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 500,
        useNativeDriver: true
      }).start();
    }
  }, [visible]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
    >
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // bottom: 20,
    top:25,
    left: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30
  },
  message: {
    color: 'white',
    fontSize: 18
  }
});

export default SlidingToast;
