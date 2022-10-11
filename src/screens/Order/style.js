import { StyleSheet } from "react-native";
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  wrapperTitle: {
    width: "85%",
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    flexDirection: "row",
    borderColor: colors.primary.main
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 32,
    fontFamily: "KarlaBold",
    fontWeight: "500",
    marginLeft: "30%",
    marginRight: "20%",
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "KarlaBold",
    width: "100%",
    textDecorationLine: "underline",
    paddingTop: 20,
    fontWeight: "800",
    textTransform: 'uppercase'
  },
  card: {
    backgroundColor: colors.primary.light,
    margin: 30,
    padding: 15,
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    marginBottom: 20,
    fontWeight: "900",
    fontSize: 14,
    textTransform: 'uppercase'
  },
  icon: {
    marginLeft: 50,
  },
  divider: {
    color: colors.primary.main,
    marginVertical: 20
  }
});

export default styles;
