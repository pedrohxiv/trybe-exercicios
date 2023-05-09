import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    }
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    }
    this._examsGrades = value;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  public set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    }
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades].reduce(
      (total, currentValue) => total + currentValue,
    );
  }

  sumAverageGrade(): number {
    return this.sumGrades() / (this.examsGrades.length + this.assignmentsGrades.length);
  }

  generateEnrollment(): string {
    return `${Math.floor(Math.random() * 10 ** 16)}`;
  }
}

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const cristiana = new Student('Cristiana Santos', new Date('2007/11/24'));
// const felipe = new Student('Felipe Costa', new Date('2006/07/08'));

// carolina.examsGrades = [10, 7, 4, 8];
// carolina.assignmentsGrades = [7, 3];
// cristiana.examsGrades = [8, 2, 3, 9, 10];
// cristiana.assignmentsGrades = [4, 4];
// felipe.examsGrades = [10, 9, 1, 2];
// felipe.assignmentsGrades = [1, 8, 3];

// console.log(carolina);
// console.log(cristiana);
// console.log(felipe);
