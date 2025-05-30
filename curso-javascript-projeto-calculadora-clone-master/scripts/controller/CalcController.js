class CalcController {
  constructor() {
    this._displayCalc = "0";
    this.currentDate;
    this.initialize();
  }

  initialize() {}

  get displaycalc() {
    return this._displayCalc;
  }

  set displaycalc(valor) {
    this._displayCalc = valor;
  }

  get currentDate() {
    return this.currentDate;
  }

  set currentDate(valor) {
    this._dataAtual = valor;
  }
}
