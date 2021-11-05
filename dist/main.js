"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var submittedData = document.querySelector("#submittedData");
submittedData.addEventListener("click", function (e) {
  e.preventDefault();
  var inputClientName = document.querySelector(".inputClientName").value;
  var inputBruteAnnualAmount = Number(document.querySelector(".inputBruteAnnualAmount").value);
  var inputDeductionAmount = Number(document.querySelector(".inputDeductionAmount").value);
  var result = document.querySelector("#result");
  var newTax = new _impuestos["default"](inputBruteAnnualAmount, inputDeductionAmount);
  var newClient = new _clientes["default"](inputClientName, newTax);
  var toPay = newClient.calcularImpuesto();
  result.innerHTML = toPay.texto;
});
var impuesto = new _impuestos["default"]("1000000", "100000");
var cliente = new _clientes["default"]("Juan", impuesto);
var pagar = cliente.calcularImpuesto();
console.log(pagar.texto);