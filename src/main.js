import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

const impuesto = new Impuestos("1000000", "100000");
const cliente = new Clientes("Juan", impuesto);

const pagar = cliente.calcularImpuesto();

console.log(pagar.texto);
// document.body.innerHTML = `<h1>${pagar.texto}</h1>`;
