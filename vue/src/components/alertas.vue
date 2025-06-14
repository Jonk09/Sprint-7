<template>
  <div>
    <header>
      <img :src="logo" alt="Logo SUPPLY AI" class="logo" />
      <h1>SUPPLY AI</h1>
      <p>Alertas e Previsões Inteligentes</p>
    </header>

    <!-- nav FORA da div.container -->
    <nav>
      <a href="/home">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
      <a href="suaconta">Sua conta</a>
    </nav>

    <div class="">
      <section class="section">
        <h2>⚠️ Alertas de Insumos Críticos</h2>
        <div class="alert">
          🔴 Atenção: O estoque de "Polímero XZ-100" está abaixo do nível mínimo! Restam apenas 12 unidades.
        </div>
        <div class="alert">
          🟠 Aviso: "Liga Metálica 303" será insuficiente para a produção da próxima semana.
        </div>
        <div class="alert">
          🟡 Monitoramento: "Resina PL-20" em consumo acelerado — 40% acima da média do mês passado.
        </div>
      </section>

      <section class="section">
        <h2>📈 Previsões Baseadas em Consumo</h2>
        <div class="forecast">
          🔮 Estimativa: "Polímero XZ-100" se esgotará em 3 dias. Recomenda-se reposição imediata.
        </div>
        <div class="forecast">
          🔮 Projeção: Demanda por "Liga Metálica 303" aumentará 25% no próximo mês devido a novos pedidos.
        </div>
        <div class="forecast">
          🔮 Tendência: Consumo de "Resina PL-20" manterá crescimento acelerado com base nos últimos 45 dias.
        </div>
      </section>

      <section class="section">
        <h2>💡 Recomendações Inteligentes</h2>
        <ul class="recommendations">
          <li>✔ Automatize pedidos com base em alertas de estoque crítico.</li>
          <li>✔ Mapeie fornecedores alternativos para insumos prioritários.</li>
          <li>✔ Integre sensores IoT para monitorar níveis de estoque em tempo real.</li>
          <li>✔ Use inteligência preditiva para ajustar compras ao volume real de produção.</li>
        </ul>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import logo from '@/assets/log.png'



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
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
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
  box-shadow: 0 2px 5px rgba(255, 111, 0, 0.4);
}

h2 {
  color: #ff6f00;
  margin-bottom: 1rem;
}

.alert {
  background-color: #ff6f00;
  color: #000;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-weight: bold;
}

.forecast {
  background-color: #262626;
  border-left: 5px solid #ffa040;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.recommendations {
  line-height: 1.8;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ff6f00;
  color: #000;
  margin-top: 2rem;
}
</style>
