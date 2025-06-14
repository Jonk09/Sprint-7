<template>
  <div>
    <header>
      <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo" />
      <h1>SUPPLY AI</h1>
      <p>Integração de Sistemas para um Suprimento Inteligente</p>
    </header>

    <nav>
      <RouterLink to="/home">Início</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
      <RouterLink to="/suaconta">Sua conta</RouterLink>
    </nav>

    <div class="">
      <section class="section">
        <h2>🔌 Integração com Sistemas</h2>
        <p>
          A integração com ERPs, CRMs e sensores IoT permite uma visão centralizada do estoque, consumo e demandas futuras, evitando a escassez de matéria-prima e otimizando decisões de compra.
        </p>
        <ul>
          <li><strong>ERPs:</strong> Integração com sistemas como SAP, TOTVS e Bling para sincronizar pedidos, estoque e faturamento.</li>
          <li><strong>CRMs:</strong> Previsão de demanda baseada em histórico de clientes e funil de vendas.</li>
          <li><strong>IoT:</strong> Sensores monitoram em tempo real o nível de matéria-prima nos depósitos e nas linhas de produção.</li>
          <li><strong>API REST:</strong> SUPPLY AI oferece integração simples e segura com qualquer sistema que sua empresa já utilize.</li>
        </ul>
      </section>

      <section class="section flowchart">
        <h2>🔁 Fluxo de Integração SUPPLY AI</h2>
        <div class="box">Sensor IoT</div>
        <span class="arrow">➡</span>
        <div class="box">SUPPLY AI</div>
        <span class="arrow">➡</span>
        <div class="box">ERP / CRM</div>
        <span class="arrow">➡</span>
        <div class="box">Pedido Otimizado</div>
      </section>

      <section class="section">
        <h2>🎯 Resultado</h2>
        <p>Com a integração de sistemas, o SUPPLY AI garante que a sua empresa:</p>
        <ul>
          <li>Evite compras emergenciais e custos extras.</li>
          <li>Tenha previsões precisas com base em dados reais.</li>
          <li>Automatize a reposição de estoque com inteligência.</li>
          <li>Mantenha a produção ativa mesmo diante de variações no mercado.</li>
        </ul>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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

.flowchart {
  margin-top: 2rem;
  text-align: center;
}

.box {
  display: inline-block;
  background-color: #333;
  color: #ff6f00;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 111, 0, 0.3);
  font-weight: bold;
}

.arrow {
  display: inline-block;
  margin: 0 0.5rem;
  color: #ff6f00;
  font-size: 1.5rem;
  vertical-align: middle;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ff6f00;
  color: #000;
  margin-top: 2rem;
}
</style>
