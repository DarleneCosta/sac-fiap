import React from "react";
import { Text, View } from "react-native";
import estilos from "./style";

export default function TextKeyValue({ keyLabel, valueLabel }) {
  return (
    <View style={estilos.wrapper}>
      <Text style={estilos.keyText}>{keyLabel}</Text>
      <Text style={estilos.valueText}>{valueLabel}</Text>
    </View>
  );
}
