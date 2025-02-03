// Este arquivo contém o código JavaScript para interatividade no site, como manipulação de eventos e animações.

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de manipulação de evento para um botão
    const button = document.querySelector('.example-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Botão clicado!');
        });
    }

    // Função para animação de scroll suave
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    };

    // Exemplo de uso da função de scroll suave
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });
});