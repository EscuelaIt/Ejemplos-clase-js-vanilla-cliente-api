const msgElement = document.getElementById('messageElement');
const errorElement = document.getElementById('errorElement');

export const clearFeedback = () => {
    msgElement.textContent = '';
    errorElement.textContent = '';
    msgElement.classList.add('hide');
    errorElement.classList.add('hide');
}

export const showError = (message) => {
    errorElement.textContent = 'Error: ' + message;
    errorElement.classList.remove('hide');

}

export const showSuccess = (message) => {
    msgElement.textContent = message;
    msgElement.classList.remove('hide');
}