import { StyleSheet, View } from "react-native";
import Store from "./src/screens/Store";
import ToolBar from "./src/components/ToolBar";
import { StatusBar, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ToolBar />
      <Store />
    </SafeAreaView>
  );
}
