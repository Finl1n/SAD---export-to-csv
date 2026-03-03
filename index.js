const fs = require("fs");

const dadosObra = [
  {
    codigo: "01-11-03-022",
    descricao: "CABO DE COBRE FLEXÍVEL 120 MM",
    qtd: 600,
    valorUnitario: 104.13,
  },
  {
    codigo: "01-11-01-041",
    descricao: "ELETRODUTO RÍGIDO ROSCÁVEL DN 110MM",
    qtd: 250,
    valorUnitario: 52.21,
  },
  {
    codigo: "64-23-74-014",
    descricao: "QUADRO GERAL DE BAIXA TENSÃO (QGBT)",
    qtd: 1,
    valorUnitario: 9417.96,
  },
  {
    codigo: "63-19-01-303",
    descricao: "FORRO ACÚSTICO DE FIBRA MINERAL",
    qtd: 180,
    valorUnitario: 67.37,
  },
  {
    codigo: "64-23-74-173",
    descricao: "APLICAÇÃO MANUAL DE PINTURA ACRÍLICA",
    qtd: 350,
    valorUnitario: 24.55,
  },
  {
    codigo: "01-19-03-008",
    descricao: "REVESTIMENTO CERÂMICO PARA PISO",
    qtd: 150,
    valorUnitario: 53.25,
  },
  {
    codigo: "62-23-65-080",
    descricao: "REGULARIZAÇÃO DE BASE PARA PISOS",
    qtd: 150,
    valorUnitario: 51.85,
  },
  {
    codigo: "64-23-74-016",
    descricao: "RODAPÉ EM POLIESTIRENO BRANCO",
    qtd: 60,
    valorUnitario: 72.28,
  },
  {
    codigo: "62-23-68-005",
    descricao: "CAIXA DE MEDIÇÃO TC PADRÃO COELBA",
    qtd: 1,
    valorUnitario: 1855.2,
  },
  {
    codigo: "63-21-05-040",
    descricao: "REJUNTAMENTO DE PISO CERÂMICO",
    qtd: 150,
    valorUnitario: 11.22,
  },
  {
    codigo: "01-18-02-002",
    descricao: "LIXAMENTO DE MASSA PARA MADEIRA",
    qtd: 200,
    valorUnitario: 7.39,
  },
  {
    codigo: "64-23-74-017",
    descricao: "EMASSAMENTO DE PAREDES INTERNAS",
    qtd: 200,
    valorUnitario: 17.12,
  },
  {
    codigo: "63-23-90-011",
    descricao: "ESCAVAÇÃO MANUAL DE VALA",
    qtd: 90,
    valorUnitario: 55.75,
  },
  {
    codigo: "66-23-68-006",
    descricao: "REATERRO DE VALA",
    qtd: 70,
    valorUnitario: 55.75,
  },
  {
    codigo: "01-11-05-042",
    descricao: "DISJUNTOR TERMOMAGNETICO 250A",
    qtd: 2,
    valorUnitario: 780.04,
  },
  {
    codigo: "01-11-08-050",
    descricao: "ARMAÇÃO SECUNDÁRIA",
    qtd: 1,
    valorUnitario: 51.19,
  },
  {
    codigo: "01-11-13-006",
    descricao: "CORDOALHA DE COBRE NU 70 MM",
    qtd: 190,
    valorUnitario: 60.79,
  },
  {
    codigo: "62-23-65-117",
    descricao: "CONECTOR CABO-HASTE",
    qtd: 14,
    valorUnitario: 28.9,
  },
  {
    codigo: "63-21-05-016",
    descricao: "HASTE DE ATERRAMENTO COPPERWELD",
    qtd: 12,
    valorUnitario: 273.24,
  },
  {
    codigo: "63-21-05-014",
    descricao: "QUADRO DE DISTRIBUIÇÃO ATÉ 64 DIVISÕES",
    qtd: 3,
    valorUnitario: 1901.24,
  },
  {
    codigo: "01-11-03-018",
    descricao: "CABO DE COBRE FLEXÍVEL 35 MM",
    qtd: 170,
    valorUnitario: 30.94,
  },
  {
    codigo: "63-21-05-057",
    descricao: "TERMINAL OU CONECTOR DE PRESSÃO 120MM2",
    qtd: 16,
    valorUnitario: 41.7,
  },
  {
    codigo: "01-11-01-039",
    descricao: "ELETRODUTO RÍGIDO 75 MM",
    qtd: 50,
    valorUnitario: 28.54,
  },
  {
    codigo: "01-11-09-006",
    descricao: "ASSENTAMENTO DE POSTE DE CONCRETO",
    qtd: 1,
    valorUnitario: 495.8,
  },
  {
    codigo: "62-23-65-141",
    descricao: "POSTE DE CONCRETO 11M",
    qtd: 1,
    valorUnitario: 2688.26,
  },
  {
    codigo: "63-21-05-027",
    descricao: "CAIXA DE PASSAGEM EM ALUMÍNIO",
    qtd: 4,
    valorUnitario: 49.88,
  },
  {
    codigo: "63-21-05-048",
    descricao: "DPS 20KA",
    qtd: 12,
    valorUnitario: 89.67,
  },
  {
    codigo: "62-23-68-040",
    descricao: "ETIQUETA ADESIVA",
    qtd: 300,
    valorUnitario: 0.8,
  },
  {
    codigo: "01-22-01-020",
    descricao: "REMOÇÃO DE FORRO DE GESSO",
    qtd: 220,
    valorUnitario: 2.62,
  },
  {
    codigo: "01-19-11-002",
    descricao: "RODAPÉ EM MARMORITE",
    qtd: 60,
    valorUnitario: 21.34,
  },
  {
    codigo: "62-23-65-118",
    descricao: "LUMINÁRIA DE SOBREPOR COM 2 LÂMPADAS",
    qtd: 25,
    valorUnitario: 244.83,
  },
  {
    codigo: "01-11-03-008",
    descricao: "CABO DE COBRE FLEXÍVEL 6 MM",
    qtd: 250,
    valorUnitario: 8.29,
  },
  {
    codigo: "01-11-03-003",
    descricao: "CABO DE COBRE FLEXÍVEL 2,5 MM",
    qtd: 750,
    valorUnitario: 3.57,
  },
  {
    codigo: "64-23-74-164",
    descricao: "PARAFUSO CABEÇA LENTILHA",
    qtd: 1800,
    valorUnitario: 0.64,
  },
  {
    codigo: "62-23-65-115",
    descricao: "BUCHA COM ARRUELA",
    qtd: 500,
    valorUnitario: 4.67,
  },
  {
    codigo: "66-23-68-038",
    descricao: "TOMADA DUPLA PARA LÓGICA RJ45",
    qtd: 27,
    valorUnitario: 62.91,
  },
  {
    codigo: "01-13-06-102",
    descricao: "VASO SANITÁRIO SIFONADO",
    qtd: 1,
    valorUnitario: 543.54,
  },
  {
    codigo: "01-13-06-062",
    descricao: "BANCADA MÁRMORE BRANCO",
    qtd: 1,
    valorUnitario: 905.09,
  },
  {
    codigo: "01-07-09-031",
    descricao: "PORTA DE ABRIR VIDRO TEMPERADO",
    qtd: 1,
    valorUnitario: 1673.8,
  },
  {
    codigo: "64-23-74-149",
    descricao: "RACK DE PISO 19 36U",
    qtd: 1,
    valorUnitario: 2096.28,
  },
];

