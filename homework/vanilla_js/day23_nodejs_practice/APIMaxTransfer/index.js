const API_URL = 'https://jsonmock.hackerrank.com/api/transactions'
const axios = require('axios')

async function maximumTransfer(name, city) {
  try {
    let page = 1
    let max = 0

    while (1) {
      const response = await axios.get(API_URL, {params: {page}})
      const data = response.data

      const transactions = data.data.filter(
        (transaction) =>
          transaction.userName === name && transaction.location.city === city
      )

      transactions.forEach((transaction) => {
        const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ''))
        if (amount > max) {
          max = amount
        }
      })

      if (page >= data.total_pages) {
        break
      }
      page++
    }
    return max
  } catch (err) {
    console.error(err)
  }
}

const name = 'Helena Fernandez'
const city = 'Ripley'
maximumTransfer(name, city).then((max) => {
  console.log(`Maximum transfer amount for ${name} in ${city} is: ${max}`)
})
