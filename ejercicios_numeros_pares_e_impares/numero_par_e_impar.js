
function numeroPar(num) {
	if (num % 2 === 0) {
		return "par"
	} else {
		return "impar"
	}
}

let num = Number(prompt("Ingrese un número: "));
console.log(num + " es número " + numeroPar(num));
