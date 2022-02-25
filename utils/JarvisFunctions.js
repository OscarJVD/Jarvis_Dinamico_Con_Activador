// START ARTYOM
function startOneCommandArtyom() {
  artyom.fatality(); // Detener cualquier instancia previa

  setTimeout(function () { // Esperar 250ms para inicializar
    artyom.initialize({
      lang: "es-ES", // Más lenguajes son soportados, lee la documentación
      continuous: false, // Reconoce 1 solo comando y basta de escuchar
      listen: true, // Iniciar !
      debug: true, // Muestra un informe en la consola
      speed: 1 // Habla normalmente
    }).then(function () {
      console.log("Ready to work !");
    });
  }, 250);
}

function isProduction() {
  if (window.location.origin == 'https://my.local.host:50000') {
    return false;
  } else {
    // setInterval(() => {
    //   console.clear();
    // }, 5000);
    return true;
  }
}

function startArtyom(language, mode, recognizeType = true) {
  if (!language)
    language = Jarvis.getLanguage();

  let _startArtyom = function () {
    Jarvis.initialize({
      lang: language, // Start artyom with provided language
      continuous: recognizeType ? true : false, // Continuous mode enabled
      listen: true, // Start recognizing
      debug: isProduction() ? false : true, // Show everything in the console
      speed: 5, // talk normally
      volume: 1,
      soundex: false, // Use the soundex algorithm to understand different words
      mode: mode, // Opciones: quick, normal, slow
      // name: "jarvis"
      // obeyKeyword: "start again",
      // executionKeyword: "now" // say "now" at the end of a command to execute it immediately
    });
  }

  console.log("Artyom is listening to your commands");

  // stop artyom if stills active
  Jarvis.fatality();
  setTimeout(_startArtyom, 250);
}

function videoEnd(video) {

  mainBtnsDisabled(false)
  document.getElementById('talkBtnBox').classList.remove('d-none')

  if (localStorage.getItem('isGirlAvatarFlag') == 'true')
    mountVideo('reposoTrack')
  else
    mountVideo('reposoChicoTrack')

  document.getElementById('btnGallery').classList.remove('blueHover')
  document.getElementById('btnPlaces').classList.remove('blueHover')
  document.getElementById('btnHistory').classList.remove('blueHover')
  document.getElementById('btnNew').classList.remove('blueHover')
}


