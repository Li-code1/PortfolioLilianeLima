document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    // Função para aplicar o tema salvo
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // 1. Carregar o tema salvo no localStorage ao iniciar
    const savedTheme = localStorage.getItem('theme');
    // Se não houver tema salvo, verifica a preferência do sistema
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se o sistema operacional estiver no modo escuro e não houver tema salvo
        applyTheme('dark');
    } else {
        // Padrão: Modo claro
        applyTheme('light');
    }

    // 2. Adicionar o evento de clique ao botão
    toggleButton.addEventListener('click', () => {
        // Alterna a classe 'dark-mode'
        const isDarkMode = body.classList.toggle('dark-mode');

        // Atualiza o ícone e salva a preferência
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});