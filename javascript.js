function conversor() {
  prompt("Ímpar ou Par?");
  escolhaJogador = prompt("Esolha um número entre 1 e 5.");
  escolhaComputador = Math.floor(Math.random() * 5) + 1;
  if (escolhaJogador == escolhaComputador) {
    alert("PAR GANHOU");
  }



  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 3) {
      alert("PAR GANHOU");
    }
    if (escolhaComputador == 4) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 5) {
      alert("PAR GANHOU");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 3) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 4) {
      alert("PAR GANHOU");
    }
    if (escolhaComputador == 5) {
      alert("ÍMPAR GANHOU");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      alert("PAR GANHOU");
    }
    if (escolhaComputador == 2) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 4) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 5) {
      alert("PAR GANHOU");
    }
  }

  if (escolhaJogador == 4) {
    if (escolhaComputador == 1) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 2) {
      alert("PAR GANHOU");
    }
    if (escolhaComputador == 3) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 5) {
      alert("ÍMPAR GANHOU");
    }
  }
  if (escolhaJogador == 5) {
    if (escolhaComputador == 1) {
      alert("PAR GANHOU");
    }
    if (escolhaComputador == 2) {
      alert("ÍMPAR GANHOU");
    }
    if (escolhaComputador == 3) {
      alert("PAR GANHOU");
    }
    if (escolhaComputador == 4) {
      alert("ÍMPAR GANHOU");
    }
  }
  alert("A escolha do computador foi: " + escolhaComputador);
}


