import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import FlashcardBack from "./FlashcardBack";
import FlashcardFront from "./FlashcardFront";

const FlashcardInteractive: React.FC = () => {
  const [isFront, setIsFront] = useState(true);
  const rotate = useSharedValue(0);

  useEffect(() => {
    // Update rotate.value when isFront changes
    rotate.value = withTiming(isFront ? 0 : 1, { duration: 500 });
  }, [isFront, rotate]);

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Animated.View
            style={[styles.frontcard, frontAnimatedStyles]}
          >
            <FlashcardFront onPress={toggleCard} />
          </Animated.View>
          <Animated.View
            style={[styles.backCard, backAnimatedStyles]}
          >
            <FlashcardBack onPress={toggleCard} />
          </Animated.View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontcard: {
    position: "absolute",
    backfaceVisibility: 'hidden',
  },
  backCard: {
    position: "absolute",
    backfaceVisibility: 'hidden',
  },
});
export default FlashcardInteractive;
