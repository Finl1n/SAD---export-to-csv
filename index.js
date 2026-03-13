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

let percentualAcumulado = 0;
const dadosProcessados = dadosComTotal.map((item) => {
  const percentualIndividual = (item.valorTotal / custoGlobal) * 100;
  percentualAcumulado += percentualIndividual;

  let faixa = "C";
  let cor = "bg-green-100 text-green-800";
  if (percentualAcumulado <= 80) {
    faixa = "A";
    cor = "bg-red-100 text-red-800";
  } else if (percentualAcumulado <= 95) {
    faixa = "B";
    cor = "bg-yellow-100 text-yellow-800";
  }

  return {
    ...item,
    percentualIndividual: percentualIndividual.toFixed(2),
    percentualAcumulado: percentualAcumulado.toFixed(2),
    faixa,
    cor,
  };
});

const labels = JSON.stringify(dadosProcessados.map((d) => d.descricao));
const valoresIndividuais = JSON.stringify(
  dadosProcessados.map((d) => d.valorTotal),
);
const valoresAcumulados = JSON.stringify(
  dadosProcessados.map((d) => d.percentualAcumulado),
);

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard SAD - Curva ABC</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-50 text-gray-800 p-8 font-sans">
    <div class="max-w-7xl mx-auto">
        <header class="mb-8 flex justify-between items-end border-b pb-4">
            <div>
                <h1 class="text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text">Sistema de Apoio à Decisão</h1>
                <p class="text-gray-500 mt-2 text-lg">Dashboard Interativo - Curva ABC de Orçamento</p>
            </div>
            <div class="text-right">
                <p class="text-sm text-gray-500 uppercase font-bold tracking-wider">Custo Global Analisado</p>
                <p class="text-3xl font-black text-gray-800">R$ ${custoGlobal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
        </header>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <h2 class="text-xl font-bold mb-4 text-gray-700">Gráfico de Pareto (80/20)</h2>
            <div class="relative h-[400px] w-full">
                <canvas id="paretoChart"></canvas>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-6 border-b border-gray-100">
                <h2 class="text-xl font-bold text-gray-700">Detalhamento dos Itens</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                            <th class="p-4 font-semibold border-b">Código</th>
                            <th class="p-4 font-semibold border-b">Descrição</th>
                            <th class="p-4 font-semibold border-b text-right">Valor Total (R$)</th>
                            <th class="p-4 font-semibold border-b text-center">% Indiv.</th>
                            <th class="p-4 font-semibold border-b text-center">% Acum.</th>
                            <th class="p-4 font-semibold border-b text-center">Faixa</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        ${dadosProcessados
                          .map(
                            (item) => `
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="p-4 text-sm font-mono text-gray-500">${item.codigo}</td>
                            <td class="p-4 text-sm font-medium text-gray-800">${item.descricao}</td>
                            <td class="p-4 text-sm font-mono text-right text-gray-600">${item.valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td class="p-4 text-sm font-mono text-center text-gray-600">${item.percentualIndividual.replace(".", ",")}%</td>
                            <td class="p-4 text-sm font-mono text-center text-gray-600">${item.percentualAcumulado.replace(".", ",")}%</td>
                            <td class="p-4 text-center">
                                <span class="px-3 py-1 rounded-full text-xs font-bold ${item.cor}">${item.faixa}</span>
                            </td>
                        </tr>
                        `,
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script>
        const ctx = document.getElementById('paretoChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ${labels},
                datasets: [
                    {
                        label: 'Percentual Acumulado (%)',
                        data: ${valoresAcumulados},
                        type: 'line',
                        borderColor: '#ef4444',
                        backgroundColor: '#ef4444',
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: '#ef4444',
                        pointRadius: 4,
                        yAxisID: 'y1',
                        order: 1
                    },
                    {
                        label: 'Valor Total (R$)',
                        data: ${valoresIndividuais},
                        backgroundColor: '#818cf8',
                        borderRadius: 4,
                        yAxisID: 'y',
                        order: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.dataset.yAxisID === 'y') {
                                    label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.raw);
                                } else {
                                    label += context.raw + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45,
                            callback: function(value, index, values) {
                                const label = this.getLabelForValue(value);
                                return label.length > 15 ? label.substring(0, 15) + '...' : label;
                            }
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Valor Financeiro (R$)'
                        },
                        grid: {
                            borderDash: [4, 4]
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        max: 105,
                        title: {
                            display: true,
                            text: 'Percentual Acumulado (%)'
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>`;

fs.writeFileSync("dashboard.html", htmlContent, "utf8");
console.log("");
console.log("=========================================");
console.log(" ✅ DASHBOARD GERADO COM SUCESSO!");
console.log("=========================================");
console.log(" -> Vá no Explorador de Arquivos do Windows");
console.log(" -> Dê dois cliques no arquivo 'dashboard.html'");
console.log(
  " -> Ele vai abrir no seu navegador com o gráfico e a tabela prontos.",
);
console.log("=========================================\n");
