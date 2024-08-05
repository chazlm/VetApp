import * as React from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const MovingTextBox = () => {
  const translateX = React.useRef(new Animated.Value(-width)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 10000, // Adjust duration as needed
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [translateX]);

  return (
    <Animated.View
      style={[styles.movingTextBox, { transform: [{ translateX }] }]}
    >
      <Text style={styles.movingText}>Welcome to the App!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  movingTextBox: {
    position: "absolute",
    left: -width, // Start off-screen
  },
  movingText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default MovingTextBox;
