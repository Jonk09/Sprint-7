<template>
  <div>
    <header>
      <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo">
      <h1>SUPPLY AI</h1>
      <p>Escalabilidade e Estabilidade para sua Produção</p>
    </header>

    <nav>
      <a href="/home">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
      <a href="/suaconta">Sua conta</a>
    </nav>

    <div class="container">
      <section class="section">
        <h2>🚀 Escalabilidade que acompanha seu crescimento</h2>
        <p>O SUPPLY AI é projetado para crescer junto com sua empresa...</p>
        <ul>
          <li><strong>Infraestrutura escalável:</strong> suporte a múltiplas unidades...</li>
          <li><strong>Modularidade:</strong> adicione funcionalidades conforme a necessidade...</li>
          <li><strong>Previsão adaptativa:</strong> algoritmos ajustam os pedidos...</li>
          <li><strong>Cloud Computing:</strong> hospedado na nuvem...</li>
          <li><strong>Evita gargalos:</strong> alertas automáticos evitam falta...</li>
        </ul>
      </section>

      <section class="section">
        <h2>💡 Linha do Tempo de Escalabilidade</h2>
        <ul class="timeline">
          <li class="timeline-item">
            <div class="timeline-item-content">
              <h3>Fase 1: Pequenas Produções</h3>
              <p>Controle básico de estoque e previsão de demanda simples...</p>
            </div>
          </li>
          <li class="timeline-item">
            <div class="timeline-item-content">
              <h3>Fase 2: Expansão Inicial</h3>
              <p>Comece a integrar fornecedores...</p>
            </div>
          </li>
          <li class="timeline-item">
            <div class="timeline-item-content">
              <h3>Fase 3: Grande Escala</h3>
              <p>Integração com IoT, sensores para monitoramento...</p>
            </div>
          </li>
          <li class="timeline-item">
            <div class="timeline-item-content">
              <h3>Fase 4: Estabilidade e Eficiência</h3>
              <p>Operação completamente integrada...</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="section">
        <h2>📊 Gráfico de Escalabilidade</h2>
        <canvas id="scalabilityChart"></canvas>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('scalabilityChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'],
      datasets: [
        {
          label: 'Capacidade de Gestão de Estoque',
          data: [100, 300, 500, 700, 1000],
          borderColor: '#ff6f00',
          backgroundColor: 'rgba(255, 111, 0, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style scoped>
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

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.75rem;
}

.timeline {
  position: relative;
  margin: 2rem 0;
  padding: 0;
  list-style: none;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff6f00;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background-color: #ff6f00;
}

.timeline-item-content {
  background-color: #2c2c2c;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(255, 111, 0, 0.2);
  position: relative;
  margin-left: 40px;
  max-width: 75%;
}

.timeline-item-content h3 {
  color: #ff6f00;
  margin-bottom: 0.5rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ff6f00;
  color: #000;
  margin-top: 2rem;
}

canvas {
  max-width: 100%;
  height: 400px;
  margin-top: 2rem;
}
</style>