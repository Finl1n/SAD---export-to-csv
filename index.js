const fs = require("fs");

// Base de dados (40 principais itens)
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
let contA = 0,
  contB = 0,
  contC = 0;
let valA = 0,
  valB = 0,
  valC = 0;

const dadosProcessados = dadosComTotal.map((item) => {
  const percentualIndividual = (item.valorTotal / custoGlobal) * 100;
  percentualAcumulado += percentualIndividual;

  let faixa = "C";
  let corBadge =
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
  let trHover = "hover:bg-slate-800/50";

  if (percentualAcumulado <= 80) {
    faixa = "A";
    contA++;
    valA += item.valorTotal;
    corBadge = "bg-rose-500/10 text-rose-400 border border-rose-500/20";
    trHover = "hover:bg-rose-900/10";
  } else if (percentualAcumulado <= 95) {
    faixa = "B";
    contB++;
    valB += item.valorTotal;
    corBadge = "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    trHover = "hover:bg-amber-900/10";
  } else {
    contC++;
    valC += item.valorTotal;
  }

  return {
    ...item,
    percentualIndividualRaw: percentualIndividual,
    percentualIndividual: percentualIndividual.toFixed(2).replace(".", ","),
    percentualAcumulado: percentualAcumulado.toFixed(2).replace(".", ","),
    faixa,
    corBadge,
    trHover,
  };
});

// JSONs para o Chart.js
const labelsPareto = JSON.stringify(dadosProcessados.map((d) => d.descricao));
const valoresIndividuais = JSON.stringify(
  dadosProcessados.map((d) => d.valorTotal),
);
const valoresAcumulados = JSON.stringify(
  dadosProcessados.map((d) =>
    parseFloat(d.percentualAcumulado.replace(",", ".")),
  ),
);

// Top 10 Itens para o gráfico de comparação
const top10 = dadosProcessados.slice(0, 10);
const labelsTop10 = JSON.stringify(top10.map((d) => d.descricao));
const valoresTop10 = JSON.stringify(top10.map((d) => d.valorTotal));
const percentuaisTop10 = JSON.stringify(
  top10.map((d) => d.percentualIndividualRaw),
);

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard SAD - Curva ABC</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
    </style>
