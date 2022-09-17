const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = Object.values(order.order.delivery)[0];
  const name = Object.values(order)[0];
  const phoneNumber = Object.values(order)[1];
  const street = Object.values(order.address)[0];
  const number = Object.values(order.address)[1];
  const apartment = Object.values(order.address)[2];
  const infos = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`;
  console.log(infos);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newOrder = {
    name: "Luiz Silva",
    payment: {
      total: 50,
    },
  };

  Object.assign(order, newOrder);
  const name = Object.values(order)[0];
  const marguerita = Object.keys(order.order.pizza)[0];
  const pepperoni = Object.keys(order.order.pizza)[1];
  const cokeType = Object.values(order.order.drinks.coke)[0];
  const total = Object.values(order.payment)[0];
  const infos = `Olá ${name}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${cokeType} é R$ ${total},00`;
  console.log(infos);
};

orderModifier(order);
