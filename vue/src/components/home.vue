<template>
  <div>
    <header>
      <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo" />
      <h1>SUPPLY AI</h1>
      <p>Inovação que mantém sua produção em movimento</p>
    </header>

    <nav>
      <a href="/sobre.vue">Sobre</a>
      <a href="/contato.vue">Contato</a>
      <a href="/suaconta.vue">Sua conta</a>
    </nav>

    <div class="container">
      <section id="beneficios" class="section">
        <div class="btn-group">
          <button @click="goTo('alertas.vue')">📢 Alertas e Previsões Inteligentes</button>
          <button @click="goTo('reducao.vue')">💰 Redução de Custos</button>
          <button @click="goTo('decisoes.vue')">📊 Decisões com Dados</button>
          <button @click="goTo('estoque.vue')">📦 Estoque em Tempo Real</button>
          <button @click="goTo('escalabilidade.vue')">🚀 Escalabilidade</button>
          <button @click="goTo('integracao.vue')">🔌 Integração com Sistemas</button>
          <button @click="goTo('conexao.vue')">🤝 Conexão entre Empresas</button>
        </div>
      </section>
    </div>

    <footer>
      <p>&copy; 2025 supplyai. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
function logout() {
  localStorage.removeItem('usuarioLogado')
}

function goTo(page) {
  window.location.href = page
}
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
  align-items: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.btn-logout {
  background-color: #ff6f00;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.btn-logout:hover {
  background-color: #ffa040;
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
  box-shadow: 0 2px 5px rgba(58, 25, 9, 0.2);
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

button {
  background-color: #f65b08;
  color: #ffffff;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ffa040;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ff6f00;
  color: #000;
  margin-top: 2rem;
}
</style>
