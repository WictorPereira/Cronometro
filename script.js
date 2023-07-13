let milissegundos = 0;
let segundos = 0;
let minutos = 0;
var intervalo;


// Função para atualizar o contador
function atualizarContador() {
  // Incrementar os milissegundos
  milissegundos += 10;

  // Verificar se passou um segundo
  if (milissegundos >= 1000) {
    milissegundos = 0;
    segundos++;

    // Verificar se passou um minuto
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
    }
  }
  

  // Exibir o tempo atualizado

  var min = document.getElementById('minutos')
  var seg = document.getElementById('segundos')
  var mile = document.getElementById('milesimos')
  
    innerHTML = min.innerHTML = `${minutos} `

    innerHTML = seg.innerHTML = `${segundos}`

    innerHTML = mile.innerHTML = `${milissegundos }  `
}

// Iniciar o contador

function iniciar(){
    setInterval(atualizarContador, 10);
    document.getElementById('iniciar').disabled = true;
}
// Parar contador 


function parar() { 
    document.getElementById('parar').disabled = true;
    
    


    
}


