<template>
  <div>
    <header>
      <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo" />
      <h1>SUPPLY AI</h1>
      <p>Monitoramento de Estoque em Tempo Real</p>
    </header>

    <nav>
      <RouterLink to="/home">Início</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
      <RouterLink to="/suaconta">Sua conta</RouterLink>
    </nav>

    <div class="container">
      <section class="section">
        <h2>📦 Níveis de Estoque</h2>
        <p>Visualize rapidamente os níveis atuais de insumos e evite que a produção pare por falta de matéria-prima.</p>

        <table>
          <thead>
            <tr>
              <th>Matéria-prima</th>
              <th>Quantidade Atual (kg)</th>
              <th>Nível</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in stockItems" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <div class="progress-bar">
                  <div
                    class="progress"
                    :class="getLevelClass(item)"
                    :style="{ width: getPercentage(item) + '%' }"
                  >
                    {{ getPercentage(item) }}%
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="section">
        <h2>📡 Atualização Inteligente</h2>
        <p>
          Os dados são coletados em tempo real via sensores IoT conectados à nossa plataforma,
          garantindo precisão nas decisões de reabastecimento.
        </p>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const stockItems = ref([
  { name: 'Aço Inox', quantity: 120, maxQuantity: 600 },
  { name: 'Plástico ABS', quantity: 450, maxQuantity: 1000 },
  { name: 'Cobre', quantity: 800, maxQuantity: 1000 },
  { name: 'Alumínio', quantity: 300, maxQuantity: 1000 },
  { name: 'Resina Epóxi', quantity: 50, maxQuantity: 500 }
])

function getPercentage(item) {
  return Math.round((item.quantity / item.maxQuantity) * 100)
}

function getLevelClass(item) {
  const percentage = getPercentage(item)
  if (percentage <= 30) return 'low'
  if (percentage <= 60) return 'medium'
  return 'high'
}
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #444;
}

th {
  background-color: #2c2c2c;
  color: #ffa040;
}

.progress-bar {
  height: 20px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  text-align: center;
  color: #000;
  font-weight: bold;
}

.low {
  background-color: #ff3d00;
}

.medium {
  background-color: #ff6f00;
}

.high {
  background-color: #00c853;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ff6f00;
  color: #000;
  margin-top: 2rem;
}
</style>
