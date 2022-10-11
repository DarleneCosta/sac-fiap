import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import IconSimple from "@expo/vector-icons/SimpleLineIcons";
import colors from "../styles/colors";

const ToolBar = () => (
  <>
    <AppBar
      title="LOGO TIPO"
      color={colors.primary.main}
      tintColor={colors.secondary.light}
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={(props) => (
        <HStack>
          <IconButton
            icon={(props) => <Icon name="magnify" {...props} />}
            {...props}
          />
          <IconButton
            icon={(props) => <IconSimple name="handbag" {...props} />}
            {...props}
          />
        </HStack>
      )}
    />
  </>
);

export default ToolBar;
