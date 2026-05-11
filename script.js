// Aguarda o DOM (HTML) carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleção de Elementos Comuns
    const header = document.querySelector('header');
    const scrollButtons = document.querySelectorAll('.btn-scroll');

    // 2. Efeito de Scroll no Header (muda a cor ao rolar)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    // 3. Exemplo de Manipulação de Eventos (Botão)
    const alertBtn = document.querySelector('#meuBotao');
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            alert('Olá! O JavaScript está funcionando corretamente. 🚀');
        });
    }

    // 4. Smooth Scroll (Rolagem Suave) para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

/**
 * 5. Função Utilitária: Validar Email (Exemplo)
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}