async function mountVideo(videoId, videosArr = videoDinamicLocalSrcArr) {
  let videoBox = document.getElementById('root-video')
  console.log('VIDEO PARA REPRODUCIR: ', videoId, videosArr)
  for (let el of videoBox.children) el.remove()

  // console.log(document.querySelector('video[data-id="baseTrack"]'))
  // let baseTrack = document.querySelector('video[data-id="baseTrack"]');
  let videoObj;

  videosArr.forEach(vid => {
    // console.log(videoId, vid.id)
    if (videoId == vid.id) videoObj = { src: vid.src, id: vid.id }
  });

  // if (!videoObj || Object.keys(videoObj).length == 0) return alert("El arreglo de rutas de videos esta mal")

  const { src, id } = videoObj

  // baseTrack.id = id
  // baseTrack.src = src
  // baseTrack.muted = false
  // baseTrack.autoplay = true
  // baseTrack.loop = false
  // baseTrack.style.width = screen.width;
  // baseTrack.style.height = screen.height;

  let baseTrack = document.createElement("video")
  baseTrack.setAttribute("src", src)
  baseTrack.setAttribute("width", '100%')
  baseTrack.setAttribute("class", "videoIA")

  if (id != 'reposoTrack' && id != 'reposoChicoTrack') {
    mainBtnsDisabled(true)
    baseTrack.addEventListener('play', function () {
      Jarvis.dontObey();
    });

    baseTrack.addEventListener('ended', function () {
      setTimeout(() => {
        Jarvis.obey();
      }, 500);
    });

    baseTrack.addEventListener('pause', function () {
      setTimeout(() => {
        Jarvis.obey();
      }, 500);
    });

    // baseTrack.addEventListener('load', function () {
    //   setTimeout(() => {
    //     Jarvis.obey();
    //   }, 500);
    // });
  } else if (id == 'reposoTrack' || id == 'reposoChicoTrack') {
    baseTrack.muted = true
    baseTrack.loop = true
  }

  // LISTENERS OR ACTIONS BY VIDEO
  baseTrack.ontimeupdate = function () {
    if (videoIsEnding(baseTrack) == 'preend') {

      if (id == 'openQuestionTrack' || id == 'openQuestionChicoTrack') {

        document.getElementById('buttonsBox').classList.add('d-none');
        document.getElementById('talkBtnBox').style.top = '73.5%'
        document.getElementById('btnActiveRecognizer').dataset.freesay = 'true';
        freeSayFlag = true

      } else if (id == 'scoreTrack' || id == 'scoreChicoTrack') {

        document.getElementById('buttonsBox').classList.remove('d-none');
        document.getElementById('scoreBox').classList.remove('d-none');
        document.getElementById('YesOrNoBox').classList.add('d-none');
        document.getElementById('buttonsPartOne').classList.add('d-none');
        document.getElementById('buttonsPartBox').classList.add('d-none');

      } else if (id == 'anotherThemeTrack' || id == 'anotherThemeChicoTrack') {

        document.getElementById("buttonsPartOne").classList.add('d-none')
        document.getElementById("buttonsPartBox").classList.add('d-none')
        document.getElementById("YesOrNoBox").classList.remove('d-none')
        document.getElementById('talkBtnBox').classList.remove('d-none')

      } else if (
        // -------------------- Galerias --------------------------------------------------------
        id == 'galeriasMasunoSecTrack' || id == 'galeriasNuncaFirstTrack' || id == 'galeriasNuncaSecTrack' || id == 'galeriasOpeningFirstTrack' || id == 'galeriasOpeningSecTrack' || id == 'galeriasProgramaFirstTrack' || id == 'galeriasProgramaSecTrack' || id == 'galeriasArtistasTrack'

        // -------------------- Arquitectura --------------------------------------------------------
        || id == 'architectureFundacionFirstTrack' || id == 'architectureFundacionSecTrack' || id == 'architectureEspaciosFirstTrack' || id == 'architectureEspaciosSecTrack' || id == 'architectureProgramaTrack' || id == 'architectureSalaTrack' || id == 'architectureVipTrack' || id == 'architectureArcoTrack'

        // -------------------- Historia --------------------------------------------------------
        || id == 'historyArcoFirstTrack' || id == 'historyArcoSecTrack' || id == 'historyArcoThirdTrack'

        // -------------------- Novedades --------------------------------------------------------
        || id == 'newsFirstTrack' || id == 'newsSecTrack' || id == 'newsThirdTrack'

      ) {

        timeouts.push(setTimeout(() => {
          mountVideo('anotherThemeTrack')
        }, 1500))
        mainBtnsDisabled(true)

      } else if (

        id == 'galeriasChicoMasunoSecTrack' || id == 'galeriasChicoNuncaFirstTrack' || id == 'galeriasChicoNuncaSecTrack' || id == 'galeriasChicoOpeningFirstTrack' || id == 'galeriasChicoOpeningSecTrack' || id == 'galeriasChicoProgramaFirstTrack' || id == 'galeriasChicoProgramaSecTrack' || id == 'galeriasChicoArtistasTrack'
        // -------------------- Arquitectura --------------------------------------------------------
        || id == 'architectureChicoFundacionFirstTrack' || id == 'architectureChicoFundacionSecTrack' || id == 'architectureChicoEspaciosFirstTrack' || id == 'architectureChicoEspaciosSecTrack' || id == 'architectureChicoProgramaTrack' || id == 'architectureChicoSalaTrack' || id == 'architectureChicoVipTrack' || id == 'architectureChicoArcoTrack'

        // -------------------- Historia --------------------------------------------------------
        || id == 'historyChicoArcoFirstTrack' || id == 'historyChicoArcoSecTrack' || id == 'historyChicoArcoThirdTrack'

        // -------------------- Novedades --------------------------------------------------------
        || id == 'newsChicoFirstTrack' || id == 'newsChicoSecTrack' || id == 'newsChicoThirdTrack'
      ) {

        timeouts.push(setTimeout(() => {
          mountVideo('anotherThemeChicoTrack')
        }, 1500))

        mainBtnsDisabled(true)

      } else if (id == 'byeFirstTrack' || id == 'byeSecTrack' || id == 'byeFirstChicoTrack' || id == 'byeSecChicoTrack') {

        localStorage.setItem('isGirlAvatarFlag', localStorage.getItem('isGirlAvatarFlag') == 'true' ? false : true);
        if (localStorage.getItem('isGirlAvatarFlag') != 'true')
          mountVideo('reposoChicoTrack');
        else
          mountVideo('reposoTrack');

        document.getElementById('microphoneIcon').classList.remove('d-none')
        document.getElementById('timerBoxFreeSay').classList.add('d-none')
        document.getElementById("YesOrNoBox").classList.add('d-none')
        document.getElementById("buttonsPartOne").classList.remove('d-none')
        document.getElementById("buttonsPartBox").classList.remove('d-none')
        document.getElementById('buttonsBox').classList.remove('d-none');
        document.getElementById('talkBtnBox').style.top = '50%'
      }

      if (id != 'reposoTrack' && id != 'reposoChicoTrack') {
        videoEnd()
      }
    }

    // --------------------------------------------------
    if (id == 'listYesChicaTrack' || id == 'listYesChicoTrack') {

      // if (!baseTrack.paused) {
      if (baseTrack.currentTime.toString().split('.')[0] == '4') document.getElementById('btnGallery').classList.add('blueHover')
      if (baseTrack.currentTime.toString().split('.')[0] == '7') {
        document.getElementById('btnGallery').classList.remove('blueHover')
        document.getElementById('btnPlaces').classList.add('blueHover')
      }
      if (baseTrack.currentTime.toString().split('.')[0] == '9') {
        document.getElementById('btnPlaces').classList.remove('blueHover')
        document.getElementById('btnHistory').classList.add('blueHover')
      }
      if (baseTrack.currentTime.toString().split('.')[0] == '11') {
        document.getElementById('btnHistory').classList.remove('blueHover')
        document.getElementById('btnNew').classList.add('blueHover')
        timeouts.push(
          setTimeout(() => {
            document.getElementById('btnNew').classList.remove('blueHover')
          }, 1400)
        )
      }
      // }
    }

    if (id == 'saludoTrack' || id == 'saludoSecTrack' || id == 'saludoChicoTrack' || id == 'saludoChicoSecTrack') {
      // if (!video.paused) {
      if (baseTrack.currentTime.toString().split('.')[0] == '14') document.getElementById('btnGallery').classList.add('blueHover')
      if (baseTrack.currentTime.toString().split('.')[0] == '17') {
        document.getElementById('btnGallery').classList.remove('blueHover')
        document.getElementById('btnPlaces').classList.add('blueHover')
      }
      if (baseTrack.currentTime.toString().split('.')[0] == '19') {
        document.getElementById('btnPlaces').classList.remove('blueHover')
        document.getElementById('btnHistory').classList.add('blueHover')
      }
      if (baseTrack.currentTime.toString().split('.')[0] == '21') {
        document.getElementById('btnHistory').classList.remove('blueHover')
        document.getElementById('btnNew').classList.add('blueHover')
        timeouts.push(
          setTimeout(() => {
            document.getElementById('btnNew').classList.remove('blueHover')
          }, 1400)
        )
      }
      // }
    }
  };
  // END LISTENERS OR ACTIONS BY VIDEO

  // baseTrack.load()
  // baseTrack.play()
  // console.log(document.querySelector('video'))
  await baseTrack.play()
  videoBox.appendChild(baseTrack)
}


