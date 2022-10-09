import React from "react";
import { Stack, Chip } from "@react-native-material/core";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import { StyleSheet } from "react-native";

const Menu = () => (
  <Stack fill center>
    <Chip
      style={estilos.chip}
      variant="outlined"
      label="MENU"
      color="primary"
      trailing={(props) => <Icon name="arrow-down" {...props} />}
    />
  </Stack>
);

const estilos = StyleSheet.create({
  chip: {
    width: "80%",
  },
});

export default Menu;
