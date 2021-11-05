import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

const submittedData = document.querySelector("#submittedData");

submittedData.addEventListener("click", (e) => {
	e.preventDefault();
	const inputClientName = document.querySelector(".inputClientName").value;
	const inputBruteAnnualAmount = Number(document.querySelector(".inputBruteAnnualAmount").value);
	const inputDeductionAmount = Number(document.querySelector(".inputDeductionAmount").value);
	const result = document.querySelector("#result");

	const newTax = new Impuestos(inputBruteAnnualAmount, inputDeductionAmount);
	const newClient = new Clientes(inputClientName, newTax);
	const toPay = newClient.calcularImpuesto();

	result.innerHTML = toPay.texto;
});
const impuesto = new Impuestos("1000000", "100000");
const cliente = new Clientes("Juan", impuesto);

const pagar = cliente.calcularImpuesto();

console.log(pagar.texto);