// async function printVideo (src) {

//   await video.play()
//   videoBox.appendChild(video)
// }

function mainBtnsDisabled(isDisabled, alsoTalkBtn = false) {
  document.querySelectorAll('button').forEach(button => {
    if (button.id != 'btnReset') {
      if (alsoTalkBtn && button.id != 'btnActiveRecognizer')
        button.disabled = isDisabled
      else
        button.disabled = isDisabled
    }
  })
}

// function getVideos() {
//   return document.querySelectorAll('.videoIA')
// }

// async function mountVideo(videoId) {
//   console.log('videoId', videoId);

//   // Hide talk button
//   if (videoId != 'reposoTrack' && videoId != 'reposoChicoTrack')
//     document.getElementById('talkBtnBox').classList.add('d-none')

//   let videoElements = document.querySelectorAll('.videoIA');
//   videoElements.forEach(video => {
//     if (video.id != videoId)
//       document.getElementById(video.id).style.display = 'none';
//   })

//   if (videoId == 'reposoChicoTrack')
//     localStorage.setItem('isGirlAvatarFlag', false);

//   if (videoId == 'reposoTrack')
//     localStorage.setItem('isGirlAvatarFlag', true);

//   let video = document.getElementById(videoId);
//   video.style.display = 'inherit';
//   await video.play();
// }

