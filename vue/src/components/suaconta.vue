<template>
  <div class="pagina">
    <!-- Botão Voltar -->
    <button class="voltar" @click="voltarInicio">← Início</button>

    <!-- Área da Conta -->
    <div class="container">
      <h1>Minha Conta</h1>
      <p><strong>Nome:</strong> {{ nome }}</p>
      <p><strong>Email:</strong> {{ email }}</p>

      <a class="link-redefinir" href="#" @click.prevent="abrirModalSenha">Redefinir Senha</a>
      <button class="btn" @click="abrirModalSair">Sair da Conta</button>
    </div>

    <!-- Modal Redefinir Senha -->
    <div v-if="modalSenha" class="modal">
      <div class="modal-content">
        <h2>Redefinir Senha</h2>
        <input v-model="novaSenha" type="password" placeholder="Digite a nova senha" />
        <button class="btn" @click="confirmarSenha">Confirmar</button>
        <button class="btn cancelar" @click="fecharModalSenha">Cancelar</button>
      </div>
    </div>

    <!-- Modal Sair -->
    <div v-if="modalSair" class="modal">
      <div class="modal-content">
        <h2>Tem certeza que deseja sair da conta?</h2>
        <button class="btn" @click="confirmarSair">Sim, sair</button>
        <button class="btn cancelar" @click="fecharModalSair">Cancelar</button>
      </div>
    </div>

    <!-- Notificação -->
    <div v-if="notificacao.texto" :style="{ backgroundColor: notificacao.cor }" id="notificacao">
      {{ notificacao.texto }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nome = ref('')
const email = ref('')
const novaSenha = ref('')
const modalSenha = ref(false)
const modalSair = ref(false)
const notificacao = ref({ texto: '', cor: '' })

onMounted(() => {
  const emailLogado = localStorage.getItem('usuarioLogado')
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {}

  console.log('Usuário Logado:', emailLogado)
  console.log('Usuários cadastrados:', usuarios)

  if (!emailLogado || !usuarios[emailLogado]) {
    console.warn('Redirecionando para login...')
    router.push('/')
  } else {
    nome.value = usuarios[emailLogado].nome
    email.value = emailLogado
  }
})

  

function abrirModalSenha() {
  modalSenha.value = true
}

function fecharModalSenha() {
  modalSenha.value = false
  novaSenha.value = ''
}

function confirmarSenha() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {}
  if (novaSenha.value.trim().length >= 6) {
    usuarios[email.value].senha = novaSenha.value.trim()
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    fecharModalSenha()
    mostrarNotificacao('Senha atualizada com sucesso!', '#4caf50')
  } else {
    mostrarNotificacao('Senha deve ter ao menos 6 caracteres.', '#f44336')
  }
}

function abrirModalSair() {
  modalSair.value = true
}

function fecharModalSair() {
  modalSair.value = false
}

function confirmarSair() {
  localStorage.removeItem('usuarioLogado')
  router.push('/')
}

function mostrarNotificacao(texto, cor) {
  notificacao.value = { texto, cor }
  setTimeout(() => {
    notificacao.value = { texto: '', cor: '' }
  }, 3000)
}

function voltarInicio() {
  router.push('/home')
}
</script>

<style scoped>
.pagina {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #000000, #1c1c1c);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

.voltar {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #ff6f00;
  color: #000;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 1000;
}

.voltar:hover {
  background-color: #ffa040;
}

.container {
  background-color: #121212;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 111, 0, 0.4);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.container h1 {
  color: #ff6f00;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.container p {
  font-size: 1.1rem;
  margin: 0.6rem 0;
}

.btn {
  width: 100%;
  background-color: #f65b08;
  color: #000;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 1.2rem;
}

.btn:hover {
  background-color: #f65b08;
}

.link-redefinir {
  display: block;
  color: #f65b08;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 1rem;
}

.link-redefinir:hover {
  text-decoration: underline;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(255, 111, 0, 0.4);
  width: 90%;
  max-width: 400px;
}

.modal-content h2 {
  color: #ff6f00;
  margin-bottom: 1rem;
}

.modal-content input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.modal-content .btn.cancelar {
  background-color: #555;
  color: white;
  margin-top: 0.5rem;
}

.modal-content .btn.cancelar:hover {
  background-color: #777;
}

#notificacao {
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
</style>
