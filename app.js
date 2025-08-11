// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigoSecreto = '';
let existeAmigo = false;

function iniciar() {
    listaAmigos = [];
    amigoSecreto = '';
    existeAmigo = false;
    sorteado = false;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.querySelector("#resultado").innerHTML = '';
}

function agregarAmigo() {
    existeAmigo = false;
    let inputNombre = document.getElementById('amigo');
    let nombreAmigo = inputNombre.value.trim();
    if (nombreAmigo !== '') {
        for (let amigo of listaAmigos) {
            if (amigo === nombreAmigo) {
                existeAmigo = true;
                break;
            }
        }
        if (!existeAmigo) {
            listaAmigos.push(nombreAmigo);
            inputNombre.value = '';
            let li = document.createElement('li');
            li.textContent = nombreAmigo;
            document.getElementById('listaAmigos').appendChild(li);
        } else {
            alert('El nombre ya está en la lista.');
            inputNombre.value = '';
        }
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let indice = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[indice];
        let li = document.createElement('li');
        li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
        document.getElementById('resultado').appendChild(li);
        document.getElementById('listaAmigos').innerHTML = '';
        listaAmigos = [];
    } else {
        alert('No hay amigos en la lista para sortear.');
        document.querySelector("#resultado").innerHTML = '';
    }
}

iniciar();  