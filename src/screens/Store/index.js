import React from "react";
import { View, Text } from "react-native";
import estilos from "./style";
import Menu from "./../../components/Menu";
import TextKeyValue from "./../../components/TextKeyValue";

function Store() {
  return (
    <>
      <View style={estilos.wrapperTitle}>
        <Text style={estilos.title}>MENU</Text>
      </View>

      <Text style={estilos.subtitle}>COMPRA 00012345</Text>
      <View>
        <Text>RESUMO DO PEDIDO</Text>
        <TextKeyValue keyLabel="Data" valueLabel="01/01/2000" />
        <TextKeyValue keyLabel="Valor" valueLabel="R$ 500,00" />
        <TextKeyValue keyLabel="Status" valueLabel="Cancelado" />
        <TextKeyValue keyLabel="Tipo de Frete" valueLabel="Correios" />
      </View>
    </>
  );
}

export default Store;
