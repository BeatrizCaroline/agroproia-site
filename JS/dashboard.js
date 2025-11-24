// Dados simulados de 40 usuários
let dadosUsuarios = [
    { cultura: "Soja", produtividade: 3500, regiao: "Sul", tipo_solo: "Argiloso", problemas: ["Pragas", "Doenças"], satisfacao_solo: 7, uso_tecnologia: "Sim", area_plantio: 150 },
    { cultura: "Milho", produtividade: 6500, regiao: "Centro-Oeste", tipo_solo: "Arenoso", problemas: ["Seca"], satisfacao_solo: 5, uso_tecnologia: "Não", area_plantio: 200 },
    { cultura: "Café", produtividade: 25, regiao: "Sudeste", tipo_solo: "Misto", problemas: ["Pragas", "Custos Elevados"], satisfacao_solo: 6, uso_tecnologia: "Parcialmente", area_plantio: 50 },
    { cultura: "Cana-de-açúcar", produtividade: 75000, regiao: "Sudeste", tipo_solo: "Argiloso", problemas: ["Excesso de Chuva"], satisfacao_solo: 8, uso_tecnologia: "Sim", area_plantio: 300 },
    { cultura: "Algodão", produtividade: 2800, regiao: "Nordeste", tipo_solo: "Arenoso", problemas: ["Seca", "Fertilidade do Solo"], satisfacao_solo: 4, uso_tecnologia: "Não", area_plantio: 80 },
    { cultura: "Soja", produtividade: 3200, regiao: "Sul", tipo_solo: "Misto", problemas: ["Doenças"], satisfacao_solo: 6, uso_tecnologia: "Sim", area_plantio: 120 },
    { cultura: "Milho", produtividade: 5800, regiao: "Centro-Oeste", tipo_solo: "Argiloso", problemas: ["Pragas"], satisfacao_solo: 7, uso_tecnologia: "Parcialmente", area_plantio: 180 },
    { cultura: "Trigo", produtividade: 2800, regiao: "Sul", tipo_solo: "Humoso", problemas: ["Excesso de Chuva"], satisfacao_solo: 5, uso_tecnologia: "Não", area_plantio: 90 },
    { cultura: "Arroz", produtividade: 6200, regiao: "Sul", tipo_solo: "Argiloso", problemas: ["Pragas", "Doenças"], satisfacao_solo: 6, uso_tecnologia: "Sim", area_plantio: 110 },
    { cultura: "Feijão", produtividade: 1200, regiao: "Nordeste", tipo_solo: "Arenoso", problemas: ["Seca"], satisfacao_solo: 3, uso_tecnologia: "Não", area_plantio: 40 },
];

// Completar com mais dados para atingir 40
function completarDados() {
    const culturas = ["Soja", "Milho", "Café", "Cana-de-açúcar", "Algodão", "Trigo", "Arroz", "Feijão"];
    const regioes = ["Sul", "Sudeste", "Centro-Oeste", "Nordeste", "Norte"];
    const tiposSolo = ["Argiloso", "Arenoso", "Misto", "Humoso"];
    const problemas = ["Pragas", "Doenças", "Seca", "Excesso de Chuva", "Fertilidade do Solo", "Custos Elevados"];
    
    while (dadosUsuarios.length < 40) {
        const cultura = culturas[Math.floor(Math.random() * culturas.length)];
        const produtividades = {
            "Soja": [2800, 4200], "Milho": [4500, 7500], "Café": [15, 35], 
            "Cana-de-açúcar": [60000, 90000], "Algodão": [2000, 3500],
            "Trigo": [2000, 3200], "Arroz": [5000, 7000], "Feijão": [800, 1500]
        };
        
        dadosUsuarios.push({
            cultura: cultura,
            produtividade: Math.floor(Math.random() * (produtividades[cultura][1] - produtividades[cultura][0]) + produtividades[cultura][0]),
            regiao: regioes[Math.floor(Math.random() * regioes.length)],
            tipo_solo: tiposSolo[Math.floor(Math.random() * tiposSolo.length)],
            problemas: problemas.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1),
            satisfacao_solo: Math.floor(Math.random() * 10) + 1,
            uso_tecnologia: ["Sim", "Não", "Parcialmente"][Math.floor(Math.random() * 3)],
            area_plantio: Math.floor(Math.random() * 300) + 20
        });
    }
}

completarDados();

// Funções de análise de dados
function calcularMetricas() {
    const totalProdutividade = dadosUsuarios.reduce((sum, user) => sum + user.produtividade, 0);
    const mediaProdutividade = Math.round(totalProdutividade / dadosUsuarios.length);
    
    const totalProblemas = dadosUsuarios.reduce((sum, user) => sum + user.problemas.length, 0);
    const mediaProblemas = (totalProblemas / dadosUsuarios.length).toFixed(1);
    
    const mediaSatisfacao = Math.round(dadosUsuarios.reduce((sum, user) => sum + user.satisfacao_solo, 0) / dadosUsuarios.length);
    const percentSatisfacao = Math.round((mediaSatisfacao / 10) * 100);
    
    const usuariosTecnologia = dadosUsuarios.filter(user => user.uso_tecnologia === "Sim").length;
    const percentTecnologia = Math.round((usuariosTecnologia / dadosUsuarios.length) * 100);
    
    // Atualizar métricas na tela
    document.getElementById('produtividade-media').textContent = `${mediaProdutividade.toLocaleString()} kg/ha`;
    document.getElementById('total-problemas').textContent = mediaProblemas;
    document.getElementById('satisfacao-solo').textContent = `${percentSatisfacao}%`;
    document.getElementById('uso-tecnologia').textContent = `${percentTecnologia}%`;
    document.getElementById('total-respondentes').textContent = dadosUsuarios.length;
    
    // Atualizar trends
    document.getElementById('trend-produtividade').textContent = `Média ${mediaProdutividade.toLocaleString()} kg/ha`;
    document.getElementById('trend-problemas').textContent = `${mediaProblemas} por produtor`;
    document.getElementById('trend-solo').textContent = `Nota ${mediaSatisfacao}/10`;
    document.getElementById('trend-tecnologia').textContent = `${usuariosTecnologia} produtores`;
}

