import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import TextKeyValue from "./../../components/TextKeyValue";
import { Divider, FAB, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import TimelineOrder from "./components/TimelineOrder";
import IconTemplate from "./../../components/IconTemplate";

function Store() {
  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>MENU</Text>
        <IconTemplate
          style={styles.icon}
          nameIcon="chevron-down"
          dark={true}
          size={40}
        />
      </View>

      <Text style={styles.subtitle}>COMPRA 00012345</Text>
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>RESUMO DO PEDIDO</Text>
          <TextKeyValue keyLabel="Data" valueLabel="01/01/2000" />
          <TextKeyValue keyLabel="Valor" valueLabel="R$ 500,00" />
          <TextKeyValue keyLabel="Status" valueLabel="Cancelado" />
          <TextKeyValue keyLabel="Tipo de Frete" valueLabel="Correios" />
          <Divider style={{ marginVertical: 20 }} color="#19A7B0" />
        </View>
        <Text style={styles.text}>STATUS DO PEDIDO</Text>
        <View>
          <TimelineOrder />
          <Divider style={{ marginVertical: 20 }} color="#19A7B0" />
        </View>
      </View>
      <FAB
        style={{ position: "absolute", end: 30, bottom: 56 }}
        color="green"
        icon={(props) => <Icon name="whatsapp" large {...props} />}
      />
    </>
  );
}

export default Store;
