// Desafio Parte 1

imagen = document.querySelector('#profile');
function myBorder() {
    if (imagen.style.border == 'none') {
        imagen.style.border = "2px solid red";
    }
    else {
        imagen.style.border = 'none';
    }
}

imagen.addEventListener('click', myBorder);

// Desafio Parte 2

boton1 = document.querySelector('#boton1');

function suma() {
    cant1 = Number(document.querySelector('#valor1').value);
    cant2 = Number(document.querySelector('#valor2').value);
    cant3 = Number(document.querySelector('#valor3').value);
    total = cant1 + cant2 + cant3;
    
    if (total == 0) {
        document.querySelector('#cantidad-juguetes').innerHTML = `No has seleccionado stickers :(`;
    }

    else if (total <= 10) {
        document.querySelector('#cantidad-juguetes').innerHTML = `Llevas un total de ${total} juguetes.`;
    }
    
    else {
        document.querySelector('#cantidad-juguetes').innerHTML = "Pasaste el máximo de juguetes permitidos, elije solo 10.";
    }   
}

boton1.addEventListener('click', suma);

// Desafio Parte 3

boton2 = document.querySelector('#boton2');

function password() {
    n1 = document.querySelector('#select1').value;
    n2 = document.querySelector('#select2').value;
    n3 = document.querySelector('#select3').value;
    res = document.querySelector('#password');

    if (n1 == 9 && n2 == 1 && n3 == 1) {
        res.innerHTML = 'Password 1 correcto.';
    }
    else if (n1 == 7 && n2 == 1 && n3 == 4) {
        res.innerHTML = 'Password 2 correcto.';
    }
    else {
        res.innerHTML = 'Password incorrecto';
    }
}

boton2.addEventListener("click", password);

