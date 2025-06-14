<template>
  <div class="container">
    <h1>Bem-vindo(a), <span>{{ nomeUsuario }}</span>!</h1>
    <p>Você está logado no SUPPLY AI.</p>
    <button class="btn-logout" @click="sair">Entrar</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nomeUsuario = ref('')

function sair() {
  localStorage.removeItem('usuarioLogado')
  router.push('/home')
}

onMounted(() => {
  const email = localStorage.getItem('usuarioLogado')
  const usuarios = JSON.parse(localStorage.getItem('usuarios'))

  if (!email || !usuarios?.[email]) {
    router.push('/bemvindo')
  } else {
    nomeUsuario.value = usuarios[email].nome
  }
})
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
}

h1 {
  color: #f65b08;
}

.btn-logout {
  margin-top: 2rem;
  background-color: #f65b08;
  color: #000;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-logout:hover {
  background-color: #d14f05;
  color: #fff;
}
</style>
