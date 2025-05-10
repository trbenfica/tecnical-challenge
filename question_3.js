const faturamentoMensal = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 }, // fim de semana ou feriado
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
];

function analisarFaturamento(dados) {
  const diasValidos = dados.filter((d) => d.valor > 0);
  const valores = diasValidos.map((d) => d.valor);

  const menor = Math.min(...valores);
  const maior = Math.max(...valores);
  const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
  const diasAcimaDaMedia = valores.filter((val) => val > media).length;

  console.log("=========== RESULTADO DA ANÁLISE ===========");
  console.log(`Menor faturamento: R$ ${menor.toFixed(2)}`);
  console.log(`Maior faturamento: R$ ${maior.toFixed(2)}`);
  console.log(
    `Média mensal (ignorando dias com valor 0): R$ ${media.toFixed(2)}`
  );
  console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

analisarFaturamento(faturamentoMensal);
