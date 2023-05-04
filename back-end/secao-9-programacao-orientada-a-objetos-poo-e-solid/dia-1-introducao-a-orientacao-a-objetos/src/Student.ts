class Student {
  private _registration: string;
  private _name: string;
  private _examNotes: number[];
  private _jobNotes: number[];

  constructor(
    registration: string,
    name: string,
    examNotes: number[],
    jobNotes: number[],
  ) {
    this._registration = registration;
    this._name = name;
    this._examNotes = examNotes;
    this._jobNotes = jobNotes;
  }

  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    this._registration = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get examNotes(): number[] {
    return this._examNotes;
  }
  public set examNotes(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante deve ter 4 notas de prova');
    }
    this._examNotes = value;
  }

  public get jobNotes(): number[] {
    return this._jobNotes;
  }
  public set jobNotes(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante deve ter 2 notas de trabalho');
    }
    this._jobNotes = value;
  }

  public sumNotes(): number {
    return [...this.examNotes, ...this.jobNotes].reduce(
      (total, currentValue) => total + currentValue,
    );
  }

  public averageNotes(): number {
    return this.sumNotes() / (this.examNotes.length + this.jobNotes.length);
  }
}

const student1 = new Student('202001011', 'Maria da Silva', [2, 6, 9, 2], [3, 2]);

const student2 = new Student('202001012', 'João Pereira', [1, 8, 5, 7], [6, 8]);

console.log(student1);

console.log(student2);

console.log('Soma das notas: ', student1.sumNotes());

console.log('Media das notas: ', student1.averageNotes());
