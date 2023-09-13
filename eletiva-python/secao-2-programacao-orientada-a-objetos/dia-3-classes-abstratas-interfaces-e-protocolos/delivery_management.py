from abc import ABC, abstractmethod


class Customer:
    def __init__(self, name: str, phone: str):
        self.name = name
        self.phone = phone


class Address:
    def __init__(self, street: str, number: str, city: str, state: str):
        self.street = street
        self.number = number
        self.city = city
        self.state = state


class Deliverable(ABC):
    @abstractmethod
    def delivery(self, customer: Customer, address: Address) -> None:
        pass


class Mail(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(
            f"O serviço de correio foi entregue "
            f"com sucesso para {customer.name} "
            f"em {address.street}, {address.number}, "
            f"{address.city}, {address.state}."
        )


class ShippingCompany(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(
            f"O serviço da transportadora foi entregue "
            f"com sucesso para {customer.name} "
            f"em {address.street}, {address.number}, "
            f"{address.city}, {address.state}."
        )


def main():
    mail_service = Mail()
    shipping_service = ShippingCompany()

    customer = Customer("João da Silva", "123-456-7890")
    address = Address("Rua Principal", "123", "Cidade A", "Estado X")

    mail_service.delivery(customer, address)
    shipping_service.delivery(customer, address)


if __name__ == "__main__":
    main()