// function pauseVideo(video) {
//   // Initializing values
//   let isPlayingVid = true;

//   // On video playing toggle values
//   video.onplaying = function () {
//     isPlayingVid = true;
//   };

//   // On video pause toggle values
//   video.onpause = function () {
//     isPlayingVid = false;
//   };

//   // Pause video function
//   if (!video.paused && !isPlayingVid)
//     video.pause();
// }

function identifySection(arrSecti, commandIndex) {
  let lastIndex = 0,
    defValue = 0;

  arrSecti.forEach((elem, index) => {

    if (commandIndex >= lastIndex && commandIndex < elem) {
      lastIndex = elem;
      defValue = index;
      return;
    }

    lastIndex = elem;
  })

  console.log(defValue, 'defValue')

  return defValue
}

// function greeting() {

//   let random = getRandomArbitrary(1, 2)
//   if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
//     if (random == 1)
//       mountVideo('saludoTrack');
//     else
//       mountVideo('saludoSecTrack');
//   }
//   else {
//     if (random == 1)
//       mountVideo('saludoChicoTrack');
//     else
//       mountVideo('saludoChicoSecTrack');
//   }

//   document.getElementById("buttonsPartOne").classList.remove('d-none')
//   document.getElementById("buttonsPartBox").classList.remove('d-none')
//   document.getElementById("YesOrNoBox").classList.add('d-none')
// }

// function clearTimeOuts(arrTimeouts) {
//   for (var i = 0; i < arrTimeouts.length; i++)
//     clearTimeout(arrTimeouts[i])
// }

// function validateEndVideo(videoId) {

//   return document.getElementById(videoId).currentTime.toString().split('.')[0] == document.getElementById(videoId).duration.toString().split('.')[0]
//     // return document.getElementById(videoId).currentTime.toString().split('.')[0] == document.getElementById(videoId).duration.toString().split('.')[0]
//     ? true
//     : false;
// }

// function timer(elementId, timeLeft = 11) {
//   timeLeft = timeLeft;

//   function countdown() {
//     timeLeft--;
//     document.getElementById(elementId).textContent = timeLeft.toString();
//     if (timeLeft > 0) setTimeout(countdown, 1000);
//     // else if (timeLeft <= 0) alert("finalizó")
//   };

//   setTimeout(countdown, 1000);
// }

function videoIsEnding(video) {
  if (video.currentTime >= video.duration - getPercentOfNumber(video.duration, 2) && video.currentTime < 100)
    return 'preend';
  else return false;
}

function getPercentOfNumber(number, percent) {
  return (percent * number) / 100
}



// function pauseRestartLoadVideo(video) {
//   if (!video.paused) {
//     // if (!Jarvis.isRecognizing())
//     // pauseVideo(video)
//     video.pause()
//     video.currentTime = 0
//     if (video.readyState !== 4)
//       video.load()
//   }
// }