class CalcController {
  constructor() {
    // SELECIONANDO OS ATRIBUTOS
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize() {
    //this._dateEl.innerHTML = "30/05/2025";
    //this._timeEl.innerHTML = "10:00";
    this.setDisplayDateTime();

    setInterval(() => {
      // MÉTODO PARA O HORARIO MUDAR SEGUNDO A SEGUNDO
      this.setDisplayDateTime();
    }, 1000);
  }

  initButtonsEvents() {
    //MÉTODO P/ ENCONTRAR E CLICAR NOS BOTÕES
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    console.log(buttons);

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        console.log(btn.className.baseVal.replace("btn-", ""));
      });
    });
  }

  setDisplayDateTime() {
    // MÉTODO PARA COLOCAR DATA E HORA NO DISPLAY
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    //PEGANDO OS VALORES DA HORA
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    // MODIFICANDO OS VALORES DA HORA
    return (this._timeEl.innerHTML = value);
  }

  get displayDate() {
    // PEGANDO O VALOR DA DATA
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    // MODIFICANDO O VALOR DA DATA
    return (this._dateEl.innerHTML = value);
  }

  get displaycalc() {
    // ENCONTRANDO O DISPLAY
    return this._displayCalcEl.innerHTML;
  }

  set displaycalc(value) {
    // MODIFICANDO O DISPLAY
    return (this._displayCalcEl.innerHTML = value);
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    return (this._currentDate = value);
  }
}
