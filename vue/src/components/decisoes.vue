<template>
  <div>
    <header>
      <img src="../img/log.png" alt="Logo SUPPLY AI" class="logo" />
      <h1>SUPPLY AI</h1>
      <p>Decisões Inteligentes Baseadas em Dados</p>
    </header>

    <nav>
      <a href="/home">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
      <a href="/suaconta">Sua conta</a>
    </nav>

    <div class="">
      <section class="section">
        <h2>📊 A Importância dos Dados</h2>
        <div class="highlight">
          Tomar decisões com base em dados evita erros de previsão, reduz desperdícios e garante que sua produção não pare por falta de insumos.
        </div>
      </section>

      <section class="section">
        <h2>📈 Ferramentas de Apoio à Decisão</h2>
        <ul>
          <li>📅 <strong>Histórico de Consumo:</strong> Analise padrões para prever quando e quanto comprar.</li>
          <li>📍 <strong>Mapeamento de Fornecedores:</strong> Identifique pontos de risco e fornecedores alternativos com base em dados de performance.</li>
          <li>🔁 <strong>Dashboard em Tempo Real:</strong> Acompanhe estoque, demanda e previsão com gráficos atualizados.</li>
          <li>📉 <strong>Simulação de Cenários:</strong> Avalie o impacto de diferentes decisões e prepare-se para imprevistos.</li>
        </ul>
      </section>

      <section class="section">
        <h2>🎯 Vantagens das Decisões com Dados</h2>
        <ul>
          <li>✔ Redução de erros operacionais e compras desnecessárias.</li>
          <li>✔ Maior controle sobre o fluxo de materiais e a produção.</li>
          <li>✔ Melhora no relacionamento com fornecedores com base em dados de entrega e qualidade.</li>
          <li>✔ Tomada de decisão mais rápida e segura, mesmo em cenários de crise.</li>
        </ul>
      </section>

      <section class="section">
        <h2>📊 Gráfico de Consumo e Previsão de Matéria-prima</h2>
        <div class="chart-container">
          <canvas id="consumoChart"></canvas>
        </div>
      </section>

      <section class="section">
        <h2>🔍 SUPPLY AI como Parceiro de Decisão</h2>
        <div class="highlight">
          A plataforma SUPPLY AI oferece dashboards interativos, análise preditiva e integração com sistemas já existentes (ERP, CRM, IoT), ajudando você a transformar dados em decisões práticas e eficazes.
        </div>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>

import { onMounted } from 'vue';
import Chart from 'chart.js/auto';


onMounted(() => {
  const ctx = document.getElementById('consumoChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
        {
          label: 'Consumo Real (kg)',
          data: [500, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100, 1200],
          backgroundColor: '#ff6f00',
          borderColor: '#ff3d00',
          borderWidth: 1,
        },
        {
          label: 'Previsão de Consumo (kg)',
          data: [480, 590, 640, 690, 730, 780, 830, 880, 930, 980, 1050, 1150],
          backgroundColor: '#ffa040',
          borderColor: '#ff6f00',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 100,
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' kg';
            },
          },
        },
      },
    },
  });
  
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(to right, #000000, #000000);
  color: #f5f5f5;
}

header {
  background-color: #000000;
  color: #ffffff;
  padding: 1.5rem;
  text-align: center;
  position: relative;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 93px;
  height: auto;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #f65b08;
  padding: 0.75rem;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.container {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.section {
  margin-bottom: 2rem;
  background: #1c1c1c;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(255, 111, 0, 0.2);
}

h2 {
  color: #ff6f00;
  margin-bottom: 1rem;
}

.highlight {
  background-color: #262626;
  border-left: 5px solid #ffa040;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

ul {
  padding-left: 1.5rem;
  line-height: 1.8;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ff6f00;
  color: #000;
  margin-top: 2rem;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
}
</style>