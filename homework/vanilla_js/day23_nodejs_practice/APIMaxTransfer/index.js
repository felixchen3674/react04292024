const API_URL = "https://jsonmock.hackerrank.com/api/transactions";
const axios = require("axios");

async function maximumTransfer(name, city) {
    try {
        let page = 1;
        let maxTransfer = 0;
        let totalPages = 1;

        while (page <= totalPages) {
            const response = await axios({
                method: 'get',
                url: `${API_URL}?page=${page}`
            });
            const { data } = response;

            totalPages = data.total_pages;

            data.data.forEach(transaction => {
                if (transaction && transaction.user && transaction.location) {
                    if (transaction.user.name === name && transaction.location.city === city) {
                        const amount = parseFloat(transaction.amount.replace(/[$,]/g, ''));
                        if (amount > maxTransfer) {
                            maxTransfer = amount;
                        }
                    }

                }
                
            });

            page++;
        }
        return maxTransfer;
    } catch (error) {
        throw error;
    }
}

const name = "Lin He";
const city = "Seattle";

maximumTransfer(name, city).then(maxTransfer => {
    console.log(`Maximum transfer amount for ${name} in ${city} is $${maxTransfer}`);
});
