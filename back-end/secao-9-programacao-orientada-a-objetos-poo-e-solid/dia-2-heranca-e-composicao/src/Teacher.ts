import Subject from './Subject';
import Employee from './Employee';
import Person from './Person';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }

  public get registration() {
    return this._registration;
  }
  public set registration(value) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
    }
    this._registration = value;
  }

  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo');
    }
    this._salary = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }
  public set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro');
    }
    this._admissionDate = value;
  }

  generateRegistration() {
    return `${Math.floor(Math.random() * 10 ** 16)}`;
  }
}

// const matematica = new Subject('Matemática');
// const historia = new Subject('História');
// const filosofia = new Subject('Filosofia');

// const maria = new Teacher('Maria da Silva', new Date('1979/02/20'), 1500, matematica);
// const joao = new Teacher('João Machado', new Date('1962/07/11'), 2000, historia);
// const claudio = new Teacher('Claudio Santos', new Date('1982/10/07'), 1800, filosofia);

// console.log(maria);
// console.log(joao);
// console.log(claudio);
