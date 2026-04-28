import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Rect, Defs, Pattern, Circle } from "react-native-svg";
// import { Colors } from "../constants/Colors";

export const DotBackground = () => (
  <View style={StyleSheet.absoluteFillObject}>
    <Svg width="100%" height="100%">
      <Defs>
        <Pattern
          id="dotPattern"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <Circle cx="1" cy="1" r="1" fill="#1D362F" />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#dotPattern)" />
    </Svg>
  </View>
);
