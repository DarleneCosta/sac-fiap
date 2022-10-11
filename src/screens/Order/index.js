import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import TextKeyValue from "../../components/TextKeyValue";
import { Divider, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import TimelineOrder from "./components/TimelineOrder";
import IconTemplate from "../../components/IconTemplate";
import mock from "./mock.json"
import utils from "../../utils";
function Store() {
  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Menu</Text>
        <IconTemplate
          style={styles.icon}
          nameIcon="chevron-down"
          dark={true}
          size={40}
        />
      </View>

      <Text style={styles.subtitle}>Compra {mock.order}</Text>
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>Resumo do Pedido</Text>
          <TextKeyValue keyLabel="Data" valueLabel={utils.formatDate(mock.dateCreated)} />
          <TextKeyValue keyLabel="Valor" valueLabel={`R$ ${utils.formatToBRL(mock.value)}`}/>
          <TextKeyValue keyLabel="Status" valueLabel="Cancelado" />
          <TextKeyValue keyLabel="Tipo de Frete" valueLabel="Correios" />
          <Divider style={styles.divider}/>
        </View>
        <Text style={styles.text}>Status do Pedido</Text>
        <View>
          <TimelineOrder />
          <Divider style={styles.divider}/>
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
