<template>
  <div class="login-container">
    <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo" />
    <h1>SUPPLY AI</h1>
    <form @submit.prevent="fazerLogin" novalidate>
      <input v-model="email" type="email" placeholder="Email" required autocomplete="username" />
      <input v-model="senha" type="password" placeholder="Senha" required autocomplete="current-password" />
      
      <p v-if="erro" id="mensagem-erro" role="alert" aria-live="assertive">Email ou senha incorretos!</p>
      <p v-if="sucesso" id="mensagem-sucesso" role="alert" aria-live="assertive">Login bem-sucedido! Salvando seus dados com segurança...</p>

      <RouterLink class="link-login" to="/cadastro">Não tem uma conta? Cadastre-se</RouterLink>
      <button class="btn-login" type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const senha = ref('')
const erro = ref(false)
const sucesso = ref(false)

function fazerLogin() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {}
  const emailLower = email.value.toLowerCase()

  if (usuarios[emailLower] && usuarios[emailLower].senha === senha.value) {
    localStorage.setItem('usuarioLogado', emailLower)
    erro.value = false
    sucesso.value = true

    setTimeout(() => {
      router.push('/bemvindo')
    }, 2000)
  } else {
    sucesso.value = false
    erro.value = true
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #000000, #1c1c1c);
  color: white;
  height: 100vh;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 93px;
  height: auto;
}

.login-container {
  background-color: #121212;
  padding: 3rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 111, 0, 0.4);
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: auto;
  margin-top: 10vh;
}

.login-container h1 {
  color: #ff6f00;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.login-container input {
  width: 100%;
  padding: 0.9rem;
  margin: 0.6rem 0;
  border: none;
  border-radius: 8px;
  background-color: #2b2b2b;
  color: white;
  font-size: 1rem;
}

.login-container input::placeholder {
  color: #aaa;
}

.btn-login {
  width: 100%;
  background-color: #ff6f00;
  color: #000;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 1rem;
}

.btn-login:hover {
  background-color: #ffa040;
}

.link-login {
  margin-top: 1rem;
  display: block;
  color: #ff6f00;
  text-decoration: none;
  font-size: 0.95rem;
}

.link-login:hover {
  text-decoration: underline;
}

#mensagem-erro {
  color: #ff0000;
  margin-top: 1rem;
  font-size: 0.95rem;
}

#mensagem-sucesso {
  color: #00ff08;
  margin-top: 1rem;
  font-size: 0.95rem;
}
</style>