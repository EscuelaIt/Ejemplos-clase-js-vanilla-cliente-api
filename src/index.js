import { axiosCreator } from './lib/axios';
import './auth-service';


document.getElementById('test').addEventListener('click', function() {
  let axios = axiosCreator();
  axios.get('/api/test')
  .then( response => console.log(response.data) );
});

document.getElementById('getuser').addEventListener('click', function() {
  
  let axios = axiosCreator('5|RepaSPXEvWYOraKIa0th8Nc0FdWvBdTZssPWPSAw95a1480f');
  axios.get('/api/user')
    .then( response => console.log(response) )
    .catch( err => console.log(err.response.data.message));

});