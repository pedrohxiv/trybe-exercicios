const addList = (arr) => {
  arr.slice(0, 10).forEach((element) => {
    document
      .getElementById('coins-list')
      .appendChild(document.createElement('li')).innerText = element;
  });
};

const fetchCoins = async () => {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets/');
    const responsePrice = await fetch(
      'https://economia.awesomeapi.com.br/last/USD-BRL'
    );
    const crypto = await response.json();
    const coinPrice = await responsePrice.json();
    const list = crypto.data.map(
      (element) =>
        `${element.id} (${element.symbol}): R$${Number(
          element.priceUsd * coinPrice.USDBRL.bid
        ).toFixed(2)}`
    );
    addList(list);
  } catch (error) {
    console.log(`Ops, algo deu errado:\n\n ${error}`);
  }
};

fetchCoins();
