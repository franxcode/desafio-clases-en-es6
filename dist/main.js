"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _impuestos["default"]("1000000", "100000");
var cliente = new _clientes["default"]("Juan", impuesto);
var pagar = cliente.calcularImpuesto();
console.log(pagar.texto);
document.body.innerHTML = "<h1>".concat(pagar.texto, "</h1>");