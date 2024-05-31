const axios = require('axios');

const API_URL = "https://jsonmock.hackerrank.com/api/transactions";

async function maximumTransfer(name, city) {
  const response = await axios.get(API_URL);
  const people = response.data.data; // Assuming "data" contains the transactions

  let maxCredit = 0;
  let maxDebit = 0;

  for (const person of people) {
    if (person.userName === name && person.location.city === city) {
      const amount = parseFloat(person.amount.replace(/[^0-9.-]/g, ''));

      if (person.txnType === 'credit' && amount > maxCredit) {
        maxCredit = amount;
      } else if (person.txnType === 'debit' && amount > maxDebit) {
        maxDebit = amount;
      }
      console.log(`Name: ${name}, City: ${city}, Maximum Credit: $${maxCredit}, Maximum Debit: $${maxDebit}`);
    }
  }
  if (maxCredit === 0 && maxDebit === 0) {
    console.log('No matching transactions found for this user and city.');
  }
}


maximumTransfer('John Oliver', 'Ripley');