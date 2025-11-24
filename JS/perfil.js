// Dados do perfil (manualmente inseridos)
const userProfile = {
    email: "admin@agroproai.com",
    senha: "Admin!2025",
    nome: "AgroProAI-Admin",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    perfilAgricultor: "adminAgroProAI",
    biografia: ""
};

// Elementos do DOM
const profileForm = document.getElementById('profile-form');
const passwordForm = document.getElementById('password-form');
const confirmModal = document.getElementById('confirm-modal');
const btnExcluirConta = document.getElementById('btn-excluir-conta');
const btnCancelar = document.getElementById('btn-cancelar');
const closeModal = document.querySelector('.close-modal');
const confirmExcluir = document.getElementById('confirm-excluir');
const cancelExcluir = document.getElementById('cancel-excluir');

// Carregar dados do perfil nos campos do formulário
function loadProfileData() {
    document.getElementById('nome').value = userProfile.nome;
    document.getElementById('email').value = userProfile.email;
    document.getElementById('telefone').value = userProfile.telefone;
    document.getElementById('endereco').value = userProfile.endereco;
    document.getElementById('cidade').value = userProfile.cidade;
    document.getElementById('estado').value = userProfile.estado;
    document.getElementById('perfilAgricultor').value = userProfile.perfilAgricultor;
    document.getElementById('biografia').value = userProfile.biografia;
    
    // Atualizar informações no cabeçalho do perfil
    document.getElementById('profile-name').textContent = userProfile.nome;
    document.getElementById('profile-email').textContent = userProfile.email;
    document.getElementById('profile-role').textContent = userProfile.perfilAgricultor;
}

// Salvar alterações do perfil
profileForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar formulário
    if (!profileForm.checkValidity()) {
        showAlert('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Atualizar dados do perfil
    userProfile.nome = document.getElementById('nome').value;
    userProfile.email = document.getElementById('email').value;
    userProfile.telefone = document.getElementById('telefone').value;
    userProfile.endereco = document.getElementById('endereco').value;
    userProfile.cidade = document.getElementById('cidade').value;
    userProfile.estado = document.getElementById('estado').value;
    userProfile.perfilAgricultor = document.getElementById('perfilAgricultor').value;
    userProfile.biografia = document.getElementById('biografia').value;
    
    // Atualizar informações no cabeçalho do perfil
    document.getElementById('profile-name').textContent = userProfile.nome;
    document.getElementById('profile-email').textContent = userProfile.email;
    document.getElementById('profile-role').textContent = userProfile.perfilAgricultor;
    
    showAlert('Perfil atualizado com sucesso!', 'success');
});

// Alterar senha
passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar formulário
    if (!passwordForm.checkValidity()) {
        showAlert('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    const senhaAtual = document.getElementById('senha-atual').value;
    const novaSenha = document.getElementById('nova-senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    
    // Verificar se a senha atual está correta
    if (senhaAtual !== userProfile.senha) {
        showAlert('A senha atual está incorreta.', 'error');
        return;
    }
    
    // Verificar se as novas senhas coincidem
    if (novaSenha !== confirmarSenha) {
        showAlert('As novas senhas não coincidem.', 'error');
        return;
    }
    
    // Verificar força da nova senha
    if (!isPasswordStrong(novaSenha)) {
        showAlert('A nova senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.', 'error');
        return;
    }
    
    // Atualizar senha
    userProfile.senha = novaSenha;
    
    // Limpar formulário
    passwordForm.reset();
    
    showAlert('Senha alterada com sucesso!', 'success');
});

// Cancelar alterações
btnCancelar.addEventListener('click', function() {
    loadProfileData();
    showAlert('Alterações canceladas.', 'info');
});

// Excluir conta
btnExcluirConta.addEventListener('click', function() {
    confirmModal.style.display = 'flex';
});

// Fechar modal
closeModal.addEventListener('click', function() {
    confirmModal.style.display = 'none';
});

cancelExcluir.addEventListener('click', function() {
    confirmModal.style.display = 'none';
});

// Confirmar exclusão
confirmExcluir.addEventListener('click', function() {
    // Aqui normalmente teria uma chamada para API para excluir a conta
    alert('Conta excluída com sucesso! Redirecionando...');
    // Redirecionar para página inicial
    window.location.href = 'index.html';
});

// Fechar modal ao clicar fora
window.addEventListener('click', function(e) {
    if (e.target === confirmModal) {
        confirmModal.style.display = 'none';
    }
});

// Função para verificar força da senha
function isPasswordStrong(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
}

// Função para exibir alertas
function showAlert(message, type) {
    // Remover alertas anteriores
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Criar novo alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Adicionar alerta ao início do conteúdo principal
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(alert, mainContent.firstChild);
    
    // Remover alerta após 5 segundos
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Carregar dados do perfil quando a página carregar
document.addEventListener('DOMContentLoaded', loadProfileData);