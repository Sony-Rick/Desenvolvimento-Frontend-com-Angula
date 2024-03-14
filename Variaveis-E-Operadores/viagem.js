const precoConbustivel = 5.79;
const KmPorLitros = 10;
const distanciaEmkm = 100;

const litrosConsumidos = distanciaEmkm / KmPorLitros;
const valorGasto = litrosConsumidos * precoConbustivel;

console.log(valorGasto);


