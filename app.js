let temas = ["tema-padrao", "tema-claro", "tema-escuro"];
let index = 0;

document.getElementById("botao-tema").addEventListener("click", function () {
  const body = document.body;
  body.classList.remove(...temas, "tema-marrom");
  index = (index + 1) % temas.length;
  body.classList.add(temas[index]);
});

document.getElementById("botao-sim").addEventListener("click", function () {
  document.getElementById("mensagem").innerText = "Eba, você ganhou uma estrela! ⭐";
  document.getElementById("som-brilho").play();
});

document.getElementById("botao-nao").addEventListener("click", function () {
  const body = document.body;
  body.classList.remove(...temas);
  body.classList.add("tema-marrom");
  document.getElementById("mensagem").innerText = "";

  // Tocar som de peido
  document.getElementById("som-peido").play();

  // Criar chuva de cocozinhos
  for (let i = 0; i < 30; i++) {
    criarEmoji();
  }
});

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("poop");
  emoji.innerText = "💩";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.getElementById("chuva").appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}

