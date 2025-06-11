<template>
  <div class="login-container">
    <h1>SUPPLY AI</h1>

    <form @submit.prevent="cadastrar">
      <input v-model="nome" type="text" placeholder="Nome Completo" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="senha" type="password" placeholder="Criar Senha" required />

      <RouterLink class="link-login" to="/login">Já tem uma conta? Entrar</RouterLink>

      <button class="btn-login" type="submit">Cadastrar</button>

      <p id="mensagem-sucesso" v-if="cadastroSucesso">✅ Cadastro realizado com sucesso!</p>
    </form>

    <header>
      <img src="@/assets/log.png" alt="Logo SUPPLY AI" class="logo" />
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const nome = ref('')
const email = ref('')
const senha = ref('')
const cadastroSucesso = ref(false)

const router = useRouter()

const cadastrar = () => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {}
  const emailLower = email.value.toLowerCase()

  if (usuarios[emailLower]) {
    alert('Este e-mail já está cadastrado.')
    return
  }

  usuarios[emailLower] = {
    nome: nome.value,
    senha: senha.value
  }

  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  cadastroSucesso.value = true

  setTimeout(() => {
    router.push('/login')
  }, 2000)
}
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #000000, #1c1c1c);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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

#mensagem-sucesso {
  color: #4caf50;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
