import axios from 'axios';

const Instance = axios.create({
baseURL: 'http://localhost:8080',
});

const index = () => {
console.log('Fetching API Token');
Instance.get('token')
.then((response) => {
console.log(response.data);
})
.catch((error) => {
console.error(error);
});
};

export default Instance