// Este arquivo contém funções utilitárias que podem ser usadas em diferentes partes do site, como validação de formulários.

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function formatPhoneNumber(phone) {
    return phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export { validateEmail, formatPhoneNumber, scrollToElement };