(() => {
  // Perfil - alterar manualmente aqui
  const currentUser = {
    email: "admin@agroproai.com",
    role: "adminAgroProAI"
  };

  // Exemplo de eventos comuns
  let eventsCommon = [
    {
      id: 1,
      title: "Workshop de Agricultura Sustentável",
      banner: "https://picsum.photos/id/1011/400/200",
      body: "Workshop prático sobre técnicas sustentáveis na agricultura moderna.",
      date: "2025-11-28",
      time: "14:00",
      location: "Centro de Convenções Agro - São Paulo",
      category: "workshop",
      subscribers: 45,
      likes: 12,
      comments: [
        { user: "João", text: "Excelente evento!" },
        { user: "Maria", text: "Muito relevante para o setor." }
      ],
      highlight: false,
      userSubscribed: false,
      userAddedToCalendar: false,
      userLiked: false
    },
    {
      id: 2,
      title: "Feira de Tecnologia Agrícola",
      banner: "https://picsum.photos/id/1015/400/200",
      body: "Maior feira de tecnologia agrícola da América Latina com expositores nacionais e internacionais.",
      date: "2025-12-10",
      time: "09:00",
      location: "Expo Center Norte - São Paulo",
      category: "feira",
      subscribers: 120,
      likes: 25,
      comments: [
        { user: "Carlos", text: "Ansioso para participar!" }
      ],
      highlight: false,
      userSubscribed: false,
      userAddedToCalendar: false,
      userLiked: false
    }
  ];

  // Evento destaque
  let eventsHighlight = [
    {
      id: 101,
      title: "Congresso Nacional de Agronegócio",
      banner: "https://picsum.photos/id/1044/280/160",
      body: "Evento nacional que reúne os maiores especialistas em agronegócio do país.",
      date: "2026-04-23",
      time: "08:30",
      location: "Transamérica Expo Center - São Paulo",
      category: "congresso",
      subscribers: 300,
      likes: 45,
      comments: [
        { user: "Ana", text: "Imperdível!" },
        { user: "Paulo", text: "Conteúdo de altíssima qualidade." }
      ],
      highlight: true,
      userSubscribed: false,
      userAddedToCalendar: false,
      userLiked: false
    }
  ];

  // Combina eventos
  let allEvents = [...eventsCommon, ...eventsHighlight];

  // Estado da paginação
  const pageSize = 2;
  let currentPage = 1;
  let filteredEvents = [...eventsCommon];

  // Elementos DOM
  const eventsListEl = document.getElementById("eventsList");
  const carouselEl = document.getElementById("carousel");
  const searchInput = document.getElementById("searchInput");
  const filterCategory = document.getElementById("filterCategory");
  const btnAddEvent = document.getElementById("btnAddEvent");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const pageIndicator = document.getElementById("pageIndicator");

  // Mostrar botão de cadastro só para admin
  if (currentUser.role === "adminAgroProAI") {
    btnAddEvent.style.display = "inline-block";
  }

  // Função para formatar data
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  // Renderizar eventos comuns (página atual)
  function renderEventsList() {
    eventsListEl.innerHTML = "";
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageItems = filteredEvents.slice(start, end);

    if (pageItems.length === 0) {
      eventsListEl.innerHTML = "<p>Nenhum evento encontrado.</p>";
      pageIndicator.textContent = "0 / 0";
      prevPageBtn.disabled = true;
      nextPageBtn.disabled = true;
      return;
    }

    pageItems.forEach(event => {
      const card = createEventCard(event, false);
      eventsListEl.appendChild(card);
    });

    // Atualizar paginação
    const totalPages = Math.ceil(filteredEvents.length / pageSize);
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
  }

  // Renderizar eventos destaque
  function renderHighlightEvents() {
    carouselEl.innerHTML = "";
    eventsHighlight.forEach(event => {
      const card = createEventCard(event, true);
      carouselEl.appendChild(card);
    });
  }

  // Criar card de evento
  function createEventCard(event, isHighlight) {
    const card = document.createElement("article");
    card.className = isHighlight ? "highlight-card" : "event-card";
    card.tabIndex = 0;
    card.setAttribute("data-id", event.id);

    const img = document.createElement("img");
    img.src = event.banner;
    img.alt = `Imagem do evento: ${event.title}`;

    const info = document.createElement("div");
    info.className = isHighlight ? "highlight-info" : "event-info";

    const title = document.createElement("h3");
    title.className = isHighlight ? "highlight-title" : "event-title";
    title.textContent = event.title;

    // Detalhes do evento
    const details = document.createElement("div");
    details.className = isHighlight ? "highlight-details" : "event-details-small";

    const dateItem = document.createElement("div");
    dateItem.className = isHighlight ? "highlight-detail-item" : "event-detail-item";
    dateItem.innerHTML = `<i class="fa-solid fa-calendar"></i> ${formatDate(event.date)}`;

    const timeItem = document.createElement("div");
    timeItem.className = isHighlight ? "highlight-detail-item" : "event-detail-item";
    timeItem.innerHTML = `<i class="fa-solid fa-clock"></i> ${event.time}`;

    const locationItem = document.createElement("div");
    locationItem.className = isHighlight ? "highlight-detail-item" : "event-detail-item";
    locationItem.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${event.location}`;

    details.append(dateItem, timeItem, locationItem);

    // Categoria
    const category = document.createElement("span");
    category.className = "event-category";
    category.textContent = event.category.charAt(0).toUpperCase() + event.category.slice(1);

    // Ações do evento - NOVA ORGANIZAÇÃO
    const actions = document.createElement("div");
    actions.className = "event-actions";

    // Primeira linha: Inscrever-se e Adicionar à Agenda
    const subscriptionActions = document.createElement("div");
    subscriptionActions.className = "subscription-actions";

    const btnSubscribe = document.createElement("button");
    btnSubscribe.className = event.userSubscribed ? "subscribed" : "";
    btnSubscribe.type = "button";
    btnSubscribe.title = event.userSubscribed ? "Inscrito" : "Inscrever-se";
    btnSubscribe.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${event.userSubscribed ? "Inscrito" : "Inscrever"}`;

    const btnCalendar = document.createElement("button");
    btnCalendar.className = event.userAddedToCalendar ? "added-to-calendar" : "";
    btnCalendar.type = "button";
    btnCalendar.title = event.userAddedToCalendar ? "Na Agenda" : "Adicionar à Agenda";
    btnCalendar.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> ${event.userAddedToCalendar ? "Na Agenda" : "Agenda"}`;

    subscriptionActions.append(btnSubscribe, btnCalendar);

    // Segunda linha: Curtir, Comentar, Compartilhar
    const socialActions = document.createElement("div");
    socialActions.className = "social-actions";

    const btnLike = document.createElement("button");
    btnLike.className = `btn-like ${event.userLiked ? 'liked' : ''}`;
    btnLike.type = "button";
    btnLike.title = "Curtir";
    btnLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${event.likes}`;

    const btnComment = document.createElement("button");
    btnComment.className = "btn-comment";
    btnComment.type = "button";
    btnComment.title = "Comentar";
    btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${event.comments.length}`;

    const btnShare = document.createElement("button");
    btnShare.className = "btn-share";
    btnShare.type = "button";
    btnShare.title = "Compartilhar";
    btnShare.innerHTML = `<i class="fa-solid fa-share-nodes"></i>`;

    socialActions.append(btnLike, btnComment, btnShare);

    // Ações de admin (se aplicável)
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

      socialActions.append(btnEdit, btnDelete);
    }

    actions.append(subscriptionActions, socialActions);

    if (isHighlight) {
      info.append(title, details, category, actions);
    } else {
      info.append(title, category, details, actions);
    }
    
    card.append(img, info);
    return card;
  }

  // Filtrar eventos conforme busca e categoria
  function applyFilters() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = filterCategory.value;

    filteredEvents = eventsCommon.filter(event => {
      const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
      const matchesSearch = event.title.toLowerCase().includes(searchText) || 
                           event.location.toLowerCase().includes(searchText);
      return matchesCategory && matchesSearch;
    });

    currentPage = 1;
    renderEventsList();
  }

  // Navegação paginação
  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderEventsList();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredEvents.length / pageSize);
    if (currentPage < totalPages) {
      currentPage++;
      renderEventsList();
    }
  });

  // Eventos filtros
  searchInput.addEventListener("input", () => {
    applyFilters();
  });
  filterCategory.addEventListener("change", () => {
    applyFilters();
  });

  // Modal evento
  const modalEvent = document.getElementById("modalEvent");
  const modalTitle = document.getElementById("modalTitle");
  const modalBanner = document.getElementById("modalBanner");
  const modalBody = document.getElementById("modalBody");
  const modalDate = document.getElementById("modalDate");
  const modalTime = document.getElementById("modalTime");
  const modalLocation = document.getElementById("modalLocation");
  const modalCategory = document.getElementById("modalCategory");
  const btnSubscribe = document.getElementById("btnSubscribe");
  const btnAddToCalendar = document.getElementById("btnAddToCalendar");
  const commentsList = document.getElementById("commentsList");
  const commentInput = document.getElementById("commentInput");
  const btnAddComment = document.getElementById("btnAddComment");
  let currentModalEventId = null;

  // Abrir modal evento completo
  function openEventModal(id) {
    const event = allEvents.find(e => e.id === id);
    if (!event) return;
    currentModalEventId = id;
    
    modalTitle.textContent = event.title;
    modalBanner.src = event.banner;
    modalBanner.alt = `Imagem do evento: ${event.title}`;
    modalBody.textContent = event.body;
    modalDate.textContent = formatDate(event.date);
    modalTime.textContent = event.time;
    modalLocation.textContent = event.location;
    modalCategory.textContent = event.category.charAt(0).toUpperCase() + event.category.slice(1);
    
    // Atualizar estado dos botões
    btnSubscribe.className = event.userSubscribed ? "btn-subscribe subscribed" : "btn-subscribe";
    btnSubscribe.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${event.userSubscribed ? "Inscrito" : "Inscrever-se"}`;
    
    btnAddToCalendar.className = event.userAddedToCalendar ? "btn-calendar added-to-calendar" : "btn-calendar";
    btnAddToCalendar.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> ${event.userAddedToCalendar ? "Adicionado à Agenda" : "Adicionar à Agenda"}`;
    
    // Renderizar comentários
    renderComments(event.comments);
    commentInput.value = "";
    
    modalEvent.setAttribute("aria-hidden", "false");
    modalEvent.style.display = "flex";
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

  // Fechar modal evento
  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", closeEventModal);
  modalEvent.addEventListener("click", e => {
    if (e.target === modalEvent) closeEventModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modalEvent.getAttribute("aria-hidden") === "false") {
      closeEventModal();
    }
  });

  function closeEventModal() {
    modalEvent.setAttribute("aria-hidden", "true");
    modalEvent.style.display = "none";
    currentModalEventId = null;
  }

  // Inscrever-se no evento
  btnSubscribe.addEventListener("click", () => {
    if (currentModalEventId === null) return;

    const event = allEvents.find(e => e.id === currentModalEventId);
    if (!event) return;

    event.userSubscribed = !event.userSubscribed;
    if (event.userSubscribed) {
      event.subscribers++;
      alert("Inscrição realizada com sucesso!");
    } else {
      event.subscribers--;
      alert("Inscrição cancelada!");
    }

    // Atualizar visual do botão
    btnSubscribe.className = event.userSubscribed ? "btn-subscribe subscribed" : "btn-subscribe";
    btnSubscribe.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${event.userSubscribed ? "Inscrito" : "Inscrever-se"}`;

    // Atualizar cards
    updateEventCards(event.id);
  });

  // Adicionar à agenda
  btnAddToCalendar.addEventListener("click", () => {
    if (currentModalEventId === null) return;

    const event = allEvents.find(e => e.id === currentModalEventId);
    if (!event) return;

    event.userAddedToCalendar = !event.userAddedToCalendar;
    
    if (event.userAddedToCalendar) {
      alert("Evento adicionado à sua agenda!");
    } else {
      alert("Evento removido da sua agenda!");
    }

    // Atualizar visual do botão
    btnAddToCalendar.className = event.userAddedToCalendar ? "btn-calendar added-to-calendar" : "btn-calendar";
    btnAddToCalendar.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> ${event.userAddedToCalendar ? "Adicionado à Agenda" : "Adicionar à Agenda"}`;

    // Atualizar cards
    updateEventCards(event.id);
  });

  // Adicionar comentário
  btnAddComment.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text || currentModalEventId === null) return;

    const event = allEvents.find(e => e.id === currentModalEventId);
    if (!event) return;

    event.comments.push({ user: currentUser.email.split("@")[0], text });
    renderComments(event.comments);
    updateEventCards(event.id);
    commentInput.value = "";
  });

  // Atualiza visual dos cards de evento
  function updateEventCards(eventId) {
    const event = allEvents.find(e => e.id === eventId);
    if (!event) return;

    // Atualiza na lista comum
    let card = eventsListEl.querySelector(`.event-card[data-id="${eventId}"]`);
    if (card) {
      const btnSubscribe = card.querySelector(".subscription-actions button:first-child");
      const btnCalendar = card.querySelector(".subscription-actions button:nth-child(2)");
      const btnLike = card.querySelector(".btn-like");
      const btnComment = card.querySelector(".btn-comment");
      
      if (btnSubscribe) {
        btnSubscribe.className = event.userSubscribed ? "subscribed" : "";
        btnSubscribe.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${event.userSubscribed ? "Inscrito" : "Inscrever"}`;
      }
      
      if (btnCalendar) {
        btnCalendar.className = event.userAddedToCalendar ? "added-to-calendar" : "";
        btnCalendar.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> ${event.userAddedToCalendar ? "Na Agenda" : "Agenda"}`;
      }
      
      if (btnLike) {
        btnLike.className = `btn-like ${event.userLiked ? 'liked' : ''}`;
        btnLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${event.likes}`;
      }
      
      if (btnComment) {
        btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${event.comments.length}`;
      }
    }
    
    // Atualiza na lista destaque
    card = carouselEl.querySelector(`.highlight-card[data-id="${eventId}"]`);
    if (card) {
      const btnSubscribe = card.querySelector(".subscription-actions button:first-child");
      const btnCalendar = card.querySelector(".subscription-actions button:nth-child(2)");
      const btnLike = card.querySelector(".btn-like");
      const btnComment = card.querySelector(".btn-comment");
      
      if (btnSubscribe) {
        btnSubscribe.className = event.userSubscribed ? "subscribed" : "";
        btnSubscribe.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${event.userSubscribed ? "Inscrito" : "Inscrever"}`;
      }
      
      if (btnCalendar) {
        btnCalendar.className = event.userAddedToCalendar ? "added-to-calendar" : "";
        btnCalendar.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> ${event.userAddedToCalendar ? "Na Agenda" : "Agenda"}`;
      }
      
      if (btnLike) {
        btnLike.className = `btn-like ${event.userLiked ? 'liked' : ''}`;
        btnLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${event.likes}`;
      }
      
      if (btnComment) {
        btnComment.innerHTML = `<i class="fa-regular fa-comment"></i> ${event.comments.length}`;
      }
    }
  }

  // Event Listeners para os botões de ação nos cards
  document.addEventListener("click", function(e) {
    // Inscrever-se
    if (e.target.closest(".subscription-actions button:first-child")) {
      const button = e.target.closest("button");
      const card = e.target.closest(".event-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        const event = allEvents.find(e => e.id === eventId);
        if (event) {
          event.userSubscribed = !event.userSubscribed;
          if (event.userSubscribed) {
            event.subscribers++;
            alert("Inscrição realizada com sucesso!");
          } else {
            event.subscribers--;
            alert("Inscrição cancelada!");
          }
          updateEventCards(eventId);
        }
      }
    }
    
    // Adicionar à agenda
    else if (e.target.closest(".subscription-actions button:nth-child(2)")) {
      const button = e.target.closest("button");
      const card = e.target.closest(".event-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        const event = allEvents.find(e => e.id === eventId);
        if (event) {
          event.userAddedToCalendar = !event.userAddedToCalendar;
          if (event.userAddedToCalendar) {
            alert("Evento adicionado à sua agenda!");
          } else {
            alert("Evento removido da sua agenda!");
          }
          updateEventCards(eventId);
        }
      }
    }
    
    // Curtir
    else if (e.target.closest(".btn-like")) {
      const button = e.target.closest("button");
      const card = e.target.closest(".event-card, .highlight-card");
      if (card && !button.classList.contains('btn-edit') && !button.classList.contains('btn-delete')) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        const event = allEvents.find(e => e.id === eventId);
        if (event) {
          event.userLiked = !event.userLiked;
          if (event.userLiked) {
            event.likes++;
          } else {
            event.likes--;
          }
          updateEventCards(eventId);
          
          // Feedback visual
          button.classList.add("liked");
          setTimeout(() => button.classList.remove("liked"), 300);
        }
      }
    }
    
    // Comentar
    else if (e.target.closest(".btn-comment")) {
      const button = e.target.closest("button");
      const card = e.target.closest(".event-card, .highlight-card");
      if (card && !button.classList.contains('btn-edit') && !button.classList.contains('btn-delete')) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        openEventModal(eventId);
      }
    }
    
    // Compartilhar
    else if (e.target.closest(".btn-share")) {
      const button = e.target.closest("button");
      const card = e.target.closest(".event-card, .highlight-card");
      if (card && !button.classList.contains('btn-edit') && !button.classList.contains('btn-delete')) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        openShareModal(eventId);
      }
    }
    
    // Abrir modal do evento (clique no card)
    else if (e.target.closest(".event-card, .highlight-card") && 
             !e.target.closest(".event-actions")) {
      const card = e.target.closest(".event-card, .highlight-card");
      if (card) {
        e.preventDefault();
        const eventId = parseInt(card.dataset.id);
        openEventModal(eventId);
      }
    }
    
    // Editar (apenas admin)
    else if (e.target.closest(".btn-edit")) {
      const card = e.target.closest(".event-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        openEditEventModal(eventId);
      }
    }
    
    // Excluir (apenas admin)
    else if (e.target.closest(".btn-delete")) {
      const card = e.target.closest(".event-card, .highlight-card");
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(card.dataset.id);
        deleteEvent(eventId);
      }
    }
  });

  // Função para abrir modal de compartilhar
  function openShareModal(id) {
    const event = allEvents.find(e => e.id === id);
    if (!event) return;

    document.getElementById("shareUrl").value = `${window.location.origin}/evento/${id}`;
    
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

  // Configurar botões de compartilhamento
  function setupShareButtons() {
    // WhatsApp
    document.getElementById('btnShareWhatsApp').addEventListener('click', function() {
      const shareUrl = document.getElementById('shareUrl').value;
      const eventId = shareUrl.split('/').pop();
      const event = allEvents.find(e => e.id == eventId);
      const text = event ? encodeURIComponent(`Confira este evento: ${event.title}`) : '';
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
      const eventId = shareUrl.split('/').pop();
      const event = allEvents.find(e => e.id == eventId);
      const text = event ? encodeURIComponent(`Confira: ${event.title}`) : '';
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

  // Função para abrir modal de cadastro
  function openAddEventModal() {
    document.getElementById("modalEditTitle").textContent = "Cadastrar Evento";
    document.getElementById("formEvent").reset();
    document.getElementById("previewImage").style.display = "none";
    
    const modal = document.getElementById("modalEditEvent");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    document.getElementById("eventTitle").focus();
  }

  // Função para abrir modal de edição
  function openEditEventModal(id) {
    const event = allEvents.find(e => e.id === id);
    if (!event) return;

    document.getElementById("modalEditTitle").textContent = "Editar Evento";
    
    document.getElementById("eventTitle").value = event.title;
    document.getElementById("eventBanner").value = event.banner;
    document.getElementById("eventDate").value = event.date;
    document.getElementById("eventTime").value = event.time;
    document.getElementById("eventLocation").value = event.location;
    document.getElementById("eventCategory").value = event.category;
    document.getElementById("eventBody").value = event.body;
    document.getElementById("eventHighlight").checked = event.highlight;
    
    // Preview da imagem atual
    const previewImage = document.getElementById("previewImage");
    previewImage.style.display = "block";
    previewImage.src = event.banner;
    previewImage.alt = `Preview: ${event.title}`;

    const modal = document.getElementById("modalEditEvent");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    document.getElementById("eventTitle").focus();
  }

  // Função para fechar modal de formulário
  function closeEventFormModal() {
    const modal = document.getElementById("modalEditEvent");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }

  // Função para excluir evento
  function deleteEvent(id) {
    if (!confirm("Tem certeza que deseja excluir este evento?")) return;

    // Remover das arrays usando filter
    allEvents = allEvents.filter(e => e.id !== id);
    eventsCommon = eventsCommon.filter(e => e.id !== id);
    eventsHighlight = eventsHighlight.filter(e => e.id !== id);
    filteredEvents = filteredEvents.filter(e => e.id !== id);

    // Re-renderizar
    renderEventsList();
    renderHighlightEvents();
  }

  // Submit do formulário de evento
  document.addEventListener("submit", function(e) {
    if (e.target.id === "formEvent") {
      e.preventDefault();
      
      const title = document.getElementById("eventTitle").value.trim();
      const banner = document.getElementById("eventBanner").value.trim();
      const date = document.getElementById("eventDate").value;
      const time = document.getElementById("eventTime").value;
      const location = document.getElementById("eventLocation").value.trim();
      const category = document.getElementById("eventCategory").value;
      const body = document.getElementById("eventBody").value.trim();
      const highlight = document.getElementById("eventHighlight").checked;

      if (!title || !banner || !date || !time || !location || !body) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const eventData = {
        id: Date.now(),
        title,
        banner,
        date,
        time,
        location,
        category,
        body,
        subscribers: 0,
        likes: 0,
        comments: [],
        highlight,
        userSubscribed: false,
        userAddedToCalendar: false,
        userLiked: false
      };

      if (highlight) {
        eventsHighlight.push(eventData);
      } else {
        eventsCommon.push(eventData);
        filteredEvents.push(eventData);
      }
      
      allEvents.push(eventData);

      // Re-renderizar e fechar modal
      renderEventsList();
      renderHighlightEvents();
      applyFilters();
      closeEventFormModal();
    }
  });

  // Preview da imagem
  document.addEventListener("input", function(e) {
    if (e.target.id === "eventBanner") {
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
    if (e.target.id === "btnCancelEvent" || e.target.id === "closeEditModal") {
      closeEventFormModal();
    }
  });

  // Fechar modal de formulário com clique fora
  document.addEventListener("click", function(e) {
    if (e.target.id === "modalEditEvent") {
      closeEventFormModal();
    }
    if (e.target.id === "modalShare") {
      closeShareModal();
    }
  });

  // Fechar modais com ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      if (document.getElementById("modalEditEvent")?.getAttribute("aria-hidden") === "false") {
        closeEventFormModal();
      }
      if (document.getElementById("modalShare")?.getAttribute("aria-hidden") === "false") {
        closeShareModal();
      }
    }
  });

  // Botão de adicionar evento (para admin)
  btnAddEvent.addEventListener("click", openAddEventModal);

  // Inicializa e renderiza
  setupShareButtons();
  renderEventsList();
  renderHighlightEvents();
  applyFilters();
})();