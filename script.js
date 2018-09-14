
function getContext(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    return context;
}

function clearContext(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function desenharRetangulos(){
    clearContext();
    getContext().beginPath();
    getContext().rect(0,0,200,200);
    for(let i = 0 ; i <10 ; i++){
        getContext().fillStyle = "red";
        getContext().fillRect(10*i,10*i,50,50);
        getContext().rect(10*i,10*i,50,50);
        getContext().fillStyle = "yellow";
        getContext().fillRect(10*i+60,10*i+60,50,50);
        getContext().rect(10*i+60,10*i+60,50,50);
    }
    getContext().stroke();
    getContext().closePath();
}

function desenharCirculos(){
    clearContext();
    getContext().beginPath();
    for(let i = 0; i <10 ; i++){
        getContext().arc(150+i, 150+i ,100-i*10 , 0 ,  2*Math.PI);
    }
    getContext().stroke();
    getContext().closePath();
}