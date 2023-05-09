export default interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

const employee1: Employee = {
  registration: '1234567890123456',
  salary: 1000,
  admissionDate: new Date(),
  generateRegistration() {
    return `${Math.floor(Math.random() * 10 ** 16)}`;
  },
};

// console.log(employee1);
