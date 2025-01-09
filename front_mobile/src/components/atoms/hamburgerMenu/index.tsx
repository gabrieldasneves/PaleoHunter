
import { s } from "@/src/components/atoms/hamburgerMenu/styles";
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring, useAnimatedStyle, interpolate } from "react-native-reanimated";


export function HamburgerMenu() {

  const toggleAnim = useSharedValue(0);


  const springConfig = {
    mass: 1,
    stiffness: 150,
    damping: 20,
  };


  const topLineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: interpolate(toggleAnim.value, [0, 1], [0, -45]) + "deg", 
        },
        {
          translateX: interpolate(toggleAnim.value, [0, 1], [0, 5]), 
        },
        {
          translateY: interpolate(toggleAnim.value, [0, 1], [0, 9]), 
        },
      ],
    };
  });


  const middleLineStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(toggleAnim.value, [0, 1], [1, 0]), 
    };
  });


  const bottomLineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: interpolate(toggleAnim.value, [0, 1], [0, 45]) + "deg", 
        },
        {
          translateX: interpolate(toggleAnim.value, [0, 1], [0, -12]), 
        },
        {
          translateY: interpolate(toggleAnim.value, [0, 1], [0, 3]), 
        },
      ],
    };
  });


  const handlePress = () => {
    toggleAnim.value = toggleAnim.value === 0 ? withSpring(1, springConfig) : withSpring(0, springConfig);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={handlePress} style={s.menuButton}>

        <View style={s.menuLinesContainer}>

          <Animated.View style={[s.lineStart, topLineStyle]}>
            <View style={s.shortLine} />
          </Animated.View>


          <Animated.View style={[s.middleLine, middleLineStyle]} />


          <Animated.View style={[s.lineEnd, bottomLineStyle]}>
            <View style={s.shortLine} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

