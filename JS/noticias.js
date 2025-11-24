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
      banner: "https://picsum.photos/id/1011/400/200",
      body: "Texto detalhado sobre inovações na agricultura sustentável.",
      topics: ["sustentavel", "inovacao"],
      likes: 12,
      comments: [
        { user: "João", text: "Excelente notícia!" },
        { user: "Maria", text: "Muito relevante para o setor." }
      ],
      highlight: false
    },
    {
      id: 2,
      title: "Mercado Agrícola em Alta",
      banner: "https://picsum.photos/id/1015/400/200",
      body: "Análise do mercado agrícola mostrando crescimento nos últimos meses.",
      topics: ["mercado", "tradicional"],
      likes: 18,
      comments: [{ user: "Carlos", text: "Boa perspectiva." }],
      highlight: false
    },
    {
      id: 3,
      title: "Novas Tecnologias para Produtores Familiares",
      banner: "https://picsum.photos/id/1022/400/200",
      body: "Tecnologias acessíveis para produtores familiares impulsionarem seus negócios.",
      topics: ["familiar", "tecnologico"],
      likes: 7,
      comments: [],
      highlight: false
    },
    {
      id: 4,
      title: "Biotecnologia Revoluciona a Produção",
      banner: "https://picsum.photos/id/1035/400/200",
      body: "Uso da biotecnologia para melhorar a produtividade e sustentabilidade.",
      topics: ["biotecnologia", "sustentavel"],
      likes: 25,
      comments: [{ user: "Ana", text: "Impactante!" }, { user: "Paulo", text: "Quero saber mais." }],
      highlight: false
    },
    {
      id: 5,
      title: "Agronegócio e Empreendedorismo",
      banner: "https://picsum.photos/id/1040/400/200",
      body: "Como o empreendedorismo está transformando o agronegócio brasileiro.",
      topics: ["empreendedor", "corporativo"],
      likes: 14,
      comments: [],
      highlight: false
    }
  ];

  // Notícias destaque (mínimo 3)
  let newsHighlight = [
    {
      id: 101,
      title: "Clima e Agricultura: Desafios Atuais",
      banner: "https://picsum.photos/id/1044/280/160",
      body: "Desafios do clima para a agricultura no Brasil e estratégias de adaptação.",
      topics: ["clima", "sustentavel"],
      likes: 30,
      comments: [{ user: "Lucas", text: "Muito importante." }],
      highlight: true
    },
    {
      id: 102,
      title: "Inovações em Agrotecnologia",
      banner: "https://picsum.photos/id/1050/280/160",
      body: "Novas ferramentas e máquinas que revolucionam o campo.",
      topics: ["agrotecnologia", "inovacao"],
      likes: 28,
      comments: [{ user: "Fernanda", text: "Ótima notícia!" }],
      highlight: true
    },
    {
      id: 103,
      title: "Soluções Corporativas no Agronegócio",
      banner: "https://picsum.photos/id/1055/280/160",
      body: "Empresas do setor adotando novas práticas para sustentabilidade e eficiência.",
      topics: ["corporativo", "mercado"],
      likes: 26,
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
    btnLike.className = "btn-like";
    btnLike.type = "button";
    btnLike.title = "Curtir";
    btnLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${news.likes}`;

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
    // Atualiza na lista comum
    let card = newsListEl.querySelector(`.news-card[data-id="${newsId}"]`);
    if (card) {
      const news = newsCommon.find(n => n.id === newsId) || allNews.find(n => n.id === newsId);
      if (!news) return;
      const btnLike = card.querySelector(".btn-like");
      const btnComment = card.querySelector(".btn-comment");
      if (btnLike) btnLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${news.likes}`;
      if (btnComment) btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${news.comments.length}`;
    }
    // Atualiza na lista destaque
    card = carouselEl.querySelector(`.highlight-card[data-id="${newsId}"]`);
    if (card) {
      const news = newsHighlight.find(n => n.id === newsId) || allNews.find(n => n.id === newsId);
      if (!news) return;
      const btnLike = card.querySelector(".btn-like");
      const btnComment = card.querySelector(".btn-comment");
      if (btnLike) btnLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${news.likes}`;
      if (btnComment) btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${news.comments.length}`;
    }
  }

  // ========== NOVAS FUNCIONALIDADES ==========

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

  // Função para abrir modal de edição - ATUALIZADA PARA CHECKBOXES
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

  // Função para curtir notícia
  function likeNews(id) {
    const news = allNews.find(n => n.id === id);
    if (!news) return;

    news.likes++;
    updateNewsCounters(id);
    
    // Feedback visual
    const cards = document.querySelectorAll(`[data-id="${id}"]`);
    cards.forEach(card => {
      const btnLike = card.querySelector(".btn-like");
      if (btnLike) {
        btnLike.classList.add("liked");
        setTimeout(() => btnLike.classList.remove("liked"), 300);
      }
    });
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

  // Event Listeners para os botões de ação
  document.addEventListener("click", function(e) {
    // Curtir
    if (e.target.closest(".btn-like")) {
      const card = e.target.closest(".news-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const newsId = parseInt(card.dataset.id);
        likeNews(newsId);
      }
    }
    
    // Comentar
    else if (e.target.closest(".btn-comment")) {
      const card = e.target.closest(".news-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const newsId = parseInt(card.dataset.id);
        openNewsModal(newsId);
      }
    }
    
    // Compartilhar
    else if (e.target.closest(".btn-share")) {
      const card = e.target.closest(".news-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const newsId = parseInt(card.dataset.id);
        openShareModal(newsId);
      }
    }
    
    // Editar (apenas admin)
    else if (e.target.closest(".btn-edit")) {
      const card = e.target.closest(".news-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const newsId = parseInt(card.dataset.id);
        openEditNewsModal(newsId);
      }
    }
    
    // Excluir (apenas admin)
    else if (e.target.closest(".btn-delete")) {
      const card = e.target.closest(".news-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const newsId = parseInt(card.dataset.id);
        deleteNews(newsId);
      }
    }
  });

  // Contador de caracteres para o título
  document.addEventListener("input", function(e) {
    if (e.target.id === "titleInput") {
      const charCount = document.getElementById("charCount");
      charCount.textContent = e.target.value.length;
      
      // Adicionar classe de aviso se estiver perto do limite
      if (e.target.value.length >= 45) {
        charCount.classList.add('char-count-warning');
      } else {
        charCount.classList.remove('char-count-warning');
      }
    }
  });

  // Submit do formulário de notícia - ATUALIZADO PARA CHECKBOXES
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
        comments: [],
        highlight: false
      };

      if (document.getElementById("newsId").value) {
        // Editar notícia existente
        const index = allNews.findIndex(n => n.id === id);
        if (index !== -1) {
          // Manter likes e comentários existentes
          newsData.likes = allNews[index].likes;
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