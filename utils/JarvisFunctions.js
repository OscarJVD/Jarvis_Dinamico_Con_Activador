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

function getPercentage(videoId) {
  let myPlayer = document.getElementById(videoId);

  if (myPlayer.currentTime >= myPlayer.duration - getPercentOfNumber(myPlayer.duration, 2) && myPlayer.currentTime < 100)
    return 'preend';
  else return false;
}


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

function videoEnd(video) {

  console.log('VIDEO TERMINO', video, document.getElementById(video))
  document.getElementById(video).pause()
  document.getElementById(video).muted = true
  // document.getElementById(video).muted = true
  // document.getElementById(video).autoplay = false
  document.getElementById(video).loop = false
  document.getElementById(video).currentTime = 0
  // document.getElementById(video).load()

  // clearTimeOuts(timeouts)
  // document.getElementById(video).load()

  mainBtnsDisabled(false)
  document.getElementById('talkBtnBox').classList.remove('d-none')

  if (localStorage.getItem('isGirlAvatarFlag') == 'true')
    playVideo('reposoTrack')
  else
    playVideo('reposoChicoTrack')

  document.getElementById('btnGallery').classList.remove('blueHover')
  document.getElementById('btnPlaces').classList.remove('blueHover')
  document.getElementById('btnHistory').classList.remove('blueHover')
  document.getElementById('btnNew').classList.remove('blueHover')
}

async function playVideo(videoId) {
  console.warn('videoId', videoId);

  // Hide talk button
  if (videoId != 'reposoTrack' && videoId != 'reposoChicoTrack')
    document.getElementById('talkBtnBox').classList.add('d-none')

  let videoElements = document.querySelectorAll('.videoIA');
  videoElements.forEach(video => {
    // document.getElementById(video.id).pause()
    document.getElementById(video.id).currentTime = 0;
    document.getElementById(video.id).muted = true
    document.getElementById(video.id).loop = false

    if (video.id != videoId) {
      document.getElementById(video.id).style.display = 'none';
      document.getElementById(video.id).muted = true
      // document.getElementById(video.id).autoplay = false
      document.getElementById(video.id).loop = false
    }
  })

  if (videoId == 'reposoChicoTrack')
    localStorage.setItem('isGirlAvatarFlag', false);

  if (videoId == 'reposoTrack')
    localStorage.setItem('isGirlAvatarFlag', true);

  let video = document.getElementById(videoId);
  video.style.display = 'inherit';

  // video.pause()
  video.muted = false
  // // video.muted = false
  video.currentTime = 0

  if (video.id == 'reposoTrack' || video.id == 'reposoChicoTrack') {
    video.loop = true
  }
  // // video.load()
  // // video.play();
  // video.autoplay = true
  // video.loop = true
  console.warn('ESTA LISTO PARA REPRODUCIR?', video.readyState)
  // if (video.readyState == 3 || video.readyState == 4)
  //   await video.play();
  // else {
  // video.load()
  // await video.play();
  let id = setInterval(async function () {
    let flag = false;
    // if (video.readyState == 3 || video.readyState == 4) {
    console.log('video', video)
    canPlayVideo[video.id] = true;
    if (canPlayVideo && Object.keys(canPlayVideo).length > 0) {
      if (canPlayVideo.hasOwnProperty(video.id) && canPlayVideo[video.id] == true) {
        await video.play();
        flag = true
      }
    }

    // }
    if (flag) clearInterval(id);
  }, 100);
  // }
}

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

function greeting() {

  let random = getRandomArbitrary(1, 2)
  if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
    if (random == 1)
      playVideo('saludoTrack');
    else
      playVideo('saludoSecTrack');
  }
  else {
    if (random == 1)
      playVideo('saludoChicoTrack');
    else
      playVideo('saludoChicoSecTrack');
  }

  document.getElementById("buttonsPartOne").classList.remove('d-none')
  document.getElementById("buttonsPartBox").classList.remove('d-none')
  document.getElementById("YesOrNoBox").classList.add('d-none')
}

function clearTimeOuts(arrTimeouts) {
  for (var i = 0; i < arrTimeouts.length; i++)
    clearTimeout(arrTimeouts[i])
}

function validateEndVideo(videoId) {

  return document.getElementById(videoId).currentTime.toString().split('.')[0] == document.getElementById(videoId).duration.toString().split('.')[0]
    // return document.getElementById(videoId).currentTime.toString().split('.')[0] == document.getElementById(videoId).duration.toString().split('.')[0]
    ? true
    : false;
}

function timer(elementId, timeLeft = 11) {
  timeLeft = timeLeft;

  function countdown() {
    timeLeft--;
    document.getElementById(elementId).textContent = timeLeft.toString();
    if (timeLeft > 0) setTimeout(countdown, 1000);
    // else if (timeLeft <= 0) alert("finalizó")
  };

  setTimeout(countdown, 1000);
}

function videoIsEnding(video) {
  if (video.currentTime >= video.duration - getPercentOfNumber(video.duration, 2) && video.currentTime < 100)
    return 'preend';
  else return false;
}

function getPercentOfNumber(number, percent) {
  return (percent * number) / 100
}

function pauseRestartLoadVideo(video) {
  if (!video.paused) {
    // if (!Jarvis.isRecognizing())
    // pauseVideo(video)
    video.pause()
    video.currentTime = 0
    if (video.readyState !== 4)
      video.load()
  }
}