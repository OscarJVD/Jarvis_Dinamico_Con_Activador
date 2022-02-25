if (localStorage.getItem('isGirlAvatarFlag') === null) {
  console.log("GIRL AVATAR")
  localStorage.setItem('isGirlAvatarFlag', true)
}

// if (isProduction()) console.log = function () { }

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
    mountVideo('reposoTrack')
    // document.getElementById('reposoChicoTrack').style.display = 'none';
    // document.getElementById('reposoTrack').style.display = 'inherit';
  } else {
    mountVideo('reposoChicoTrack')
    // document.getElementById('reposoTrack').style.display = 'none';
    // document.getElementById('reposoChicoTrack').style.display = 'inherit';
  }
})

// mountVideo('saludoTrack', videoDinamicSrcArr);
// configVideos();

const arrsCommands = Object.values(commands)
const arrAttachedCommands = [].concat(...arrsCommands);
const arrAttachedCommandsLength = arrAttachedCommands.length
const commandsLengths = [], arrSec = []
arrsCommands.forEach(elem => commandsLengths.push(elem.length))
const commandsLengthsLength = commandsLengths.length
let acumulador = [], flag = false

for (let i = 0; i < commandsLengthsLength; i++) {
  if (i == 0) {
    arrSec.push(commandsLengths[i])
    acumulador.push(commandsLengths[i])
  } else {
    arrSec.push(acumulador.reduce((a, b) => a + b, 0) + commandsLengths[i])
    acumulador.push(commandsLengths[i])
  }
}

Jarvis.on(arrAttachedCommands).then(function (i) {

  const defCommand = identifySection(arrSec, i)

  console.log('defCommand', defCommand)
  switch (defCommand) {
    case 0:
      let random = getRandomArbitrary(1, 2)
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
        if (random == 1)
          mountVideo('saludoTrack');
        else
          mountVideo('saludoSecTrack');
      }
      else {
        if (random == 1)
          mountVideo('saludoChicoTrack');
        else
          mountVideo('saludoChicoSecTrack');
      }

      document.getElementById("buttonsPartOne").classList.remove('d-none')
      document.getElementById("buttonsPartBox").classList.remove('d-none')
      document.getElementById("YesOrNoBox").classList.add('d-none')
      break;
    case 1:
      if (localStorage.getItem('isGirlAvatarFlag') == 'true')
        mountVideo('reposoTrack');
      else
        mountVideo('reposoChicoTrack');
      Jarvis.say("Estoy sin hacer nada");
      break;
    case 2:
      Jarvis.say("Modo frases lentas activado", {
        onStart() {
          Jarvis.dontObey();
        },
        onEnd() {
          Jarvis.obey();
        },
      })
      startArtyom('es-ES', 'slow');
      if (respuestaMode) respuestaMode = 'slow'
      break;
    case 3:
      Jarvis.say("Modo frases normales activado", {
        onStart() {
          Jarvis.dontObey();
        },
        onEnd() {
          Jarvis.obey();
        },
      })
      startArtyom('es-ES', 'normal');
      if (respuestaMode) respuestaMode = 'normal'
      break;
    case 4:
      Jarvis.say("Modo frases rápidas activado", {
        onStart() {
          Jarvis.dontObey();
        },
        onEnd() {
          Jarvis.obey();
        },
      })
      startArtyom('es-ES', 'quick');
      if (respuestaMode) respuestaMode = 'quick'
      break;
    case 5:
      Jarvis.shutUp();
      break;
    case 6:
      let randomGallery = getRandomArbitrary(1, 8)
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') {

        if (random == 1) mountVideo('galeriasMasunoSecTrack')
        else if (random == 2) mountVideo('galeriasNuncaFirstTrack')
        else if (random == 3) mountVideo('galeriasNuncaSecTrack')
        else if (random == 4) mountVideo('galeriasOpeningFirstTrack')
        else if (random == 5) mountVideo('galeriasOpeningSecTrack')
        else if (random == 6) mountVideo('galeriasProgramaFirstTrack')
        else if (random == 7) mountVideo('galeriasProgramaSecTrack')
        else mountVideo('galeriasArtistasTrack')
      } else {

        if (randomGallery == 1) mountVideo('galeriasChicoMasunoSecTrack')
        else if (randomGallery == 2) mountVideo('galeriasChicoNuncaFirstTrack')
        else if (randomGallery == 3) mountVideo('galeriasChicoNuncaSecTrack')
        else if (randomGallery == 4) mountVideo('galeriasChicoOpeningFirstTrack')
        else if (randomGallery == 5) mountVideo('galeriasChicoOpeningSecTrack')
        else if (randomGallery == 6) mountVideo('galeriasChicoProgramaFirstTrack')
        else if (randomGallery == 7) mountVideo('galeriasChicoProgramaSecTrack')
        else mountVideo('galeriasChicoArtistasTrack')

      }
      break;
    case 7:
      // Reinicializar Jarvis sin comandos
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
        mountVideo('listYesChicaTrack');
      }
      else {
        mountVideo('listYesChicoTrack');
      }

      document.getElementById("buttonsPartOne").classList.remove('d-none')
      document.getElementById("buttonsPartBox").classList.remove('d-none')
      document.getElementById("YesOrNoBox").classList.add('d-none')
      // if (localStorage.getItem('isGirlAvatarFlag') == 'true')
      //   mountVideo('openQuestionTrack');
      // else
      //   mountVideo('openQuestionChicoTrack');
      break;
    case 8:
      if (localStorage.getItem('isGirlAvatarFlag') == 'true')
        mountVideo('scoreTrack');
      else
        mountVideo('scoreChicoTrack');
      // document.getElementById('btnYes').click()
      break;
    case 9:
      let randomArch = getRandomArbitrary(1, 8)
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') {

        if (randomArch == 1) mountVideo('architectureFundacionFirstTrack')
        else if (randomArch == 2) mountVideo('architectureFundacionSecTrack')
        else if (randomArch == 3) mountVideo('architectureEspaciosFirstTrack')
        else if (randomArch == 4) mountVideo('architectureEspaciosSecTrack')
        else if (randomArch == 5) mountVideo('architectureProgramaTrack')
        else if (randomArch == 6) mountVideo('architectureSalaTrack')
        else if (randomArch == 7) mountVideo('architectureVipTrack')
        else mountVideo('architectureArcoTrack')
      } else {

        if (randomArch == 1) mountVideo('architectureChicoFundacionFirstTrack')
        else if (randomArch == 2) mountVideo('architectureChicoFundacionSecTrack')
        else if (randomArch == 3) mountVideo('architectureChicoEspaciosFirstTrack')
        else if (randomArch == 4) mountVideo('architectureChicoEspaciosSecTrack')
        else if (randomArch == 5) mountVideo('architectureChicoProgramaTrack')
        else if (randomArch == 6) mountVideo('architectureChicoSalaTrack')
        else if (randomArch == 7) mountVideo('architectureChicoVipTrack')
        else mountVideo('architectureChicoArcoTrack')

      }
      break;
    case 10:
      let randomHistory = getRandomArbitrary(1, 3)
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
        if (randomHistory == 1) mountVideo('historyArcoFirstTrack')
        else if (randomHistory == 2) mountVideo('historyArcoSecTrack')
        else mountVideo('historyArcoThirdTrack')
      } else {
        if (randomHistory == 1) mountVideo('historyChicoArcoFirstTrack')
        else if (randomHistory == 2) mountVideo('historyChicoArcoSecTrack')
        else mountVideo('historyChicoArcoThirdTrack')
      }
      break;
    case 11:
      let randomNews = getRandomArbitrary(1, 3)
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
        if (randomNews == 1) mountVideo('newsFirstTrack')
        else if (randomNews == 2) mountVideo('newsSecTrack')
        else mountVideo('newsThirdTrack')
      } else {
        if (randomNews == 1) mountVideo('newsChicoFirstTrack')
        else if (randomNews == 2) mountVideo('newsChicoSecTrack')
        else mountVideo('newsChicoThirdTrack')
      }
      break;
    case 12:
      // Puntuación
      document.getElementById('scoreBox').classList.add('d-none');
      document.getElementById('buttonsBox').classList.add('d-none');
      if (localStorage.getItem('isGirlAvatarFlag') == 'true') mountVideo('openQuestionTrack');
      else mountVideo('openQuestionChicoTrack');
      break;
  }
});

