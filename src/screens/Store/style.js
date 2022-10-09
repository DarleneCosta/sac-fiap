import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
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
    marginTop: 32,
    marginBottom: 8,
    paddingHorizontal: "41%",
    fontSize: 20,
    lineHeight: 32,
    width: "100%",
    height: "100%",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    textDecorationLine: "underline",
    padding: 20,
  },
});

export default estilos;
