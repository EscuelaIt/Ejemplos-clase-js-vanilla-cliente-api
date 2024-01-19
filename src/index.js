import axios from './lib/axios';
import './auth-service';

document.getElementById('test').addEventListener('click', function() {
  
  axios.get('/api/test')
    .then( response => console.log(response.data) );
});

document.getElementById('getuser').addEventListener('click', function() {
  
  axios.get('/api/user')
    .then( response => console.log(response) )
    .catch( err => console.log(err.message));

});