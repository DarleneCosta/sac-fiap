import { StyleSheet } from "react-native";

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
    borderColor: "#19A7B0",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 32,
    fontFamily: "KarlaBold",
    fontWeight: "500",
    marginLeft: "30%",
    marginRight: "20%",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "KarlaBold",
    width: "100%",
    textDecorationLine: "underline",
    paddingTop: 20,
    fontWeight: "800",
  },
  card: {
    backgroundColor: "rgba(208, 237, 237, 0.5)",
    margin: 30,
    padding: 15,
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    marginBottom: 20,
    fontWeight: "900",
    fontSize: 14,
  },
  icon: {
    marginLeft: 50,
  },
});

export default styles;
