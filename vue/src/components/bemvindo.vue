<template>
  <div class="">
    <h1>Bem-vindo(a), <span>{{ nomeUsuario }}</span>!</h1>
    <p>Você está logado no SUPPLY AI.</p>
    <button class="btn-logout" @click="entrar">Entrar</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nomeUsuario = ref('')

const entrar = () => {
  router.push({path: '/inicio'}) // Rota de destino ao clicar
}

onMounted(() => {
  const email = localStorage.getItem('usuarioLogado')
  const usuarios = JSON.parse(localStorage.getItem('usuarios'))

  if (!email || !usuarios?.[email]) {
    router.push('/login')
  } else {
    nomeUsuario.value = usuarios[email].nome
  }
})
</script>

<style>
.container {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1c1c1c;
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
}

.btn-logout:hover {
  background-color: #f65b08;
}
</style>
