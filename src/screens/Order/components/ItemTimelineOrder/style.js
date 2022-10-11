import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginVertical: 5,
  },
  chip: {
    paddingBottom: 1,
    margin: 0,
    borderRadius: 40,
    borderColor: colors.primary.main,
    borderWidth: 2,
    width: 28,
    height: 28,
    marginRight: 8,
  },
  divider: {
    borderLeftWidth: 2,
    height: 10,
    width: 10,
  },
  text: {
    fontWeight: "bold",
    paddingTop: 2,
    paddingLeft: 5,
  },
});

export default styles;
