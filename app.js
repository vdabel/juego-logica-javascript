const imgMeme = document.getElementById('img-meme');
const btnEnviar = document.getElementById('enviar');
const lblNumero= document.getElementById('lblNumero');
lblNumero.focus();


let numMaximo = 10;
let numMinimo = 1;
let numSecreto = Math.floor(Math.random() * (numMaximo + 1 - numMinimo)) + numMinimo;
console.log(numSecreto)

let intentos = 1;
let maxIntentos = 3;

btnEnviar.addEventListener('click', () => {
    let inpUsuario = document.getElementById('numeroUsuario');
    let numUsuario = inpUsuario.value.trim();

    if (numUsuario != '') {

        numUsuario = parseInt(numUsuario);
        if (numUsuario == numSecreto) {
            lblNumero.innerHTML = `Acertaste, el número ${numSecreto}. Lo hiciste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}.`;
            imgMeme.src = 'img/buena.webp';
            btnEnviar.innerHTML = 'Volver a jugar';
            btnEnviar.addEventListener('click', () => location.reload());
        } else {
            lblNumero.innerHTML = `Intentalo de nuevo, tiene ${maxIntentos - intentos} ${(intentos == maxIntentos - 1) ? 'intento' : 'intentos'} más.`;

            if (intentos == 1) {
                imgMeme.src = 'img/intento-1.webp';
            } else if (intentos == 2) {
                imgMeme.src = 'img/intento-2.webp';
            } else if (intentos == 3) {
                imgMeme.src = 'img/intento-3.webp';
                lblNumero.innerHTML = `Perdiste, llegaste al número máximo de ${maxIntentos} intentos`;
                btnEnviar.innerHTML = 'Volver a intentarlo';
                btnEnviar.addEventListener('click', () => location.reload());
            }

            intentos++;
            inpUsuario.value = '';
            inpUsuario.focus();
        }
    } else {
        lblNumero.innerHTML = '¡Por favor, ingrese un número!';
        imgMeme.src = 'img/error.webp';
    }
});


