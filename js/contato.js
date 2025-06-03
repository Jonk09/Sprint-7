    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');

    function addMessage(text, className) {
      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message', className);
      msgDiv.textContent = text;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function botResponse(input) {
      input = input.toLowerCase();

      if (input.includes('oi') || input.includes('olá')) {
        return 'Olá! Como posso ajudar você hoje?';
      }
      
      if (input.trim() === '') {
        return 'Por favor, digite algo para que eu possa ajudar.';
      }
      if (input.includes('Quantas unidades de Polímero XZ-100 ainda restam?')) {
        return 'Restam 12 unidades.';
      }
      if (input.includes('Qual insumo está com consumo 40% acima da média?')) {
        return 'A Resina PL-20.';
      }
      if (input.includes('O que pode ser feito quando o estoque está muito baixo?')) {
        return 'Automatizar os pedidos e repor o estoque.';
      }
      if (input.includes('Por que a falta de insumos gera custos mais altos?')) {
        return 'Porque obriga a empresa a fazer compras emergenciais, pagando mais caro e aumentando o custo da produção.';
      }
      if (input.includes('Como a inteligência artificial ajuda a reduzir esses custos?')) {
        return 'A IA faz previsões de consumo, evitando a falta ou excesso de estoque e ajudando no planejamento.';
      }
      if (input.includes('Quais são os principais benefícios da SUPPLY AI?')) {
        return 'Reduz custos, melhora o controle de estoque e ajuda a cumprir prazos com mais segurança.';
      }
      if (input.includes('Que tipo de dado a SUPPLY AI usa?')) {
        return 'Usa dados como: consumo passado, estoque, entregas dos fornecedores e sensores da fábrica. Esses dados ajudam a prever o que você vai precisar no futuro.';
      }
      if (input.includes('O que é simulação de cenários?')) {
        return 'É uma ferramenta que mostra o que pode acontecer se algo mudar, como atraso de fornecedor ou aumento na demanda. Assim, você se prepara antes do problema acontecer.';
      }
      if (input.includes('Como sei qual é o nível mínimo ideal de cada matéria-prima antes de gerar um alerta?')) {
        return 'A própria plataforma permite configurar os níveis mínimos para cada item. Quando chega nesse limite, ela dispara alertas automáticos para você agir a tempo.';
      }
      if (input.includes('Esses sensores IoT funcionam em qualquer tipo de ambiente (fábricas, depósitos externos, etc.)?')) {
        return 'Sim! Os sensores são resistentes e adaptáveis, podendo ser instalados em ambientes internos, externos, depósitos e linhas de produção.';
      }
      if (input.includes('A plataforma faz pedidos automáticos aos fornecedores quando detecta baixo estoque ou só gera alertas?')) {
        return 'Você escolhe! Ela pode tanto gerar alertas para aprovação manual quanto fazer pedidos automáticos aos fornecedores cadastrados, evitando atrasos.';
      }
      if (input.includes('O SUPPLY AI funciona bem mesmo quando a empresa cresce e aumenta sua produção?')) {
        return 'Sim! O SUPPLY AI é escalável e foi projetado para acompanhar o crescimento da empresa, mantendo a eficiência na gestão de suprimentos.';
      }
      if (input.includes('Quais são alguns dos recursos que o SUPPLY AI oferece conforme a empresa evolui?')) {
        return 'Ele oferece funcionalidades como previsão adaptativa, integração com IoT, controle de múltiplas unidades e fornecedores, e alertas automáticos para evitar falta de matéria-prima.';
      }
      if (input.includes('O SUPPLY AI é hospedado localmente ou na nuvem?')) {
        return 'Ele é hospedado na nuvem, garantindo estabilidade e acesso remoto em tempo real.';
      }
      if (input.includes('A integração com meu ERP ou CRM é difícil de fazer?')) {
        return 'Não! A SUPPLY AI oferece uma API REST simples, segura e bem documentada, que permite integração rápida com ERPs como SAP, TOTVS, Bling e qualquer outro sistema que sua empresa utilize.';
      }
      if (input.includes('E se meus sensores IoT apresentarem falhas? A integração continua funcionando?')) {
        return 'Sim! Mesmo que haja falhas nos sensores, o SUPPLY AI continua operando com os dados dos ERPs e CRMs. Além disso, o sistema envia alertas sobre qualquer problema nos sensores para que você corrija rapidamente.';
      }
      if (input.includes('As previsões feitas com dados dos CRMs são realmente confiáveis?')) {
        return 'Sim! As previsões combinam o histórico de vendas, o funil de vendas e o comportamento dos clientes. Isso gera análises precisas, ajudando a planejar compras e evitar tanto falta quanto excesso de estoque.';
      }
      if (input.includes('O que melhora com a conexão?')) {
        return 'O planejamento.';
      }
      if (input.includes('O que as empresas trocam?')) {
        return 'Informações';
      }
      if (input.includes('O que é reduzido?')) {
        return 'A falta de matéria-prima.';
      }

     else return 'Desculpe, ainda estou aprendendo. Pode tentar outra pergunta?';
    }

    sendBtn.addEventListener('click', () => {
      const userText = userInput.value.trim();
      if (!userText) return;

      addMessage(userText, 'user-message');
      userInput.value = '';

      setTimeout(() => {
        const botText = botResponse(userText);
        addMessage(botText, 'bot-message');
      }, 600);
    });

    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });

    whatsappBtn.addEventListener('click', () => {
      const phone = '5581985067954';
      const message = encodeURIComponent('Olá, gostaria de saber mais sobre os produtos da SUPPLY AI.');
      const url = 'https://wa.me/${phone}?text=${message}';
      window.open(url, '_blank');
    });