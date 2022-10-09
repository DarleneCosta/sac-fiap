import React from "react";
import { View } from "react-native";
import { Chip, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./style";
import IconTemplate from "./../../../../components/Icon/index";

const ItemTimelineOrder = ({ status, text }) => {
  const icon = {
    style: styles.chip,
  };

  if (status === "OK") {
    icon.name = "check";
    icon.style = { ...styles.chip, backgroundColor: "#78EC6E" };
  } else if (status === "NOK") {
    icon.name = "close";
    icon.style = { ...styles.chip, backgroundColor: "red" };
  }

  return (
    <>
      <View style={styles.wrapper}>
        <View style={icon.style}>
          {icon.name && <IconTemplate nameIcon={icon.name} />}
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </>
  );
};
export default ItemTimelineOrder;
