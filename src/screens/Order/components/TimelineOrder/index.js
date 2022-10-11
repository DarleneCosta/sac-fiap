import React from "react";
import ItemTimelineOrder from "../ItemTimelineOrder/index";

const TimelineOrder = () => {
  const statusOrder = [
    { status: "OK", text: "Pedido realizado 01/01/2020" },
    { status: "OK", text: "Pagamento aprovado" },
    { status: "NOK", text: "Erro ao Gerar Nota Fiscal" },
    { status: "", text: "Enviado" },
    { status: "", text: "Entregue" },
  ];

  return (
    <>
      {statusOrder.map((i) => (
        <ItemTimelineOrder key={i.text} status={i.status} text={i.text} />
      ))}
    </>
  );
};
export default TimelineOrder;
