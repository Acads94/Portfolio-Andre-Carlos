// Garante que o script só rode após o HTML estar carregado
document.addEventListener('DOMContentLoaded', () => {

    /* Controle de Tema (Claro/Escuro) */
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);

        // Troca o ícone conforme o tema ativo
        themeBtn.innerText = newTheme === 'light' ? '🌓' : '☀️';
    });

    /* Menu Mobile */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Abre e fecha o menu hamburguer
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Esconde o menu quando o usuário clica em algum link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    /* Validação do Formulário de Contato */
    const form = document.getElementById('contactForm');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Regra simples para validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verifica se há campos vazios
        if (!nome || !email || !mensagem) {
            exibirModal('Erro', 'Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        // Verifica se o e-mail faz sentido
        if (!emailRegex.test(email)) {
            exibirModal('E-mail Inválido', 'Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
            return;
        }

        // Simulação de Sucesso
        exibirModal('Sucesso', 'Mensagem enviada com sucesso! Em breve entrarei em contato.');
        form.reset(); // Limpa os campos após o envio
    });

    /* Funções do Modal */
    function exibirModal(titulo, mensagem) {
        modalTitle.innerText = titulo;
        modalMessage.innerText = mensagem;
        
        // Muda a cor do título, sendo verde para sucesso e vermelho para erro
        modalTitle.style.color = titulo === 'Sucesso' ? '#10b981' : '#ef4444';
        
        modalOverlay.classList.add('active');
    }

    // // Fecha o modal no botão "Fechar"
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    // Fecha o modal se clicar fora da caixa branca
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

});
