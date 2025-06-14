<template>
  <div>
    <header>
      <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo" />
      <h1>SUPPLY AI</h1>
      <p>Redução de Custos na Gestão de Suprimentos</p>
    </header>

    <nav>
      <a href="/home">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
      <a href="/suaconta">Sua conta</a>
    </nav>

    <div class="">
      <section class="section">
        <h2>📉 Desafio: Custos Altos com Falta de Insumos</h2>
        <div class="highlight">
          Quando insumos acabam de forma inesperada, empresas recorrem a compras emergenciais,
          aumentando o custo final da produção e comprometendo os prazos.
        </div>
      </section>

      <section class="section">
        <h2>💡 Estratégias de Redução de Custos</h2>
        <ul>
          <li>🔍 <strong>Monitoramento de Consumo:</strong> Identifique padrões e evite desperdícios com alertas de uso fora do normal.</li>
          <li>📅 <strong>Compras Planejadas:</strong> Negocie com antecedência com fornecedores e reduza custos com frete urgente.</li>
          <li>🧠 <strong>IA para Previsões:</strong> Use algoritmos para prever necessidades e evitar estoques desnecessários.</li>
          <li>⚙ <strong>Integração com Sistemas:</strong> Elimine retrabalho, sincronize dados de compras e estoques em tempo real.</li>
          <li>🛠 <strong>Manutenção Preventiva:</strong> Reduza paradas e perdas por falhas nos insumos ou materiais.</li>
        </ul>
      </section>

      <section class="section">
        <h2>🎯 Resultados Esperados</h2>
        <ul>
          <li>✅ Redução de até 30% com compras emergenciais.</li>
          <li>✅ Mais segurança no abastecimento e no planejamento de produção.</li>
          <li>✅ Melhora significativa no cumprimento de prazos com clientes.</li>
          <li>✅ Menor dependência de poucos fornecedores.</li>
        </ul>
      </section>

      <section class="section">
        <h2>🚀 SUPPLY AI na Prática</h2>
        <div class="highlight">
          A solução SUPPLY AI é pensada para PMEs que precisam de um sistema acessível, inteligente e fácil de implementar. Com dashboards interativos, alertas automáticos e módulos escaláveis, sua empresa economiza tempo e dinheiro desde o primeiro dia.
        </div>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
// Código JS futuro pode ser adicionado aqui
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
  color: #f65b08;
  margin-bottom: 1rem;
}

.highlight {
  background-color: #262626;
  border-left: 5px solid #f65b08;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

ul {
  line-height: 1.8;
  padding-left: 1.5rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #f65b08;
  color: #000;
  margin-top: 2rem;
}
</style>