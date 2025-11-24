(() => {
  // Perfil - alterar manualmente aqui
  const currentUser = {
    email: "admin@agroproai.com",
    role: "adminAgroProAI" // adminAgroProAI ou user comum
  };

  // Exemplo de notícias comuns (mínimo 5)
  let newsCommon = [
    {
      id: 1,
      title: "Inovações na Agricultura Sustentável",
      banner: "https://d2yghbees9788u.cloudfront.net/agrishow/2025/04/capa-artigo-canal-digital-19-1-768x317.png",
      body: `A 30ª edição da Agrishow, maior feira de tecnologia agrícola da América Latina e uma das mais importantes do mundo, está sendo palco de discussões fundamentais sobre o futuro do agronegócio brasileiro.

Um dos destaques é o Agrishow Labs, um espaço de inovação que reúne startups, pesquisadores, investidores e líderes do setor para debater e apresentar soluções tecnológicas de ponta para a agricultura.

Com uma programação exclusiva de conteúdo, o Agrishow Labs promoveu na tarde da última segunda (28), a Palestra Magna “Uma visão sobre a história e as oportunidades do futuro na agricultura”, com a presença do ex-ministro da agricultura, Roberto Rodrigues, que compartilhou sua visão sobre os avanços e desafios da agricultura tropical sustentável, reafirmando o papel protagonista do Brasil no cenário global.

“A inovação tecnológica e a educação são pilares fundamentais para consolidar o protagonismo brasileiro na agricultura mundial sustentável”, afirma o ex-ministro.

---

Fonte: digital.agrishow.com.br`,
      topics: ["sustentavel", "inovacao"],
      likes: 20,
      userLikes: [],
      comments: [
        { user: "João", text: "Excelente notícia!" },
        { user: "Maria", text: "Muito relevante para o setor." },
        { user: "Jonas", text: "Show de bola!" }
      ],
      highlight: false
    },
    {
      id: 2,
      title: "Mercado Agrícola em Alta",
      banner: "https://www.mg.gov.br/sites/default/files/styles/w/public/noticias/2025/noticias/imagem_capa/exportacao-cafe.jpeg?itok=uT0iSe68",
      body: `As exportações do agronegócio mineiro alcançaram US$ 16,4 bilhões no acumulado de janeiro a outubro de 2025, com crescimento de 13% em relação ao mesmo período do ano passado. O café segue como o pilar das cadeias produtivas que mais exportam, seguido pelo complexo soja e sucroalcooleiro, carnes e produtos florestais. Outros segmentos, como lácteos processados e preparados alimentícios, também ampliaram a base exportadora estadual.

Já o volume embarcado somou 14 milhões de toneladas, com redução de 6,5%, na comparação com os meses de janeiro a outubro do ano anterior. Minas é o terceiro estado que mais exporta produtos do agro, atrás apenas de Mato Grosso e São Paulo, e responde por quase 13% da receita do agro nacional. Ao todo 633 diferentes produtos agropecuários mineiros foram enviados para 175 países.

Resultado mensal
Ao ser analisado separadamente, o mês de outubro alcançou US$ 1,8 bilhão e volume de 1,2 milhão de toneladas, reforçando a tendência observada no acumulado do ano de maior diversificação, aumento da competitividade e estabilidade no fluxo exportador, apesar das oscilações em mercados específicos. O desempenho se destacou como o melhor mês de outubro já registrado na série histórica mineira.
A valorização dos preços das commodities se mantém como um dos principais motivos para o bom desempenho das exportações. Além disso, os produtos do agro mineiro estão ampliando sua presença em novos mercados, contribuindo para os resultados.

Segundo a assessora técnica da Secretaria de Agricultura, Pecuária e Abastecimento (Seapa), Manoela Teixeira, houve expansão consistente em praticamente todos os grandes mercados, com destaque para as regiões Europa, Ásia, América do Sul e Oriente Médio. “Mesmo diante da redução das compras de alguns produtos pelos Estados Unidos, o agro mineiro demonstrou capacidade de reação rápida, redirecionando embarques para novos mercados”, avalia.
No período, 15 novos países iniciaram as importações dos produtos do agro de Minas, a exemplo da Bósnia, Malta, Tonga, Mongólia e Botsuana, marcando a maior diversificação de destinos da série histórica. “Essa ampliação da base de clientes é fundamental para reduzir os riscos associados à concentração geográfica”, complementa a assessora técnica Manoela Teixeira.

Café
Minas Gerais responde, sozinho, por cerca de 70% das exportações brasileiras de café, o que confirma sua liderança absoluta. O carro-chefe da pauta exportadora mantém suas cotações em alta desde o ano passado, devido à baixa oferta no mercado internacional e ao aumento do consumo mundial.
O valor registrado com as exportações mineiras de café representou pouco mais da metade da receita do agro mineiro, alcançando US$ 8,9 bilhões e 22 milhões de sacas.

Soja
O complexo soja (grãos, óleo e farelo) registrou US$ 2,8 bilhões com o embarque de quase 7 milhões de toneladas e queda aproximada de 13% e 4% respectivamente.

Sucroalcooleiro
O volume chegou a 3,9 milhões de toneladas, totalizando US$ 1,7 bilhão com queda de 19,8% na receita e 10,9% na quantidade embarcada.

Carnes
A receita do setor de carnes (bovina, suína e frango) alcançou US$ 1,5 bilhão no período, alta de 7% em relação ao mesmo período de 2024. Já o volume total ficou em 419 mil toneladas.

Produtos Florestais
Os produtos florestais (celulose, madeira e papel) alcançaram aproximadamente US$ 814 milhões (-13,8%). O volume embarcado ficou em 1,4 milhão de toneladas (-0,8%).

---

Fonte: agricultura.mg.gov.br`,
      topics: ["mercado", "tradicional"],
      likes: 18,
      userLikes: [],
      comments: [{ user: "Carlos", text: "Boa perspectiva." }],
      highlight: false
    },
    {
      id: 3,
      title: "Ponte Nova recebe Dia de Campo com foco em inovação e agricultura familiar",
      banner: "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/68d31dfd86d6f.jpg",
      body: `Nesta terça-feira, 30 de setembro, produtores rurais de Ponte Nova (MG) e região participam do Dia de Campo, evento voltado à troca de experiências e aprendizado sobre diversas cadeias produtivas. A programação inclui palestras e estações técnicas sobre cafeicultura, pecuária leiteira, piscicultura de corte e ornamental, apicultura e cultivo de feijão.

O encontro é promovido pelo Sindicato dos Produtores Rurais de Ponte Nova, em parceria com Sistema Faemg Senar, Epamig e Emater-MG, com apoio da prefeitura local.

Programação detalhada do evento
O evento gratuito será realizado no Parque de Exposições, das 9h às 15h. A abertura inclui credenciamento, café e cerimônia oficial. Às 11h, acontece a palestra “Oportunidades de mercado para agricultores familiares”, que abordará estratégias para ampliar mercados e valorizar a produção local.

No período da tarde, das 13h às 15h, os participantes poderão escolher estações técnicas de acordo com seus interesses:
Cultivo de café arábica e conilon: práticas regenerativas e conservação do solo;
Pecuária leiteira: alimentação e Programa de Assistência Técnica e Gerencial (ATeG);
Piscicultura de corte e ornamental;
Apicultura: aproveitamento dos derivados do mel;
Produção de feijão.

O evento busca aproximar produtores e instituições de pesquisa e extensão, promovendo acesso a novas tecnologias essenciais para fortalecer a agricultura familiar na região.

---

Fonte: portaldoagronegocio.com.br`,
      topics: ["familiar", "tecnologico"],
      likes: 44,
      userLikes: [],
      comments: [{ user: "Fernando", text: "Informações muito importantes para o setor. Parabéns!" },
                 { user: "Márcio", text: "Muito bom. Gostei do tom da matéria." },
                 { user: "Vitor Hugo", text: "Informação valiosa para tomada de decisões no campo." }
                ],
      highlight: false
    },
    {
      id: 4,
      title: "Biotecnologia Revoluciona a Produção",
      banner: "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/6794d51e6f986.jpg",
      body: "Uso da biotecnologia para melhorar a produtividade e sustentabilidade.",
      topics: ["biotecnologia", "sustentavel"],
      likes: 25,
      userLikes: [],
      comments: [{ user: "Ana", text: "Impactante!" }, { user: "Paulo", text: "Quero saber mais." }],
      highlight: false
    },
    {
      id: 5,
      title: "Agronegócio e Empreendedorismo",
      banner: "https://sebraemg.com.br/wp-content/uploads/2018/12/agroneg%C3%B3cio-2.jpg",
      body: "Como o empreendedorismo está transformando o agronegócio brasileiro.",
      topics: ["empreendedor", "corporativo"],
      likes: 14,
      userLikes: [],
      comments: [],
      highlight: false
    }
  ];

  // Notícias destaque (mínimo 3)
  let newsHighlight = [
    {
      id: 101,
      title: "Clima e Agricultura: Desafios Atuais",
      banner: "https://www.sicredidexis.com.br/wp-content/uploads/2024/11/Blog-3.png",
      body: "Desafios do clima para a agricultura no Brasil e estratégias de adaptação.",
      topics: ["clima", "sustentavel"],
      likes: 30,
      userLikes: [],
      comments: [{ user: "Lucas", text: "Muito importante." }],
      highlight: true
    },
    {
      id: 102,
      title: "IA no agro: tecnologia já é uma realidade no setor",
      banner: "https://s2-oglobo.glbimg.com/gXQ3N_h48Hp2UsiN9QRDEcd6EfY=/0x0:934x302/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/D/E/shOfgcTrWETELPbGSDFQ/agro-1-capa.jpg",
      body: `A Inteligência Artificial tem se consolidado como uma aliada estratégica para o agronegócio, trazendo inovações que transformam a maneira como o setor lida com os desafios diários e as incertezas climáticas. De acordo com um levantamento da Statista, plataforma global de dados e inteligência de negócios, o mercado de IA no segmento deve movimentar cerca de US$ 4,7 bilhões por ano até 2028.

Já no Brasil, segundo a pesquisa ‘A Reinvenção do Agronegócio Brasileiro’, realizada pela PwC Brasil e divulgada em abril deste ano, 78% dos CEOs do setor planejam investir na integração de IA com plataformas tecnológicas nos próximos 12 meses, um índice superior à média nacional de outros setores, que é de 69%. “Esse dado demonstra que o agronegócio brasileiro está mais atento às novas tecnologias, especialmente em um cenário marcado pelas mudanças climáticas e pela necessidade de adaptação constante. A IA oferece soluções que permitem aos produtores fazer frente aos desafios impostos por esses extremos climáticos e, ao mesmo tempo, aumentar a resiliência e a sustentabilidade da produção”, explica Henrique Galvani, que atua no segmento.

IA como alavanca de produtividade e sustentabilidade no campo
Segundo Galvani, a aplicação de IA vai muito além da automação de processos: ela representa uma nova era de inteligência no uso dos recursos. Isso inclui redução de insumos químicos, economia de água, minimização de perdas na colheita e melhorias significativas na logística e armazenagem. “Hoje já existem diversas soluções disponíveis e acessíveis, como o monitoramento por drones com análise preditiva, a recomendação automatizada de fertilizantes com base na análise de solo, e a previsão ideal de colheita com base em dados climáticos e fenológicos. Com IA, é possível desenvolver uma gestão muito mais precisa dos recursos naturais, com controle em tempo real do clima, da irrigação e do crescimento das plantas”, salienta.

Além disso, a IA tem sido cada vez mais utilizada em plataformas de climate intelligence, com modelos que ajudam produtores e cooperativas a anteciparem riscos climáticos e tomarem decisões baseadas em dados. Outro campo em expansão é o uso da IA generativa para modelar cenários de produção e precificação de commodities, apoiar o planejamento logístico e acelerar o desenvolvimento de novas sementes e bioinsumos.

---

Fonte: opresenterural.com.br`,
      topics: ["agrotecnologia", "inovacao"],
      likes: 28,
      userLikes: [],
      comments: [{ user: "Fernanda", text: "Ótima notícia!" }],
      highlight: true
    },
    {
      id: 103,
      title: "Soluções Corporativas no Agronegócio",
      banner: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_663/https://www.inova.tur.br/wp-content/uploads/2025/07/agro_v2.jpg",
      body: "Empresas do setor adotando novas práticas para sustentabilidade e eficiência.",
      topics: ["corporativo", "mercado"],
      likes: 26,
      userLikes: [],
      comments: [{ user: "Rafael", text: "Conteúdo de qualidade." }],
      highlight: true
    }
  ];

  // Combina notícias
  let allNews = [...newsCommon, ...newsHighlight];

  // Estado da paginação
  const pageSize = 3;
  let currentPage = 1;
  let filteredNews = [...newsCommon];

  // Elementos DOM
  const newsListEl = document.getElementById("newsList");
  const carouselEl = document.getElementById("carousel");
  const searchInput = document.getElementById("searchInput");
  const filterTopic = document.getElementById("filterTopic");
  const btnAddNews = document.getElementById("btnAddNews");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const pageIndicator = document.getElementById("pageIndicator");

  // Lista de tópicos disponíveis
  const availableTopics = [
    "sustentavel", "inovacao", "mercado", "tradicional", "familiar", 
    "tecnologico", "biotecnologia", "empreendedor", "corporativo", 
    "clima", "agrotecnologia"
  ];

  // Criar modais dinamicamente se não existirem
  function createModals() {
    if (!document.getElementById("modalNewsForm")) {
      const modalNewsFormHTML = `
        <div id="modalNewsForm" class="modal" aria-hidden="true" style="display: none;">
          <div class="modal-content large-modal">
            <div class="modal-header">
              <h2 id="formTitle">Cadastrar Nova Notícia</h2>
              <button type="button" id="closeNewsForm" class="close-btn">&times;</button>
            </div>
            <form id="newsForm">
              <input type="hidden" id="newsId">
              <div class="form-group">
                <label for="bannerInput">URL da Imagem:</label>
                <input type="url" id="bannerInput" required>
                <img id="previewImage" alt="Preview da imagem" style="display: none; max-width: 100%; max-height: 200px; margin-top: 10px;">
              </div>
              <div class="form-group">
                <label for="topicsCheckbox">Tópicos (máx. 3):</label>
                <div id="topicsCheckbox" class="topics-checkbox-group">
                  ${availableTopics.map(topic => 
                    `<label class="topic-checkbox">
                      <input type="checkbox" value="${topic}">
                      <span>${topic.charAt(0).toUpperCase() + topic.slice(1)}</span>
                    </label>`
                  ).join('')}
                </div>
                <small>Selecione até 3 tópicos</small>
              </div>
              <div class="form-group">
                <label for="titleInput">Título (máx. 50 caracteres):</label>
                <input type="text" id="titleInput" maxlength="50" required>
                <small><span id="charCount">0</span>/50 caracteres</small>
              </div>
              <div class="form-group">
                <label for="bodyInput">Assunto:</label>
                <textarea id="bodyInput" rows="6" required></textarea>
              </div>
              <div class="modal-actions">
                <button type="button" id="btnCancelNews">Cancelar</button>
                <button type="submit" id="btnSubmitNews">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      `;

      const modalShareHTML = `
        <div id="modalShare" class="modal" aria-hidden="true" style="display: none;">
          <div class="modal-content share-modal-content">
            <div class="modal-header">
              <h2>Compartilhar Notícia</h2>
              <button type="button" id="btnCloseShare" class="close-btn">&times;</button>
            </div>
            <div class="form-group" style="text-align: center;">
              <label style="text-align: center; display: block; margin-bottom: 10px;">Link para compartilhar:</label>
              <input type="text" id="shareUrl" readonly class="share-url-input">
            </div>
            <div class="share-buttons">
              <button type="button" class="share-btn whatsapp" id="btnShareWhatsApp" title="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </button>
              <button type="button" class="share-btn facebook" id="btnShareFacebook" title="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button type="button" class="share-btn twitter" id="btnShareTwitter" title="Twitter">
                <i class="fa-brands fa-twitter"></i>
              </button>
              <button type="button" class="share-btn linkedin" id="btnShareLinkedIn" title="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </button>
              <button type="button" class="share-btn copy" id="btnCopyLink" title="Copiar Link">
                <i class="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalNewsFormHTML);
      document.body.insertAdjacentHTML('beforeend', modalShareHTML);
      
      // Configurar limite de checkboxes
      setupCheckboxLimiter();
    }
  }

  // Configurar limite de checkboxes para tópicos
  function setupCheckboxLimiter() {
    const checkboxes = document.querySelectorAll('#topicsCheckbox input[type="checkbox"]');
    const maxSelection = 3;
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const checkedCount = document.querySelectorAll('#topicsCheckbox input[type="checkbox"]:checked').length;
        
        if (checkedCount >= maxSelection) {
          checkboxes.forEach(cb => {
            if (!cb.checked) {
              cb.closest('.topic-checkbox').classList.add('disabled');
              cb.disabled = true;
            }
          });
        } else {
          checkboxes.forEach(cb => {
            cb.closest('.topic-checkbox').classList.remove('disabled');
            cb.disabled = false;
          });
        }
      });
    });
  }

  // Mostrar botão de cadastro só para admin
  if (currentUser.role === "adminAgroProAI") {
    btnAddNews.style.display = "inline-block";
  }

  // Função para criar tags de tópico
  function createTopicTags(topics, isHighlight = false) {
    const container = document.createElement("div");
    container.className = isHighlight ? "highlight-topics" : "news-topics";
    topics.forEach(topic => {
      const span = document.createElement("span");
      span.className = isHighlight ? "highlight-topic-tag" : "news-topic-tag";
      span.textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
      container.appendChild(span);
    });
    return container;
  }

  // Renderizar notícias comuns (página atual)
  function renderNewsList() {
    newsListEl.innerHTML = "";
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageItems = filteredNews.slice(start, end);

    if (pageItems.length === 0) {
      newsListEl.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
      pageIndicator.textContent = "0 / 0";
      prevPageBtn.disabled = true;
      nextPageBtn.disabled = true;
      return;
    }

    pageItems.forEach(news => {
      const card = createNewsCard(news, false);
      newsListEl.appendChild(card);
    });

    // Atualizar paginação
    const totalPages = Math.ceil(filteredNews.length / pageSize);
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
  }

  // Renderizar notícias destaque
  function renderHighlightNews() {
    carouselEl.innerHTML = "";
    newsHighlight.forEach(news => {
      const card = createNewsCard(news, true);
      carouselEl.appendChild(card);
    });
  }

  // Criar card de notícia
  function createNewsCard(news, isHighlight) {
    const card = document.createElement("article");
    card.className = isHighlight ? "highlight-card" : "news-card";
    card.tabIndex = 0;
    card.setAttribute("data-id", news.id);

    const img = document.createElement("img");
    img.src = news.banner;
    img.alt = `Imagem da notícia: ${news.title}`;

    const info = document.createElement("div");
    info.className = isHighlight ? "highlight-info" : "news-info";

    const title = document.createElement("h3");
    title.className = isHighlight ? "highlight-title" : "news-title";
    title.textContent = news.title;

    const topics = createTopicTags(news.topics, isHighlight);

    const actions = document.createElement("div");
    actions.className = "news-actions";

    const btnLike = document.createElement("button");
    btnLike.className = `btn-like ${news.userLikes.includes(currentUser.email) ? 'liked' : ''}`;
    btnLike.type = "button";
    btnLike.title = "Curtir";
    btnLike.innerHTML = `<i class="${news.userLikes.includes(currentUser.email) ? 'fa-solid' : 'fa-regular'} fa-thumbs-up"></i> ${news.likes}`;

    const btnComment = document.createElement("button");
    btnComment.className = "btn-comment";
    btnComment.type = "button";
    btnComment.title = "Comentar";
    btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${news.comments.length}`;

    const btnShare = document.createElement("button");
    btnShare.className = "btn-share";
    btnShare.type = "button";
    btnShare.title = "Compartilhar";
    btnShare.innerHTML = `<i class="fa-solid fa-share-nodes"></i>`;

    actions.append(btnLike, btnComment, btnShare);

    if (currentUser.role === "adminAgroProAI") {
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn-edit";
      btnEdit.type = "button";
      btnEdit.title = "Editar";
      btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

      const btnDelete = document.createElement("button");
      btnDelete.className = "btn-delete";
      btnDelete.type = "button";
      btnDelete.title = "Excluir";
      btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;

      actions.append(btnEdit, btnDelete);
    }

    info.append(title, topics, actions);
    card.append(img, info);
    return card;
  }

  // Filtrar notícias conforme busca e tópico
  function applyFilters() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedTopic = filterTopic.value;

    filteredNews = newsCommon.filter(news => {
      const matchesTopic = selectedTopic ? news.topics.includes(selectedTopic) : true;
      const matchesSearch = news.title.toLowerCase().includes(searchText);
      return matchesTopic && matchesSearch;
    });

    currentPage = 1;
    renderNewsList();
  }

  // Navegação paginação
  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderNewsList();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredNews.length / pageSize);
    if (currentPage < totalPages) {
      currentPage++;
      renderNewsList();
    }
  });

  // Eventos filtros
  searchInput.addEventListener("input", () => {
    applyFilters();
  });
  filterTopic.addEventListener("change", () => {
    applyFilters();
  });

  // Modal notícia
  const modalNews = document.getElementById("modalNews");
  const modalTitle = document.getElementById("modalTitle");
  const modalBanner = document.getElementById("modalBanner");
  const modalBody = document.getElementById("modalBody");
  const commentsList = document.getElementById("commentsList");
  const commentInput = document.getElementById("commentInput");
  const btnAddComment = document.getElementById("btnAddComment");
  let currentModalNewsId = null;

  // Abrir modal notícia completo
  function openNewsModal(id) {
    const news = allNews.find(n => n.id === id);
    if (!news) return;
    currentModalNewsId = id;
    modalTitle.textContent = news.title;
    modalBanner.src = news.banner;
    modalBanner.alt = `Imagem da notícia: ${news.title}`;
    modalBody.textContent = news.body;
    renderComments(news.comments);
    commentInput.value = "";
    modalNews.setAttribute("aria-hidden", "false");
    modalNews.style.display = "flex";
    commentInput.focus();
  }

  // Fechar modal notícia
  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", closeNewsModal);
  modalNews.addEventListener("click", e => {
    if (e.target === modalNews) closeNewsModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modalNews.getAttribute("aria-hidden") === "false") {
      closeNewsModal();
    }
  });

  function closeNewsModal() {
    modalNews.setAttribute("aria-hidden", "true");
    modalNews.style.display = "none";
    currentModalNewsId = null;
  }

  // Renderizar comentários no modal
  function renderComments(comments) {
    commentsList.innerHTML = "";
    if (comments.length === 0) {
      commentsList.innerHTML = "<p>Nenhum comentário ainda.</p>";
      return;
    }
    comments.forEach(c => {
      const p = document.createElement("p");
      p.textContent = `${c.user}: ${c.text}`;
      commentsList.appendChild(p);
    });
  }

  // Adicionar comentário
  btnAddComment.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text || currentModalNewsId === null) return;

    const news = allNews.find(n => n.id === currentModalNewsId);
    if (!news) return;

    news.comments.push({ user: currentUser.email.split("@")[0], text });
    renderComments(news.comments);
    updateNewsCounters(news.id);
    commentInput.value = "";
  });

  // Atualiza visual dos contadores de likes e comentários em cards
  function updateNewsCounters(newsId) {
    const news = allNews.find(n => n.id === newsId);
    if (!news) return;

    // Atualiza na lista comum
    let card = newsListEl.querySelector(`.news-card[data-id="${newsId}"]`);
    if (card) {
      const btnLike = card.querySelector(".btn-like");
      const btnComment = card.querySelector(".btn-comment");
      if (btnLike) {
        btnLike.className = `btn-like ${news.userLikes.includes(currentUser.email) ? 'liked' : ''}`;
        btnLike.innerHTML = `<i class="${news.userLikes.includes(currentUser.email) ? 'fa-solid' : 'fa-regular'} fa-thumbs-up"></i> ${news.likes}`;
      }
      if (btnComment) btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${news.comments.length}`;
    }
    // Atualiza na lista destaque
    card = carouselEl.querySelector(`.highlight-card[data-id="${newsId}"]`);
    if (card) {
      const btnLike = card.querySelector(".btn-like");
      const btnComment = card.querySelector(".btn-comment");
      if (btnLike) {
        btnLike.className = `btn-like ${news.userLikes.includes(currentUser.email) ? 'liked' : ''}`;
        btnLike.innerHTML = `<i class="${news.userLikes.includes(currentUser.email) ? 'fa-solid' : 'fa-regular'} fa-thumbs-up"></i> ${news.likes}`;
      }
      if (btnComment) btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${news.comments.length}`;
    }
  }

  // Função para curtir/descurtir notícia
  function toggleLikeNews(id) {
    const news = allNews.find(n => n.id === id);
    if (!news) return;

    const userIndex = news.userLikes.indexOf(currentUser.email);
    
    if (userIndex === -1) {
      // Curtir
      news.likes++;
      news.userLikes.push(currentUser.email);
    } else {
      // Descurtir
      news.likes--;
      news.userLikes.splice(userIndex, 1);
    }
    
    updateNewsCounters(id);
    
    // Feedback visual
    const cards = document.querySelectorAll(`[data-id="${id}"]`);
    cards.forEach(card => {
      const btnLike = card.querySelector(".btn-like");
      if (btnLike) {
        btnLike.classList.add("liked-animation");
        setTimeout(() => btnLike.classList.remove("liked-animation"), 300);
      }
    });
  }

  // Função para abrir modal de cadastro
  function openAddNewsModal() {
    const formTitle = document.getElementById("formTitle");
    
    formTitle.textContent = "Cadastrar Nova Notícia";
    document.getElementById("newsForm").reset();
    document.getElementById("newsId").value = "";
    document.getElementById("previewImage").style.display = "none";
    document.getElementById("charCount").textContent = "0";
    
    // Limpar checkboxes
    const checkboxes = document.querySelectorAll('#topicsCheckbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
      checkbox.closest('.topic-checkbox').classList.remove('disabled');
      checkbox.disabled = false;
    });
    
    const modal = document.getElementById("modalNewsForm");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    document.getElementById("titleInput").focus();
  }

  // Função para abrir modal de edição
  function openEditNewsModal(id) {
    const news = allNews.find(n => n.id === id);
    if (!news) return;

    const formTitle = document.getElementById("formTitle");
    formTitle.textContent = "Editar Notícia";
    
    document.getElementById("newsId").value = news.id;
    document.getElementById("bannerInput").value = news.banner;
    
    // Limpar seleções anteriores
    const checkboxes = document.querySelectorAll('#topicsCheckbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
      checkbox.closest('.topic-checkbox').classList.remove('disabled');
      checkbox.disabled = false;
    });
    
    // Selecionar tópicos da notícia
    news.topics.forEach(topic => {
      const checkbox = document.querySelector(`#topicsCheckbox input[value="${topic}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
    
    // Aplicar limite de seleção
    const checkedCount = document.querySelectorAll('#topicsCheckbox input[type="checkbox"]:checked').length;
    if (checkedCount >= 3) {
      checkboxes.forEach(cb => {
        if (!cb.checked) {
          cb.closest('.topic-checkbox').classList.add('disabled');
          cb.disabled = true;
        }
      });
    }
    
    document.getElementById("titleInput").value = news.title;
    document.getElementById("bodyInput").value = news.body;
    document.getElementById("charCount").textContent = news.title.length;
    
    // Preview da imagem atual
    const previewImage = document.getElementById("previewImage");
    previewImage.style.display = "block";
    previewImage.src = news.banner;
    previewImage.alt = `Preview: ${news.title}`;

    const modal = document.getElementById("modalNewsForm");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    document.getElementById("titleInput").focus();
  }

  // Função para fechar modal de formulário
  function closeNewsFormModal() {
    const modal = document.getElementById("modalNewsForm");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }

  // Função para abrir modal de compartilhar
  function openShareModal(id) {
    const news = allNews.find(n => n.id === id);
    if (!news) return;

    document.getElementById("shareUrl").value = `${window.location.origin}/noticia/${id}`;
    
    const modal = document.getElementById("modalShare");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    document.getElementById("shareUrl").select();
  }

  // Função para fechar modal de compartilhar
  function closeShareModal() {
    const modal = document.getElementById("modalShare");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }

  // Função para excluir notícia
  function deleteNews(id) {
    if (!confirm("Tem certeza que deseja excluir esta notícia?")) return;

    // Remover das arrays usando filter
    allNews = allNews.filter(n => n.id !== id);
    newsCommon = newsCommon.filter(n => n.id !== id);
    newsHighlight = newsHighlight.filter(n => n.id !== id);
    filteredNews = filteredNews.filter(n => n.id !== id);

    // Re-renderizar
    renderNewsList();
    renderHighlightNews();
  }

  // Event Listeners para os botões de ação - CORRIGIDO
  document.addEventListener("click", function(e) {
    const card = e.target.closest(".news-card, .highlight-card");
    if (!card) return;

    const newsId = parseInt(card.dataset.id);

    // Curtir/Descurtir
    if (e.target.closest(".btn-like")) {
      e.preventDefault();
      e.stopPropagation();
      toggleLikeNews(newsId);
    }
    // Comentar
    else if (e.target.closest(".btn-comment")) {
      e.preventDefault();
      e.stopPropagation();
      openNewsModal(newsId);
    }
    // Compartilhar
    else if (e.target.closest(".btn-share")) {
      e.preventDefault();
      e.stopPropagation();
      openShareModal(newsId);
    }
    // Editar (apenas admin)
    else if (e.target.closest(".btn-edit")) {
      e.preventDefault();
      e.stopPropagation();
      openEditNewsModal(newsId);
    }
    // Excluir (apenas admin)
    else if (e.target.closest(".btn-delete")) {
      e.preventDefault();
      e.stopPropagation();
      deleteNews(newsId);
    }
    // Abrir notícia (clique no card)
    else if (!e.target.closest(".news-actions")) {
      e.preventDefault();
      e.stopPropagation();
      openNewsModal(newsId);
    }
  });

  // Contador de caracteres para o título
  document.addEventListener("input", function(e) {
    if (e.target.id === "titleInput") {
      const charCount = document.getElementById("charCount");
      charCount.textContent = e.target.value.length;
      
      if (e.target.value.length >= 45) {
        charCount.classList.add('char-count-warning');
      } else {
        charCount.classList.remove('char-count-warning');
      }
    }
  });

  // Submit do formulário de notícia
  document.addEventListener("submit", function(e) {
    if (e.target.id === "newsForm") {
      e.preventDefault();
      
      const id = document.getElementById("newsId").value ? parseInt(document.getElementById("newsId").value) : Date.now();
      const banner = document.getElementById("bannerInput").value.trim();
      const checkboxes = document.querySelectorAll('#topicsCheckbox input[type="checkbox"]:checked');
      const topics = Array.from(checkboxes).map(checkbox => checkbox.value);
      const title = document.getElementById("titleInput").value.trim();
      const body = document.getElementById("bodyInput").value.trim();

      if (!banner || !title || !body || topics.length === 0) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      if (topics.length > 3) {
        alert("Por favor, selecione no máximo 3 tópicos.");
        return;
      }

      const newsData = {
        id,
        title,
        banner,
        body,
        topics,
        likes: 0,
        userLikes: [],
        comments: [],
        highlight: false
      };

      if (document.getElementById("newsId").value) {
        // Editar notícia existente
        const index = allNews.findIndex(n => n.id === id);
        if (index !== -1) {
          // Manter likes e comentários existentes
          newsData.likes = allNews[index].likes;
          newsData.userLikes = allNews[index].userLikes;
          newsData.comments = allNews[index].comments;
          newsData.highlight = allNews[index].highlight;
          
          allNews[index] = newsData;
          
          // Atualizar nas arrays específicas
          const commonIndex = newsCommon.findIndex(n => n.id === id);
          if (commonIndex !== -1) newsCommon[commonIndex] = newsData;
          
          const highlightIndex = newsHighlight.findIndex(n => n.id === id);
          if (highlightIndex !== -1) newsHighlight[highlightIndex] = newsData;
          
          const filteredIndex = filteredNews.findIndex(n => n.id === id);
          if (filteredIndex !== -1) filteredNews[filteredIndex] = newsData;
        }
      } else {
        // Adicionar nova notícia
        allNews.push(newsData);
        newsCommon.push(newsData);
        filteredNews.push(newsData);
      }

      // Re-renderizar e fechar modal
      renderNewsList();
      renderHighlightNews();
      applyFilters();
      closeNewsFormModal();
    }
  });

  // Preview da imagem
  document.addEventListener("input", function(e) {
    if (e.target.id === "bannerInput") {
      const previewImage = document.getElementById("previewImage");
      if (e.target.value) {
        previewImage.style.display = "block";
        previewImage.src = e.target.value;
        previewImage.alt = "Preview da imagem";
      } else {
        previewImage.style.display = "none";
        previewImage.src = "";
      }
    }
  });

  // Cancelar formulário
  document.addEventListener("click", function(e) {
    if (e.target.id === "btnCancelNews" || e.target.id === "closeNewsForm") {
      closeNewsFormModal();
    }
  });

  // Fechar modal de formulário com clique fora
  document.addEventListener("click", function(e) {
    if (e.target.id === "modalNewsForm") {
      closeNewsFormModal();
    }
    if (e.target.id === "modalShare") {
      closeShareModal();
    }
  });

  // Fechar modais com ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      if (document.getElementById("modalNewsForm")?.getAttribute("aria-hidden") === "false") {
        closeNewsFormModal();
      }
      if (document.getElementById("modalShare")?.getAttribute("aria-hidden") === "false") {
        closeShareModal();
      }
    }
  });

  // Compartilhar nas redes sociais
  function setupShareButtons() {
    // WhatsApp
    document.getElementById('btnShareWhatsApp').addEventListener('click', function() {
      const shareUrl = document.getElementById('shareUrl').value;
      const newsId = shareUrl.split('/').pop();
      const news = allNews.find(n => n.id == newsId);
      const text = news ? encodeURIComponent(`Confira esta notícia: ${news.title}`) : '';
      const url = encodeURIComponent(shareUrl);
      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    });

    // Facebook
    document.getElementById('btnShareFacebook').addEventListener('click', function() {
      const shareUrl = encodeURIComponent(document.getElementById('shareUrl').value);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
    });

    // Twitter
    document.getElementById('btnShareTwitter').addEventListener('click', function() {
      const shareUrl = document.getElementById('shareUrl').value;
      const newsId = shareUrl.split('/').pop();
      const news = allNews.find(n => n.id == newsId);
      const text = news ? encodeURIComponent(`Confira: ${news.title}`) : '';
      const url = encodeURIComponent(shareUrl);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    });

    // LinkedIn
    document.getElementById('btnShareLinkedIn').addEventListener('click', function() {
      const shareUrl = encodeURIComponent(document.getElementById('shareUrl').value);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
    });

    // Copiar Link
    document.getElementById('btnCopyLink').addEventListener('click', function() {
      const shareUrl = document.getElementById('shareUrl');
      shareUrl.select();
      shareUrl.setSelectionRange(0, 99999);
      
      navigator.clipboard.writeText(shareUrl.value).then(() => {
        alert('Link copiado para a área de transferência!');
      }).catch(() => {
        document.execCommand('copy');
        alert('Link copiado para a área de transferência!');
      });
    });

    // Fechar modal de compartilhar
    document.getElementById('btnCloseShare').addEventListener('click', closeShareModal);
  }

  // Botão de adicionar notícia (para admin)
  btnAddNews.addEventListener("click", openAddNewsModal);

  // Inicializa modais e renderiza
  createModals();
  setupShareButtons();
  renderNewsList();
  renderHighlightNews();
  applyFilters();
})();