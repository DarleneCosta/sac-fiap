import React from "react";
import { View } from "react-native";
import {  Text } from "@react-native-material/core";
import styles from "./style";
import IconTemplate from "./../../../../components/Icon/index";
import colors from "../../../../styles/colors";

const ItemTimelineOrder = ({ status, text }) => {
  const icon = {
    style: styles.chip,
  };

  if (status === "OK") {
    icon.name = "check";
    icon.style = { ...styles.chip, backgroundColor: colors.info.sucess };
  } else if (status === "NOK") {
    icon.name = "close";
    icon.style = { ...styles.chip, backgroundColor: colors.info.error };
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
