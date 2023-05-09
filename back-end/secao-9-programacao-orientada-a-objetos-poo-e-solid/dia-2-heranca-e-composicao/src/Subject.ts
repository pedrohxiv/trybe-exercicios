export default class Subject {
  constructor(private _name: string) {
    this.validateName(this.name);
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error('O nome deve ter no mínimo três caracteres');
    }
  }
}

// const matematica = new Subject('Matemática');
// const historia = new Subject('História');
// const filosofia = new Subject('Filosofia');
// const portugues = new Subject('Po');

// console.log(matematica);
// console.log(historia);
// console.log(filosofia);
// console.log(portugues);