</head>
<body class="bg-slate-950 text-slate-300 p-4 md:p-8 font-sans min-h-screen selection:bg-violet-500/30 selection:text-violet-200">
    <div class="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
    <div class="fixed top-[-10%] left-[-10%] w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-[1400px] mx-auto relative z-10">
        
        <header class="mb-8 flex flex-col md:flex-row md:justify-between md:items-end border-b border-slate-800 pb-6 animate-fade-in-up">
            <div>
                <h1 class="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text tracking-tight pb-1">Painel Gerencial SGF</h1>
                <p class="text-slate-400 mt-2 text-lg font-light">Análise Multidimensional • Curva ABC</p>
            </div>
            <div class="mt-6 md:mt-0 md:text-right bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
                <p class="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Custo Global Analisado</p>
                <p class="text-3xl font-black text-white tracking-tight">R$ ${custoGlobal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            <div class="lg:col-span-3 bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-slate-800 animate-fade-in-up delay-100">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-bold text-slate-200 flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full bg-violet-500"></span> Curva de Pareto Geral (80/20)
                    </h2>
                </div>
                <div class="relative h-[350px] w-full"><canvas id="paretoChart"></canvas></div>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-slate-800 animate-fade-in-up delay-200">
                <h2 class="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500"></span> Top 10 Impacto (%) vs Valor
                </h2>
                <div class="relative h-[250px] w-full"><canvas id="top10Chart"></canvas></div>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-slate-800 animate-fade-in-up delay-200 flex flex-col items-center">
                <h2 class="text-lg font-bold text-slate-200 mb-4 self-start flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-blue-500"></span> % Qtd de Itens por Faixa ABC
                </h2>
                <div class="relative h-[220px] w-full flex justify-center"><canvas id="doughnutChart"></canvas></div>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-slate-800 animate-fade-in-up delay-200">
                <h2 class="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-amber-500"></span> Valor Financeiro por Faixa
                </h2>
                <div class="relative h-[250px] w-full"><canvas id="resumoChart"></canvas></div>
            </div>
        </div>

        <div class="bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 overflow-hidden animate-fade-in-up delay-300 mb-10">
            <div class="p-6 border-b border-slate-800 bg-slate-900/80">
                <h2 class="text-xl font-bold text-slate-200">Detalhamento Analítico</h2>
            </div>
            <div class="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table class="w-full text-left border-collapse relative">
                    <thead class="sticky top-0 bg-slate-950/90 backdrop-blur-md z-10">
                        <tr class="text-slate-400 text-xs uppercase tracking-widest">
                            <th class="p-4 font-semibold border-b border-slate-800">Código</th>
                            <th class="p-4 font-semibold border-b border-slate-800">Descrição do Serviço/Material</th>
                            <th class="p-4 font-semibold border-b border-slate-800 text-right">Total (R$)</th>
                            <th class="p-4 font-semibold border-b border-slate-800 text-center">% Indiv.</th>
                            <th class="p-4 font-semibold border-b border-slate-800 text-center">% Acum.</th>
                            <th class="p-4 font-semibold border-b border-slate-800 text-center">Faixa</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/50">
                        ${dadosProcessados
                          .map(
                            (item) => `
                        <tr class="${item.trHover} transition-colors duration-200">
                            <td class="p-4 text-xs font-mono text-slate-500">${item.codigo}</td>
                            <td class="p-4 text-xs font-medium text-slate-300">${item.descricao}</td>
                            <td class="p-4 text-xs font-mono text-right text-slate-300">${item.valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                            <td class="p-4 text-xs font-mono text-center text-slate-400">${item.percentualIndividual}%</td>
                            <td class="p-4 text-xs font-mono text-center text-slate-400">${item.percentualAcumulado}%</td>
                            <td class="p-4 text-center">
                                <span class="px-2 py-1 rounded text-[10px] font-black tracking-wide ${item.corBadge}">${item.faixa}</span>
                            </td>
                        </tr>`,
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script>
        Chart.defaults.color = '#64748b';
        Chart.defaults.font.family = "ui-sans-serif, system-ui, sans-serif";
        
        // 1. Gráfico de Pareto
        const ctxPareto = document.getElementById('paretoChart').getContext('2d');
        const gradPareto = ctxPareto.createLinearGradient(0, 0, 0, 400);
        gradPareto.addColorStop(0, '#8b5cf6'); gradPareto.addColorStop(1, '#3b82f6');

        new Chart(ctxPareto, {
            type: 'bar',
            data: {
                labels: ${labelsPareto},
                datasets: [
                    { label: '% Acumulado', data: ${valoresAcumulados}, type: 'line', borderColor: '#f43f5e', backgroundColor: '#f43f5e', borderWidth: 2, pointRadius: 3, yAxisID: 'y1', order: 1 },
                    { label: 'Valor Total (R$)', data: ${valoresIndividuais}, backgroundColor: gradPareto, borderRadius: 4, yAxisID: 'y', order: 2 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { display: false } }, scales: { x: { ticks: { display: false } }, y: { type: 'linear', position: 'left', grid: { color: 'rgba(51, 65, 85, 0.2)' } }, y1: { type: 'linear', position: 'right', max: 105, grid: { display: false } } } }
        });

        // 2. Gráfico Top 10 (% vs Valor)
        const ctxTop = document.getElementById('top10Chart').getContext('2d');
        new Chart(ctxTop, {
            type: 'bar',
            data: {
                labels: ${labelsTop10},
                datasets: [
                    { label: '% Individual', data: ${percentuaisTop10}, backgroundColor: '#f43f5e', yAxisID: 'y1' },
                    { label: 'Valor Total', data: ${valoresTop10}, backgroundColor: '#f59e0b', yAxisID: 'y' }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } }, scales: { x: { ticks: { display: false } }, y: { display: false, position: 'right' }, y1: { display: true, position: 'left' } } }
        });

        // 3. Gráfico Doughnut (Qtd Itens por Faixa)
        const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
        new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Faixa A', 'Faixa B', 'Faixa C'],
                datasets: [{ data: [${contA}, ${contB}, ${contC}], backgroundColor: ['#f43f5e', '#f59e0b', '#10b981'], borderWidth: 0, hoverOffset: 4 }]
            },
            options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'right' } } }
        });

        // 4. Gráfico de Valores por Faixa
        const ctxResumo = document.getElementById('resumoChart').getContext('2d');
        new Chart(ctxResumo, {
            type: 'bar',
            data: {
                labels: ['Faixa A', 'Faixa B', 'Faixa C'],
                datasets: [{ label: 'Valor Acumulado (R$)', data: [${valA}, ${valB}, ${valC}], backgroundColor: ['#f43f5e', '#f59e0b', '#10b981'], borderRadius: 6 }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: 'rgba(51, 65, 85, 0.2)' } } } }
        });
    </script>
</body>
</html>`;

fs.writeFileSync("dashboard.html", htmlContent, "utf8");
console.log(
  "\n✅ NOVO DASHBOARD GERADO: Pareto + Gráfico Redondo + Comparações.",
);
console.log(
  "👉 Dê dois cliques em 'dashboard.html' e veja a mágica no navegador!\n",
);
