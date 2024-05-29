const axios = require('axios');

const API_URL = "https://jsonmock.hackerrank.com/api/transactions";

async function maximumTransfer(name, city) {
    let currentPage = 1;
    let totalPage = 1;
    let maxCredit = 0;
    let maxDebit = 0;

    while (currentPage <= totalPage) {
        try {
            const response = await axios.get(`${API_URL}?page=${currentPage}`)
            const data = response.data;
            totalPage = data.total_pages;
            for (const record of data.data) {
                if (record.userName === name && record.location.city === city) {
                    const amount = parseFloat(record.amount.replace(/[$,]/g, ''));
                    if (record.txnType === 'credit') {
                        maxCredit = Math.max(maxCredit, amount);
                    } else if (record.txnType === 'debit') {
                        maxDebit = Math.max(maxDebit, amount);
                    }
                }
            }
            currentPage++;
        } catch(err) {
            console.error('Error fetching data');
            break;
        }   
    }
    return [`$${maxCredit.toFixed(2)}`, `$${maxDebit.toFixed(2)}`];
}

// For testing purposes
async function main() {
    const result = await maximumTransfer('John Doe', 'New York');
    console.log(result);
}

main();