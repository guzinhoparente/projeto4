let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(500, 500);
  palavra = marcos();
  musica.loop();
}
function preload(){
  imagem = loadImage("foto.webp");
  musica = loadSound("musica.mp3")
}


function draw() {
  chocolate();
  marcos();
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 250, 250);
  
  
}

function chocolate(){
background("#000000");
  image(imagem,0,0,500,500)
  fill("#FF9800");
  textSize(64);
  textAlign(CENTER,CENTER);
  
}

function marcos(){let palavras = ["farcry" , "skate3" , "minecraft" , "forza" , "gta"];
  return random(palavras);
                  
}