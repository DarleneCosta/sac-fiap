import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function TextKeyValue({ keyLabel, valueLabel }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.keyText}>{keyLabel}</Text>
      <Text style={styles.valueText}>{valueLabel}</Text>
    </View>
  );
}
