document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const main = document.getElementById("mainContent");

  if (startBtn && intro && main) {
    startBtn.addEventListener("click", () => {
      intro.classList.add("hidden");
      main.classList.remove("hidden");
      main.classList.add("active");
    });
  }

  // BOTÃO DE PEDIDO
  const revealBtn = document.getElementById("revealBtn");
  const pedido = document.getElementById("pedido");
  const pedidoText = document.getElementById("pedidoText");

  if (revealBtn && pedido && pedidoText) {
  revealBtn.addEventListener("click", () => {
    // Mostra a seção
    pedido.classList.remove("hidden");

    // Força o navegador a redesenhar antes de rolar
    setTimeout(() => {
      pedido.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Começa o texto com efeito de digitação
    let texto = "Então... depois de tudo isso... 💭\nQuer namorar comigo?";
    let i = 0;
    pedidoText.innerHTML = "";

    function digitar() {
      if (i < texto.length) {
        pedidoText.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 80);
      }
    }

    digitar();
  });
}

  // VÍDEO
  const playBtn = document.querySelector('.btn-play');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoPlayer = document.getElementById('videoPlayer');

if (playBtn && videoModal && closeModal && videoPlayer) {
  playBtn.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
    videoPlayer.currentTime = 0;
    videoPlayer.play();
  });

  closeModal.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });
}

  // GALERIA
  const imagensGaleria = document.querySelectorAll('.galeria img');
  const fotoModal = document.getElementById('fotoModal');
  const modalImg = document.getElementById('imagemExpandida');
  const fecharModal = document.getElementById('fecharModal');

  if (fotoModal && modalImg && fecharModal) {
    imagensGaleria.forEach(img => {
      img.addEventListener('click', () => {
        fotoModal.classList.remove('hidden');
        modalImg.src = img.src;
      });

      fecharModal.addEventListener('click', () => {
        fotoModal.classList.add('hidden');
      });
    });
  }
});
