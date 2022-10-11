import Order from "./src/screens/Order";
import ToolBar from "./src/components/ToolBar";
import { StatusBar, SafeAreaView } from "react-native";
import { ActivityIndicator, Stack } from "@react-native-material/core";
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla";

export default function App() {
  let [fontsLoaded] = useFonts({
    KarlaBold: Karla_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <Stack fill center spacing={4}>
        <ActivityIndicator size="large" color="#19A7B0" />
      </Stack>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ToolBar />
      <Order />
    </SafeAreaView>
  );
}
