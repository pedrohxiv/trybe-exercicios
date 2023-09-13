from abc import ABC, abstractmethod


class Employee(ABC):
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    @abstractmethod
    def calculate_bonus(self):
        pass


class Developer(Employee):
    def calculate_bonus(self):
        return self.salary * 0.20


class Analyst(Employee):
    def calculate_bonus(self):
        return self.salary * 0.30


class Manager(Employee):
    def calculate_bonus(self):
        return self.salary * 0.40


def main():
    dev = Developer("João", 5000.00)
    analyst = Analyst("Maria", 6000.00)
    manager = Manager("Carlos", 7000.00)

    employees = [dev, analyst, manager]

    for employee in employees:
        bonus = employee.calculate_bonus()
        print(f"Nome: {employee.name}")
        print(f"Salário: R${employee.salary:.2f}")
        print(f"Bônus: R${bonus:.2f}\n")


if __name__ == "__main__":
    main()
