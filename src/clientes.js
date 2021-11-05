class Clientes {
	constructor(nombre, impuesto) {
		this._nombre = nombre;
		this._impuesto = impuesto;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
	calcularImpuesto() {
		const valor = (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
		return {
			texto: `El impuesto total a pagar es: $${valor}`,
			valor: valor,
		};
	}
}

export default Clientes;
