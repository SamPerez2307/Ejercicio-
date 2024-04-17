const nivelUsuario = parseInt(prompt("digite tu nivel:"));
let experienciaTotal = 0;
let experienciaPorNivel = 100;

for (let i = 1; i <= nivelUsuario; i++) {
    if (i <= 10) {
        experienciaTotal += experienciaPorNivel;
        if(i === 10) {
            experienciaPorNivel = 1000;
        }
    } else {
        experienciaPorNivel += 200;
        experienciaTotal += 200; 
    }
}

console.log(`Para el nivel ${nivelUsuario}, tu experiencia acumulada es: ${experienciaTotal} EXP.`);
