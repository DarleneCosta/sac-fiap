import React from "react";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const IconTemplate = ({ nameIcon, dark, size = 24 }) => (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <Icon name={nameIcon} size={size} color={dark ? "black" : "white"} />
  </IconComponentProvider>
);

export default IconTemplate;
