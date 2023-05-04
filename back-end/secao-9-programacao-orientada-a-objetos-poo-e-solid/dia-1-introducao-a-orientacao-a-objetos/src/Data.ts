class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    if (new Date(`${year}-${month}-${day}`).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  public get day(): number {
    return this._day;
  }
  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  public getMonthName(): string {
    return [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ][this.month - 1];
  }

  public isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  public compare(date: Data): number {
    if (
      new Date(`${this.year}-${this.month}-${this.day}`) >
      new Date(`${date.year}-${date.month}-${date.day}`)
    )
      return 1;
    if (
      new Date(`${this.year}-${this.month}-${this.day}`) <
      new Date(`${date.year}-${date.month}-${date.day}`)
    )
      return -1;
    return 0;
  }

  public format(format: string): string {
    return format
      .replace('dd', this.day > 9 ? this.day.toString() : `0${this.day.toString()}`)
      .replace('mm', this.month > 9 ? this.month.toString() : `0${this.month.toString()}`)
      .replace('M', this.getMonthName())
      .replace('aaaa', this.year.toString())
      .replace('aa', this.year.toString().substr(-2));
  }
}

const data1 = new Data(29, 1, 1902);
const data2 = new Data(10, 8, 1824);
const data3 = new Data(17, 10, 2007);

console.log(data1);

console.log('Mês: ', data2.getMonthName());

console.log('É ano bissexto: ', data3.isLeapYear() ? 'Sim' : 'Não');

console.log(
  `A primeira data é ${
    ['anterior', 'igual', 'posterior'][data1.compare(data2) + 1]
  } a segunda.`,
);

console.log(data1.format('dd/mm/aaaa'));
console.log(data1.format('aaaa-mm-dd'));
console.log(data1.format('dd de M de aa'));
console.log(data1.format('dd, M de aaaa'));
