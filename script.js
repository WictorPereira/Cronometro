let milissegundos = 0;
let segundos = 0;
let minutos = 0;
var cronometro;



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

  
    innerHTML = min.innerHTML = `${minutos < 10 ? '0' : ''}${minutos} `

    innerHTML = seg.innerHTML = `${segundos < 10 ? '0' : ''}${segundos}`

    innerHTML = mile.innerHTML = `${milissegundos < 99? '0' : ''}${milissegundos}   `

}


// Iniciar o contador
let iniciado = false;
function iniciar() {
  if (!iniciado) {
    cronometro = setInterval(atualizarContador, 10);
    document.getElementById('iniciar').disabled = true;
    document.getElementById('parar').disabled = false;
    iniciado = true;
  }
    
} 


// Parar contador 

function parar() { 
    clearInterval(cronometro)
    document.getElementById('iniciar').disabled = false;
    var parar = document.getElementById('parar').disabled = true;
    iniciado = false;
}

function limpar() {
    var limpar = document.getElementById('limpar')
    
    var min = document.getElementById('minutos')
    var seg = document.getElementById('segundos')
    var mile = document.getElementById('milesimos')

    innerHTML = min.innerHTML = `00`

    innerHTML = seg.innerHTML = `00`

    innerHTML = mile.innerHTML = `000`
    location.reload();
}


