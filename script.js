
if (localStorage.getItem('nome') == null) {
    localStorage.setItem("nome", window.prompt("Digite seu nome", ""));
}

function atualizarNome() {
    console.log("tentando atualizar nome");
    var spanNome = document.getElementById("nome");
    spanNome.innerHTML = localStorage.getItem("nome");
}


function getContext() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    return context;
}

function clearContext() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function desenharRetangulos() {
    clearContext();
    getContext().beginPath();
    getContext().rect(0, 0, 200, 200);
    for (let i = 0; i < 16; i++) {
        getContext().rect(15 + parseInt(i / 4) * 50, 15 + (i % 4) * 50, 25, 25);
    }
    getContext().stroke();
    getContext().closePath();
}

function desenharCirculos() {
    clearContext();
    for (let i = 0; i < 10; i++) {
        getContext().beginPath();
        getContext().arc(150 + i, 150 + i, 100 - i * 10, 0, 2 * Math.PI);
        getContext().stroke();
        getContext().closePath();
    }
}

function desenharCirculoGradient() {
    clearContext();
    getContext().beginPath();
    var lg = getContext().createLinearGradient(150, 40, 100, 200);
    lg.addColorStop(0, "green");
    lg.addColorStop(1, "white");
    getContext().fillStyle = lg;
    getContext().arc(100, 100, 50, 0, 2 * Math.PI);
    getContext().fill();
    getContext().stroke();
    getContext().closePath();
}

function permitirDropar(ev) {
    ev.preventDefault();
}

function dropQualidades(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.innerHTML += data + "<br/>";
}

function moverQualidade(ev) {
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}