Jarvis.redirectRecognizedTextOutput(async (recognized, isFinal) => {
  console.log('TEXTO RECONOCIDO  ', recognized, `isFinal ${isFinal}`);
  if (recognized) {
    let recogBox = document.getElementById('recognizedTxtCaption');
    let recogTxt = document.getElementById('spanRecognizedTxtCaption');

    const arrForbidden = ['ERROR', 'SPEECH_SYNTHESIS_START', 'SPEECH_SYNTHESIS_END', 'TEXT_RECOGNIZED', 'COMMAND_RECOGNITION_START', 'COMMAND_RECOGNITION_END', 'COMMAND_MATCHED', 'NOT_COMMAND_MATCHED', 'text chunk pro']

    if (recogBox && recogTxt && arrForbidden.every(value => !recognized.includes(value))) {
      recogBox = document.getElementById('recognizedTxtCaption');
      recogTxt = document.getElementById('spanRecognizedTxtCaption');
      recogTxt.textContent = capitalizarPrimeraLetra(recognized);
      recogBox.classList.remove('d-none');

      if (isFinal)
        recogTxt.textContent = capitalizarPrimeraLetra(recognized);
    }

    if (!recogBox.classList.contains("d-none")) {
      setTimeout(() => {
        if (recogBox)
          recogBox.classList.add('d-none');
      }, 10000);
    }
  }

  let ask;
  arrAttachedCommands.forEach(async (cmd, cmdIndex) => {
    if ( // Si coincide con algún comando o si lo que se dice tiene alguna coincidencia entre comandos
      (
        recognized.toLowerCase() == cmd.toLowerCase()
        || recognized.toLowerCase().includes(cmd.toLowerCase())
        || cmd.toLowerCase().includes(recognized.toLowerCase())
      )
    ) {

      const defCommand = identifySection(arrSec, cmdIndex)

      switch (defCommand) {
        case 0:
          ask = "Saludo"
          break;
        case 1:
          ask = "Reposo"
          break;
        case 2:
          ask = "Activación frases lentas"
          break;
        case 3:
          ask = "Activación frases normales"
          break;
        case 4:
          ask = "Activación frases rápidas"
          break;
        case 5:
          ask = "silencio"
          break;
        case 6:
          ask = "Galerias y secciones"
          break;
        case 7:
          ask = "Si quisieron saber mas de la feria"
          break;
        case 8:
          ask = "No quisieron saber mas de la feria, puntuaron"
          break;
        case 9:
          ask = "Espacios y arquitectura"
          break;
        case 10:
          ask = "Historia de Arco"
          break;
        case 11:
          ask = "Novedades 2022"
          break;
        case 12:
          ask = "Respuesta libre por 10 segundos"
          break;
      }

      if (isFinal)
        await postData('storeAnswers', { ask, answer: recognized })
    }
  })
});