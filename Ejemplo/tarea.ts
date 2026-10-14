// Un array de tecnologías para recorrer
const tecnologías: string[] = ["Node.js", "Deno", "Bun "];

console.log("--- PROBANDO LA VELOCIDAD DE BUN ---");

// Recorremos el array e imprimimos un mensaje por cada una
tecnologías.forEach((nombre, index) => {
  console.log(`${index + 1}. Aprendiendo a usar: ${nombre}`);
});

console.log("-------------------------------------");
console.log(`¡Prueba completada con éxito usando Bun v${Bun.version}!`);