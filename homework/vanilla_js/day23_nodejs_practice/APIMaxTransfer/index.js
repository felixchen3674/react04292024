const axios = require('axios');
const API_URL = 'https://jsonmock.hackerrank.com/api/transactions';

async function maximumTransfer(name, city) {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
maximumTransfer('sd', 'asd');
