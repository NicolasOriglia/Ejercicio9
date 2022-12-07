const fecha = new Date();
console.log(fecha);

// el mes es septiembre pero doy mes 08 ya que empieza desde 0,
const fechaNacimiento = new Date(1998, 8, 15); 
console.log(fechaNacimiento.toLocaleDateString());

const comparar = (fecha > fechaNacimiento);
console.log(comparar);

let diaNac = fechaNacimiento.getDate();
console.log(diaNac);
let mesNac = fechaNacimiento.getMonth()+1;
console.log(mesNac);
let anioNac = fechaNacimiento.getFullYear();
console.log(anioNac);