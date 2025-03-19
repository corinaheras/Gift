// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I found a love for me", time: 2 },
  { text: "Oh, darling just dive right in and follow my lead", time: 9 },
  { text: "Well, I found a girl, beautiful and sweet", time: 16 },
  { text: "Oh, I never knew ou were the someone waiting' for me", time: 24 },
  { text: "Cause we were just kids when we fell in love", time: 30 },
  { text: "not knowin what it was", time: 35 },
  { text: "I will not give you up this time", time: 36 },
  { text: "Oh, darling, just kiss me slow, your heart is all I own", time: 46 },
  { text: "And in your eyes, you're holding mine", time: 54 },
  { text: "Baby, I'm dancin' in the dark with you between my arms", time: 60 },
  { text: "Barefoot on the grass while listenin' to our favourite song", time: 71 },
  { text: "When you said you looked a mess, I whispered underneath my breath", time: 79 },
  { text: "But you heard it, 'Darling, you look perfect tonight'", time: 86 },
  { text: "...", time: 94 },
  { text: "Well, I found a woman, stronger than anyone I know", time: 96 },
  { text: "She shares my dreams, I hope that someday, I'll share her home", time: 107 },
  { text: "I found a love to carry more than just my secrets", time: 115 },
  { text: "To carry love, to carry children of our own", time: 122 },
  { text: "we are still kids, but we're so in love, fightin' against all odds", time: 129 },
  { text: "Espero te haya gustado, con cariño, Coco<3", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);