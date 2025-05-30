class CalcController {
  constructor() {
    this._displayCalc = "0";
    this.currentDate;
    this.initialize();
  }

  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "0";
    dateEl.innerHTML = "30/05/2025";
    timeEl.innerHTML = "10:00";
  }

  get displaycalc() {
    return this._displayCalc;
  }

  set displaycalc(valor) {
    this._displayCalc = valor;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(valor) {
    this._dataAtual = valor;
  }
}