function criarGraficos() {
    // Gráfico de produtividade por cultura
    const prodPorCultura = {};
    dadosUsuarios.forEach(user => {
        if (!prodPorCultura[user.cultura]) {
            prodPorCultura[user.cultura] = [];
        }
        prodPorCultura[user.cultura].push(user.produtividade);
    });
    
    const culturas = Object.keys(prodPorCultura);
    const medias = culturas.map(cultura => 
        Math.round(prodPorCultura[cultura].reduce((a, b) => a + b) / prodPorCultura[cultura].length)
    );
    
    Plotly.newPlot('produtividade-cultura', [{
        x: culturas,
        y: medias,
        type: 'bar',
        marker: {
            color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f']
        }
    }], {
        title: 'Produtividade Média por Cultura (kg/ha)',
        xaxis: { title: 'Cultura' },
        yaxis: { title: 'Produtividade (kg/ha)' }
    });

    // Gráfico de problemas mais comuns
    const problemasCount = {};
    dadosUsuarios.forEach(user => {
        user.problemas.forEach(problema => {
            problemasCount[problema] = (problemasCount[problema] || 0) + 1;
        });
    });
    
    const problemas = Object.keys(problemasCount);
    const counts = problemas.map(problema => problemasCount[problema]);
    
    Plotly.newPlot('problemas-comuns', [{
        x: counts,
        y: problemas,
        type: 'bar',
        orientation: 'h',
        marker: { color: '#e74c3c' }
    }], {
        title: 'Problemas Mais Relatados',
        xaxis: { title: 'Número de Ocorrências' },
        yaxis: { title: 'Problemas' }
    });

    // Gráfico de distribuição por região
    const regioesCount = {};
    dadosUsuarios.forEach(user => {
        regioesCount[user.regiao] = (regioesCount[user.regiao] || 0) + 1;
    });
    
    Plotly.newPlot('distribuicao-regiao', [{
        labels: Object.keys(regioesCount),
        values: Object.values(regioesCount),
        type: 'pie',
        hole: 0.4,
        marker: {
            colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
        }
    }], {
        title: 'Distribuição dos Respondentes por Região'
    });

    // Gráfico de tipo de solo
    const soloCount = {};
    dadosUsuarios.forEach(user => {
        soloCount[user.tipo_solo] = (soloCount[user.tipo_solo] || 0) + 1;
    });
    
    Plotly.newPlot('tipo-solo', [{
        labels: Object.keys(soloCount),
        values: Object.values(soloCount),
        type: 'pie',
        marker: {
            colors: ['#8c564b', '#e377c2', '#7f7f7f', '#bcbd22']
        }
    }], {
        title: 'Distribuição por Tipo de Solo'
    });
}

// Manipulação do modal e formulário
document.addEventListener('DOMContentLoaded', function() {
    calcularMetricas();
    criarGraficos();
    
    // Elementos do modal
    const modal = document.getElementById('modal-formulario');
    const btnAbrir = document.getElementById('btn-abrir-modal');
    const btnFechar = document.querySelector('.close-modal');
    const btnCancelar = document.getElementById('btn-cancelar');
    
    // Abrir modal
    btnAbrir.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Fechar modal
    function fecharModal() {
        modal.style.display = 'none';
        document.getElementById('form-pesquisa').reset();
        document.getElementById('satisfacao-value').textContent = '5';
    }
    
    btnFechar.addEventListener('click', fecharModal);
    btnCancelar.addEventListener('click', fecharModal);
    
    // Fechar modal clicando fora
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
    
    // Slider de satisfação
    const satisfacaoSlider = document.getElementById('satisfacao_solo');
    const satisfacaoValue = document.getElementById('satisfacao-value');
    
    satisfacaoSlider.addEventListener('input', function() {
        satisfacaoValue.textContent = this.value;
    });
    
    // Submit do formulário
    document.getElementById('form-pesquisa').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const problemas = [];
        document.querySelectorAll('input[name="problemas"]:checked').forEach(checkbox => {
            problemas.push(checkbox.value);
        });
        
        const novoUsuario = {
            cultura: formData.get('cultura'),
            produtividade: parseFloat(formData.get('produtividade')),
            regiao: formData.get('regiao'),
            tipo_solo: formData.get('tipo_solo'),
            problemas: problemas,
            satisfacao_solo: parseInt(formData.get('satisfacao_solo')),
            uso_tecnologia: formData.get('uso_tecnologia'),
            area_plantio: parseFloat(formData.get('area_plantio'))
        };
        
        dadosUsuarios.push(novoUsuario);
        
        // Atualizar dashboard
        calcularMetricas();
        criarGraficos();
        
        // Fechar modal e limpar formulário
        fecharModal();
        
        // Mostrar mensagem de sucesso
        alert('Obrigado por participar da pesquisa! Sua resposta foi registrada.');
    });
    
    // Menu dropdown do usuário
    const userIcon = document.querySelector('.user-icon-wrapper');
    userIcon.addEventListener('click', function() {
        const userMenu = this.querySelector('.user-menu');
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.user-icon-wrapper')) {
            const userMenu = document.querySelector('.user-menu');
            if (userMenu) userMenu.style.display = 'none';
        }
    });
});