const dadosComTotal = dadosObra
  .map((item) => ({
    ...item,
    valorTotal: item.qtd * item.valorUnitario,
  }))
  .sort((a, b) => b.valorTotal - a.valorTotal);

const custoGlobal = dadosComTotal.reduce(
  (acc, item) => acc + item.valorTotal,
  0,
);

let csvContent =
  "Código;Descrição;Qtd;Valor Unitário (R$);Valor Total (R$);% Individual;% Acumulado;Faixa ABC\n";
let percentualAcumulado = 0;

dadosComTotal.forEach((item) => {
  const percentualIndividual = (item.valorTotal / custoGlobal) * 100;
  percentualAcumulado += percentualIndividual;

  let faixa = "C";
  if (percentualAcumulado <= 80) {
    faixa = "A";
  } else if (percentualAcumulado <= 95) {
    faixa = "B";
  }

  const vUnitarioBR = item.valorUnitario.toFixed(2).replace(".", ",");
  const vTotalBR = item.valorTotal.toFixed(2).replace(".", ",");
  const pIndivBR = percentualIndividual.toFixed(2).replace(".", ",");
  const pAcumBR = percentualAcumulado.toFixed(2).replace(".", ",");

  const linha = `${item.codigo};${item.descricao};${item.qtd};${vUnitarioBR};${vTotalBR};${pIndivBR}%;${pAcumBR}%;${faixa}`;
  csvContent += linha + "\n";
});

fs.writeFileSync("Curva_ABC_SGF_Completa.csv", csvContent, "utf8");

console.log(`\n✅ Sucesso! Arquivo 'Curva_ABC_SGF_Completa.csv' gerado.`);
console.log(`💰 Custo global analisado: R$ ${custoGlobal.toFixed(2)}`);
console.log(
  `👉 DICA PARA ABRIR NO EXCEL:\n   1. Na barra lateral esquerda do VS Code, clique com o botão DIREITO no arquivo 'Curva_ABC_SGF_Completa.csv'.\n   2. Selecione a opção "Reveal in File Explorer" (ou "Revelar no Explorador de Arquivos").\n   3. Na pasta do Windows que vai abrir, dê dois cliques no arquivo para abri-lo corretamente no Excel!`,
);
