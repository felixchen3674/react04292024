const API_URL = "https://jsonmock.hackerrank.com/api/transactions";
const axios = require("axios");

async function maximumTransfer(name, city) {
  try {
    let maxCredit = -1;
    let maxDebit = -1;

    for (let i = 1; i <= 30; i++) {
      const {
        data: { data },
      } = await axios.get(`${API_URL}?page=${i}`);

      data.forEach(({ userName, location, txnType, amount }) => {
        if (userName === name && location.city === city) {
          const number = Number(amount.replace(/[$,]/g, ""));

          if (txnType === "credit") {
            maxCredit = Math.max(maxCredit, number);
          } else if (txnType === "debit") {
            maxDebit = Math.max(maxDebit, number);
          }
        }
      });
    }

    if (maxCredit === -1 && maxDebit === -1) {
      throw new Error("Can't find the user in that city");
    }

    const formatCurrency = (amount) =>
      amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

    return [
      maxCredit === -1 ? "$0" : formatCurrency(maxCredit),
      maxDebit === -1 ? "$0" : formatCurrency(maxDebit),
    ];
  } catch (err) {
    console.error(err);
  }
}

maximumTransfer("John Oliver", "Murillo").then((data) => console.log(data));
