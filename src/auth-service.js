import  axios from './lib/axios';
import {clearFeedback, showError, showSuccess } from './lib/feedback';

const csrf = () => axios.get('/sanctum/csrf-cookie');

const register = async (e) => {
  e.preventDefault();
  clearFeedback();
  await csrf();
  const formData = new FormData(registerForm);
  axios
    .post('/register', formData)
    .then(( response ) => {
      if(response.data?.error) {
        showError(response.data.error);
      } else {
        showSuccess('Your account has been created!');

      }
      //checkAuth();
    })
    .catch(error => {
      if (error.response.status !== 422) throw error
      showError(error.response.data.message);
    })
}

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', register);


const checkAuth = async () => {
  clearFeedback();
  showSuccess('Checking auth...');
  await csrf();
  axios
    .get('/api/user',{withCredentials: true})
    .then((response) => {
      console.log(response);
      showSuccess('You are logged in!')
      console.log(response.data);
    })
    .catch((err) => {
      showSuccess('Not logged in')
      if(err.response.status === 401) {
        console.log('No tengo usuario autenticado');
      } else {
        throw err;
      }
    }) 
}
const checkauthButton = document.getElementById('checkauth');
checkauthButton.addEventListener('click', checkAuth);


const logout = async (e) => {
  e.preventDefault();
  clearFeedback();
  axios
    .post('/logout')
    .then(() => {
      showSuccess('Logged out!');
      //removeLoggedUser();
    })
    .catch(error => {
      showError('error on logout');
    })
}
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', logout);