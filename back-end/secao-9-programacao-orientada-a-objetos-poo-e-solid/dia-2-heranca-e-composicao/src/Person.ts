export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error('O nome deve ter no mínimo três caracteres');
    }
  }

  private validateBirthDate(birthDate: Date): void {
    if (birthDate.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    if (
      Math.floor(Math.abs(new Date().getTime() - birthDate.getTime()) / 31_536_000_000) >
      120
    ) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
  }
}

// const luiza = new Person('Lu', new Date('2005/10/02'));
// const vitoria = new Person('Vitoria Fernandes', new Date('2024/12/28'));
// const larissa = new Person('Larissa Silva', new Date('1900/10/02'));
// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));

// console.log(luiza);
// console.log(vitoria);
// console.log(larissa);
// console.log(maria);
