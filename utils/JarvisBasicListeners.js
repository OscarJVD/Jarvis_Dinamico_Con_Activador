// // TRACK LISTENERS
// if (isProduction()) {
//   document.onkeydown = function (event) {
//     if (event.key == 'F12') return false;
//   };
// }

// // PREGUNTA ABIERTA FERIA EN 10 AÑOS 
// document.getElementById('openQuestionTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('openQuestionTrack') == 'preend');
//   if (videoIsEnding('openQuestionTrack') == 'preend') {
//     // pauseRestartLoadVideo(document.getElementById('openQuestionTrack'))
//     // Contenido
//     document.getElementById('buttonsBox').classList.add('d-none');
//     document.getElementById('talkBtnBox').style.top = '73.5%'
//     // document.querySelectorAll('video').forEach(video => video.style.height = '100%');
//     document.getElementById('btnActiveRecognizer').dataset.freesay = 'true';
//     videoEnd('openQuestionTrack')
//     freeSayFlag = true
//   }
// };

// document.getElementById('openQuestionChicoTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('openQuestionChicoTrack') == 'preend');
//   if (videoIsEnding('openQuestionChicoTrack') == 'preend') {
//     // pauseRestartLoadVideo(document.getElementById('openQuestionChicoTrack'))
//     // Contenido
//     document.getElementById('buttonsBox').classList.add('d-none');
//     document.getElementById('talkBtnBox').style.top = '73.5%'

//     // document.querySelectorAll('video').forEach(video => video.style.height = '100%');
//     document.getElementById('btnActiveRecognizer').dataset.freesay = 'true';
//     videoEnd('openQuestionChicoTrack')
//     freeSayFlag = true
//   }
// };
// // END PREGUNTA ABIERTA FERIA EN 10 AÑOS 

// // PUNTUACIÓN
// document.getElementById('scoreTrack').ontimeupdate = function () {
//   if (videoIsEnding('scoreTrack') == 'preend') {
//     document.getElementById('buttonsBox').classList.remove('d-none');
//     document.getElementById('YesOrNoBox').classList.add('d-none');
//     document.getElementById('buttonsPartOne').classList.add('d-none');
//     document.getElementById('buttonsPartBox').classList.add('d-none');
//     document.getElementById('scoreBox').classList.remove('d-none');
//     videoEnd('scoreTrack')
//     document.getElementById('scoreBox').classList.remove('d-none');
//   }
// };

// document.getElementById('scoreChicoTrack').ontimeupdate = function () {
//   if (videoIsEnding('scoreChicoTrack') == 'preend') {
//     document.getElementById('buttonsBox').classList.remove('d-none');
//     document.getElementById('YesOrNoBox').classList.add('d-none');
//     document.getElementById('buttonsPartOne').classList.add('d-none');
//     document.getElementById('buttonsPartBox').classList.add('d-none');
//     document.getElementById('scoreBox').classList.remove('d-none');
//     videoEnd('scoreChicoTrack')
//     document.getElementById('scoreBox').classList.remove('d-none');
//   }
// };
// // END PUNTUACIÓN

// // respuesta si
// document.getElementById('listYesChicaTrack').ontimeupdate = function () {

//   let video = document.getElementById('listYesChicaTrack')
//   console.log(video.currentTime, 'video.currentTime');

//   if (!video.paused) {
//     if (video.currentTime.toString().split('.')[0] == '4') document.getElementById('btnGallery').classList.add('blueHover')
//     if (video.currentTime.toString().split('.')[0] == '7') {
//       document.getElementById('btnGallery').classList.remove('blueHover')
//       document.getElementById('btnPlaces').classList.add('blueHover')

//     }
//     if (video.currentTime.toString().split('.')[0] == '9') {
//       document.getElementById('btnPlaces').classList.remove('blueHover')
//       document.getElementById('btnHistory').classList.add('blueHover')
//     }
//     if (video.currentTime.toString().split('.')[0] == '11') {
//       document.getElementById('btnHistory').classList.remove('blueHover')
//       document.getElementById('btnNew').classList.add('blueHover')

//       timeouts.push(
//         setTimeout(() => {
//           document.getElementById('btnNew').classList.remove('blueHover')
//         }, 1400)
//       )
//     }
//   }

//   if (videoIsEnding('listYesChicaTrack') == 'preend') {
//     // pauseRestartLoadVideo(document.getElementById('listYesChicaTrack'))
//     videoEnd('listYesChicaTrack')
//   }
// };

// document.getElementById('listYesChicoTrack').ontimeupdate = function () {

//   let video = document.getElementById('listYesChicoTrack')

//   console.log(video.currentTime, 'video.currentTime');

//   if (!video.paused) {
//     if (video.currentTime.toString().split('.')[0] == '4') document.getElementById('btnGallery').classList.add('blueHover')
//     if (video.currentTime.toString().split('.')[0] == '7') {
//       document.getElementById('btnGallery').classList.remove('blueHover')
//       document.getElementById('btnPlaces').classList.add('blueHover')

//     }
//     if (video.currentTime.toString().split('.')[0] == '9') {
//       document.getElementById('btnPlaces').classList.remove('blueHover')
//       document.getElementById('btnHistory').classList.add('blueHover')
//     }
//     if (video.currentTime.toString().split('.')[0] == '11') {
//       document.getElementById('btnHistory').classList.remove('blueHover')
//       document.getElementById('btnNew').classList.add('blueHover')

//       timeouts.push(
//         setTimeout(() => {
//           document.getElementById('btnNew').classList.remove('blueHover')
//         }, 1400)
//       )
//     }
//   }

//   if (videoIsEnding('listYesChicoTrack') == 'preend') {
//     // pauseRestartLoadVideo(document.getElementById('listYesChicoTrack'))
//     videoEnd('listYesChicoTrack')
//   }
// };
// // end respuesta si

// // dime mas de la feria
// document.getElementById('anotherThemeTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('anotherThemeTrack'));
//   if (videoIsEnding('anotherThemeTrack') == 'preend') {
//     // Contenido

//     // pauseRestartLoadVideo(document.getElementById('anotherThemeTrack'))
//     document.getElementById("buttonsPartOne").classList.add('d-none')
//     document.getElementById("buttonsPartBox").classList.add('d-none')
//     document.getElementById("YesOrNoBox").classList.remove('d-none')
//     // if (document.getElementById('btnVideoCenter') && !document.getElementById('btnVideoCenter').classList.contains('d-none'))
//     //   document.getElementById('btnVideoCenter').classList.add('d-none')
//     videoEnd('anotherThemeTrack')
//     document.getElementById('talkBtnBox').classList.remove('d-none')
//   }
// };

// document.getElementById('anotherThemeChicoTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('anotherThemeChicoTrack'));
//   if (videoIsEnding('anotherThemeChicoTrack') == 'preend') {
//     // Contenido

//     // pauseRestartLoadVideo(document.getElementById('anotherThemeChicoTrack'))
//     document.getElementById("buttonsPartOne").classList.add('d-none')
//     document.getElementById("buttonsPartBox").classList.add('d-none')
//     document.getElementById("YesOrNoBox").classList.remove('d-none')
//     // if (document.getElementById('btnVideoCenter') && !document.getElementById('btnVideoCenter').classList.contains('d-none'))
//     //   document.getElementById('btnVideoCenter').classList.add('d-none')
//     videoEnd('anotherThemeChicoTrack')
//     document.getElementById('talkBtnBox').classList.remove('d-none')
//   }
// };
// // end dime ams de la feria

// // SALUDOS TRACKS CHICO-CHICA
// document.getElementById('saludoTrack').ontimeupdate = function () {

//   let video = document.getElementById('saludoTrack')

//   console.log(video.currentTime, 'video.currentTime');

//   if (!video.paused) {
//     if (video.currentTime.toString().split('.')[0] == '14') document.getElementById('btnGallery').classList.add('blueHover')
//     if (video.currentTime.toString().split('.')[0] == '17') {
//       document.getElementById('btnGallery').classList.remove('blueHover')
//       document.getElementById('btnPlaces').classList.add('blueHover')

//     }
//     if (video.currentTime.toString().split('.')[0] == '19') {
//       document.getElementById('btnPlaces').classList.remove('blueHover')
//       document.getElementById('btnHistory').classList.add('blueHover')
//     }
//     if (video.currentTime.toString().split('.')[0] == '21') {
//       document.getElementById('btnHistory').classList.remove('blueHover')
//       document.getElementById('btnNew').classList.add('blueHover')

//       timeouts.push(
//         setTimeout(() => {
//           document.getElementById('btnNew').classList.remove('blueHover')
//         }, 1400)
//       )
//     }
//   }

//   if (videoIsEnding('saludoTrack') == 'preend') {
//     // pauseRestartLoadVideo(document.getElementById('saludoTrack'))
//     videoEnd('saludoTrack')
//   }
// };

// document.getElementById('saludoSecTrack').ontimeupdate = function () {

//   let video = document.getElementById('saludoSecTrack')

//   console.log(video.currentTime, 'video.currentTime');

//   if (!video.paused) {
//     if (video.currentTime.toString().split('.')[0] == '14') document.getElementById('btnGallery').classList.add('blueHover')
//     if (video.currentTime.toString().split('.')[0] == '17') {
//       document.getElementById('btnGallery').classList.remove('blueHover')
//       document.getElementById('btnPlaces').classList.add('blueHover')

//     }
//     if (video.currentTime.toString().split('.')[0] == '19') {
//       document.getElementById('btnPlaces').classList.remove('blueHover')
//       document.getElementById('btnHistory').classList.add('blueHover')
//     }
//     if (video.currentTime.toString().split('.')[0] == '21') {
//       document.getElementById('btnHistory').classList.remove('blueHover')
//       document.getElementById('btnNew').classList.add('blueHover')

//       timeouts.push(
//         setTimeout(() => {
//           document.getElementById('btnNew').classList.remove('blueHover')
//         }, 1400)
//       )
//     }
//   }

//   if (videoIsEnding('saludoSecTrack') == 'preend') videoEnd('saludoSecTrack')
// };

// document.getElementById('saludoChicoTrack').ontimeupdate = function () {

//   let video = document.getElementById('saludoChicoTrack')

//   console.log(video.currentTime, 'video.currentTime');

//   if (!video.paused) {
//     if (video.currentTime.toString().split('.')[0] == '14') document.getElementById('btnGallery').classList.add('blueHover')
//     if (video.currentTime.toString().split('.')[0] == '17') {
//       document.getElementById('btnGallery').classList.remove('blueHover')
//       document.getElementById('btnPlaces').classList.add('blueHover')

//     }
//     if (video.currentTime.toString().split('.')[0] == '19') {
//       document.getElementById('btnPlaces').classList.remove('blueHover')
//       document.getElementById('btnHistory').classList.add('blueHover')
//     }
//     if (video.currentTime.toString().split('.')[0] == '21') {
//       document.getElementById('btnHistory').classList.remove('blueHover')
//       document.getElementById('btnNew').classList.add('blueHover')

//       timeouts.push(
//         setTimeout(() => {
//           document.getElementById('btnNew').classList.remove('blueHover')
//         }, 1400)
//       )
//     }
//   }

//   if (videoIsEnding('saludoChicoTrack') == 'preend') {
//     // pauseRestartLoadVideo(document.getElementById('saludoChicoTrack'))
//     videoEnd('saludoChicoTrack')
//   }
// };

// document.getElementById('saludoChicoSecTrack').ontimeupdate = function () {

//   let video = document.getElementById('saludoChicoSecTrack')

//   console.log(video.currentTime, 'video.currentTime');

//   if (!video.paused) {
//     if (video.currentTime.toString().split('.')[0] == '14') document.getElementById('btnGallery').classList.add('blueHover')
//     if (video.currentTime.toString().split('.')[0] == '17') {
//       document.getElementById('btnGallery').classList.remove('blueHover')
//       document.getElementById('btnPlaces').classList.add('blueHover')

//     }
//     if (video.currentTime.toString().split('.')[0] == '19') {
//       document.getElementById('btnPlaces').classList.remove('blueHover')
//       document.getElementById('btnHistory').classList.add('blueHover')
//     }
//     if (video.currentTime.toString().split('.')[0] == '21') {
//       document.getElementById('btnHistory').classList.remove('blueHover')
//       document.getElementById('btnNew').classList.add('blueHover')

//       timeouts.push(
//         setTimeout(() => {
//           document.getElementById('btnNew').classList.remove('blueHover')
//         }, 1400)
//       )
//     }
//   }

//   if (videoIsEnding('saludoChicoSecTrack') == 'preend') {
//     videoEnd('saludoChicoSecTrack')
//   }
// };
// // END SALUDOS TRACKS CHICO-CHICA


// // GALERIAS CHICA TRACKS LISTENERS
// document.getElementById('galeriasMasunoSecTrack').ontimeupdate = function () {
//   if (videoIsEnding('galeriasMasunoSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasMasunoSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasNuncaFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasNuncaFirstTrack'));
//   if (videoIsEnding('galeriasNuncaFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasNuncaFirstTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasNuncaFirstTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('galeriasNuncaSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasNuncaSecTrack'));
//   if (videoIsEnding('galeriasNuncaSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasNuncaSecTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasNuncaSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasOpeningFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasOpeningFirstTrack'));
//   if (videoIsEnding('galeriasOpeningFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasOpeningFirstTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasOpeningFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasOpeningSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasOpeningSecTrack'));
//   if (videoIsEnding('galeriasOpeningSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasOpeningSecTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasOpeningSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasProgramaFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasProgramaFirstTrack'));
//   if (videoIsEnding('galeriasProgramaFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasProgramaFirstTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasProgramaFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasProgramaSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasProgramaSecTrack'));
//   if (videoIsEnding('galeriasProgramaSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasProgramaSecTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasProgramaSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasArtistasTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasArtistasTrack'));
//   if (videoIsEnding('galeriasArtistasTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasArtistasTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('galeriasArtistasTrack')
//     mainBtnsDisabled(true)

//   }
// };
// // END GALERIAS CHICA TRACKS LISTENERS


// // GALERIAS CHICO TRACKS LISTENERS
// document.getElementById('galeriasChicoMasunoSecTrack').ontimeupdate = function () {
//   if (videoIsEnding('galeriasChicoMasunoSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoMasunoSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasChicoNuncaFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoNuncaFirstTrack'));
//   if (videoIsEnding('galeriasChicoNuncaFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoNuncaFirstTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoNuncaFirstTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('galeriasChicoNuncaSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoNuncaSecTrack'));
//   if (videoIsEnding('galeriasChicoNuncaSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoNuncaSecTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoNuncaSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasChicoOpeningFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoOpeningFirstTrack'));
//   if (videoIsEnding('galeriasChicoOpeningFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoOpeningFirstTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoOpeningFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasChicoOpeningSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoOpeningSecTrack'));
//   if (videoIsEnding('galeriasChicoOpeningSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoOpeningSecTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoOpeningSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasChicoProgramaFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoProgramaFirstTrack'));
//   if (videoIsEnding('galeriasChicoProgramaFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoProgramaFirstTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoProgramaFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasChicoProgramaSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoProgramaSecTrack'));
//   if (videoIsEnding('galeriasChicoProgramaSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoProgramaSecTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoProgramaSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('galeriasChicoArtistasTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('galeriasChicoArtistasTrack'));
//   if (videoIsEnding('galeriasChicoArtistasTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('galeriasChicoArtistasTrack'))

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('galeriasChicoArtistasTrack')
//     mainBtnsDisabled(true)

//   }
// };
// // END GALERIAS CHICO TRACKS LISTENERS


// // ARQUITECTURA CHICA TRACKS LISTENERS
// document.getElementById('architectureFundacionFirstTrack').ontimeupdate = function () {
//   if (videoIsEnding('architectureFundacionFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');
//     document.getElementById('btnPlaces').classList.remove('blueHover')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureFundacionFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureFundacionSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureFundacionSecTrack'));
//   if (videoIsEnding('architectureFundacionSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureFundacionSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureFundacionSecTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('architectureEspaciosFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureEspaciosFirstTrack'));
//   if (videoIsEnding('architectureEspaciosFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureEspaciosFirstTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureEspaciosFirstTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('architectureEspaciosSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureEspaciosSecTrack'));
//   if (videoIsEnding('architectureEspaciosSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureEspaciosSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureEspaciosSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureProgramaTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureProgramaTrack'));
//   if (videoIsEnding('architectureProgramaTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureProgramaTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureProgramaTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('architectureSalaTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureSalaTrack'));
//   if (videoIsEnding('architectureSalaTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureSalaTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureSalaTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureVipTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureVipTrack'));
//   if (videoIsEnding('architectureVipTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureVipTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureVipTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureArcoTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureArcoTrack'));
//   if (videoIsEnding('architectureArcoTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureArcoTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('architectureArcoTrack')
//     mainBtnsDisabled(true)

//   }
// };
// // END ARQUITECTURA CHICA TRACKS LISTENERS


// // ARQUITECTURA CHICO TRACKS LISTENERS
// document.getElementById('architectureChicoFundacionFirstTrack').ontimeupdate = function () {
//   if (videoIsEnding('architectureChicoFundacionFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');
//     document.getElementById('btnPlaces').classList.remove('blueHover')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoFundacionFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureChicoFundacionSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoFundacionSecTrack'));
//   if (videoIsEnding('architectureChicoFundacionSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoFundacionSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoFundacionSecTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('architectureChicoEspaciosFirstTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoEspaciosFirstTrack'));
//   if (videoIsEnding('architectureChicoEspaciosFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoEspaciosFirstTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoEspaciosFirstTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('architectureChicoEspaciosSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoEspaciosSecTrack'));
//   if (videoIsEnding('architectureChicoEspaciosSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoEspaciosSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoEspaciosSecTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureChicoProgramaTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoProgramaTrack'));
//   if (videoIsEnding('architectureChicoProgramaTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoProgramaTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoProgramaTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('architectureChicoSalaTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoSalaTrack'));
//   if (videoIsEnding('architectureChicoSalaTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoSalaTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoSalaTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureChicoVipTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoVipTrack'));
//   if (videoIsEnding('architectureChicoVipTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoVipTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoVipTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('architectureChicoArcoTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('architectureChicoArcoTrack'));
//   if (videoIsEnding('architectureChicoArcoTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('architectureChicoArcoTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('architectureChicoArcoTrack')
//     mainBtnsDisabled(true)

//   }
// };
// // END ARQUITECTURA CHICO TRACKS LISTENERS


// // HISTORIA CHICA TRACKS LISTENERS
// document.getElementById('historyArcoFirstTrack').ontimeupdate = function () {
//   if (videoIsEnding('historyArcoFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');
//     document.getElementById('btnPlaces').classList.remove('blueHover')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('historyArcoFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('historyArcoSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('historyArcoSecTrack'));
//   if (videoIsEnding('historyArcoSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('historyArcoSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('historyArcoSecTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('historyArcoThirdTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('historyArcoThirdTrack'));
//   if (videoIsEnding('historyArcoThirdTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('historyArcoThirdTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('historyArcoThirdTrack')
//     mainBtnsDisabled(true)
//   }
// };
// // END HISTORIA CHICA TRACKS LISTENERS

// // HISTORIA CHICO TRACKS LISTENERS
// document.getElementById('historyChicoArcoFirstTrack').ontimeupdate = function () {
//   if (videoIsEnding('historyChicoArcoFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');
//     document.getElementById('btnPlaces').classList.remove('blueHover')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('historyChicoArcoFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('historyChicoArcoSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('historyChicoArcoSecTrack'));
//   if (videoIsEnding('historyChicoArcoSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('historyChicoArcoSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('historyChicoArcoSecTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('historyChicoArcoThirdTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('historyChicoArcoThirdTrack'));
//   if (videoIsEnding('historyChicoArcoThirdTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('historyChicoArcoThirdTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('historyChicoArcoThirdTrack')
//     mainBtnsDisabled(true)
//   }
// };
// // END HISTORIA CHICO TRACKS LISTENERS


// // NOVEDADES CHICA TRACKS LISTENERS
// document.getElementById('newsFirstTrack').ontimeupdate = function () {
//   if (videoIsEnding('newsFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');
//     document.getElementById('btnPlaces').classList.remove('blueHover')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('newsFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('newsSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('newsSecTrack'));
//   if (videoIsEnding('newsSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('newsSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('newsSecTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('newsThirdTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('newsThirdTrack'));
//   if (videoIsEnding('newsThirdTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('newsThirdTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeTrack')
//     }, 1500))

//     videoEnd('newsThirdTrack')
//     mainBtnsDisabled(true)
//   }
// };
// // END NOVEDADES CHICA TRACKS LISTENERS

// // NOVEDADES CHICO TRACKS LISTENERS
// document.getElementById('newsChicoFirstTrack').ontimeupdate = function () {
//   if (videoIsEnding('newsChicoFirstTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');
//     document.getElementById('btnPlaces').classList.remove('blueHover')
//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('newsChicoFirstTrack')
//     mainBtnsDisabled(true)

//   }
// };

// document.getElementById('newsChicoSecTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('newsChicoSecTrack'));
//   if (videoIsEnding('newsChicoSecTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('newsChicoSecTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('newsChicoSecTrack')
//     mainBtnsDisabled(true)
//   }
// };

// document.getElementById('newsChicoThirdTrack').ontimeupdate = function () {
//   // console.log(videoIsEnding('newsChicoThirdTrack'));
//   if (videoIsEnding('newsChicoThirdTrack') == 'preend') {
//     // Contenido
//     console.log('DINOSAURIO');

//     // pauseRestartLoadVideo(document.getElementById('newsChicoThirdTrack'))

//     document.getElementById('btnPlaces').classList.remove('blueHover')

//     timeouts.push(setTimeout(() => {
//       mountVideo('anotherThemeChicoTrack')
//     }, 1500))

//     videoEnd('newsChicoThirdTrack')
//     mainBtnsDisabled(true)
//   }
// };
// // END NOVEDADES CHICO TRACKS LISTENERS


// // DESPEDIDAS TRACKS
// document.getElementById('byeFirstTrack').ontimeupdate = function () {
//   // let flagByeFirstTrack = true;
//   console.log(videoIsEnding('byeFirstTrack'));

//   if (videoIsEnding('byeFirstTrack') == 'preend') {
//     // if (flagByeFirstTrack) {
//     //   setTimeout(() => {
//     //   }, 550);
//     //   flagByeFirstTrack = false
//     // }

//     localStorage.setItem('isGirlAvatarFlag', localStorage.getItem('isGirlAvatarFlag') == 'true' ? false : true);
//     if (localStorage.getItem('isGirlAvatarFlag') != 'true')
//       mountVideo('reposoChicoTrack');
//     else
//       mountVideo('reposoTrack');

//     document.getElementById('microphoneIcon').classList.remove('d-none')
//     document.getElementById('timerBoxFreeSay').classList.add('d-none')
//     videoEnd('byeFirstTrack')
//     document.getElementById("YesOrNoBox").classList.add('d-none')
//     document.getElementById("buttonsPartOne").classList.remove('d-none')
//     document.getElementById("buttonsPartBox").classList.remove('d-none')
//     document.getElementById('buttonsBox').classList.remove('d-none');
//     document.querySelectorAll('video').forEach(video => video.style.height = '71%');
//     document.getElementById('talkBtnBox').style.top = '50%'

//   }
// };

// document.getElementById('byeSecTrack').ontimeupdate = function () {
//   // let flagByeSecTrack = true;
//   console.log(videoIsEnding('byeSecTrack'));

//   if (videoIsEnding('byeSecTrack') == 'preend') {

//     // if (flagByeSecTrack) {
//     //   setTimeout(() => {
//     //   }, 550);
//     //   flagByeSecTrack = false
//     // }
//     localStorage.setItem('isGirlAvatarFlag', localStorage.getItem('isGirlAvatarFlag') == 'true' ? false : true);

//     if (localStorage.getItem('isGirlAvatarFlag') != 'true')
//       mountVideo('reposoChicoTrack');
//     else
//       mountVideo('reposoTrack');

//     document.getElementById('microphoneIcon').classList.remove('d-none')
//     document.getElementById('timerBoxFreeSay').classList.add('d-none')
//     videoEnd('byeSecTrack')
//     document.getElementById("YesOrNoBox").classList.add('d-none')
//     document.getElementById("buttonsPartOne").classList.remove('d-none')
//     document.getElementById("buttonsPartBox").classList.remove('d-none')
//     document.getElementById('buttonsBox').classList.remove('d-none');
//     document.querySelectorAll('video').forEach(video => video.style.height = '71%');
//     document.getElementById('talkBtnBox').style.top = '50%'
//   }
// };

// // let flagFirstChicoTrack = true;
// document.getElementById('byeFirstChicoTrack').ontimeupdate = function () {
//   console.log(videoIsEnding('byeFirstChicoTrack'));
//   if (videoIsEnding('byeFirstChicoTrack') == 'preend') {

//     // if (flagFirstChicoTrack) {
//     // setTimeout(() => {
//     // }, 550);
//     // flagFirstChicoTrack = false
//     // }
//     localStorage.setItem('isGirlAvatarFlag', localStorage.getItem('isGirlAvatarFlag') == 'true' ? false : true);

//     if (localStorage.getItem('isGirlAvatarFlag') != 'true')
//       mountVideo('reposoChicoTrack');
//     else
//       mountVideo('reposoTrack');

//     document.getElementById('microphoneIcon').classList.remove('d-none')
//     document.getElementById('timerBoxFreeSay').classList.add('d-none')
//     videoEnd('byeFirstChicoTrack')
//     document.getElementById("YesOrNoBox").classList.add('d-none')
//     document.getElementById("buttonsPartOne").classList.remove('d-none')
//     document.getElementById("buttonsPartBox").classList.remove('d-none')
//     document.getElementById('buttonsBox').classList.remove('d-none');
//     document.querySelectorAll('video').forEach(video => video.style.height = '71%');
//     document.getElementById('talkBtnBox').style.top = '50%'
//   }
// };

// // let flagSecChicoTrack = true;
// document.getElementById('byeSecChicoTrack').ontimeupdate = function () {
//   console.log(videoIsEnding('byeSecChicoTrack'));
//   if (videoIsEnding('byeSecChicoTrack') == 'preend') {

//     // if (flagSecChicoTrack) {
//     // setTimeout(() => {
//     //   }, 550);
//     //   flagSecChicoTrack = false
//     // }
//     localStorage.setItem('isGirlAvatarFlag', localStorage.getItem('isGirlAvatarFlag') == 'true' ? false : true);

//     if (localStorage.getItem('isGirlAvatarFlag') != 'true')
//       mountVideo('reposoChicoTrack');
//     else
//       mountVideo('reposoTrack');

//     document.getElementById('microphoneIcon').classList.remove('d-none')
//     document.getElementById('timerBoxFreeSay').classList.add('d-none')
//     videoEnd('byeSecChicoTrack')
//     document.getElementById("YesOrNoBox").classList.add('d-none')
//     document.getElementById("buttonsPartOne").classList.remove('d-none')
//     document.getElementById("buttonsPartBox").classList.remove('d-none')
//     document.getElementById('buttonsBox').classList.remove('d-none');
//     document.querySelectorAll('video').forEach(video => video.style.height = '71%');
//     document.getElementById('talkBtnBox').style.top = '50%'
//   }
// };
// // END DESPEDIDAS TRACKS

// // document.getElementById('reposoTrack').ontimeupdate = function () {
// //   flagByeFirstTrack = false;
// //   flagByeSecTrack = false;
// //   flagFirstChicoTrack = false;
// // }

// // document.getElementById('reposoChicoTrack').ontimeupdate = function () {
// //   flagByeFirstTrack = false;
// //   flagByeSecTrack = false;
// //   flagFirstChicoTrack = false;
// // }

// document.querySelectorAll('video').forEach(video => {
//   if (video.id != 'reposoTrack' || video.id != 'reposoChicoTrack') {
//     video.addEventListener('play', function () {
//       Jarvis.dontObey();
//     });

//     video.addEventListener('ended', function () {
//       setTimeout(() => {
//         Jarvis.obey();
//       }, 500);
//     });

//     video.addEventListener('pause', function () {
//       setTimeout(() => {
//         Jarvis.obey();
//       }, 500);
//     });

//     video.addEventListener('load', function () {
//       setTimeout(() => {
//         Jarvis.obey();
//       }, 500);
//     });
//   }

// });
// // END TRACK LISTENERS


document.querySelectorAll('button').forEach(button => {
  let btnRestart = document.getElementById('btnReset')
  if (button.id != 'btnReset'
    //  && button.id != 'btnActiveRecognizer'
  ) {
    button.addEventListener('click', () => {
      btnRestart.removeAttribute('disabled')
    })
  }
})

document.getElementById('btnReset').addEventListener('click', async () => {
  return location.reload();
})

document.getElementById('btnNo').addEventListener('click', function () {

  if (localStorage.getItem('isGirlAvatarFlag') == 'true')
    mountVideo('scoreTrack');
  else
    mountVideo('scoreChicoTrack');

})

document.getElementById('btnYes').addEventListener('click', function () {

  if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
    mountVideo('listYesChicaTrack');
  } else {
    mountVideo('listYesChicoTrack');
  }

  document.getElementById("buttonsPartOne").classList.remove('d-none')
  document.getElementById("buttonsPartBox").classList.remove('d-none')
  document.getElementById("YesOrNoBox").classList.add('d-none')
})

document.getElementById('btnActiveRecognizer').addEventListener('click', function () {

  document.getElementById('btnTalkLoader').classList.remove('d-none')
  document.getElementById('microphoneIcon').classList.add('d-none')

  console.log('Reconociendo...', Jarvis.isRecognizing(), Jarvis.isObeying());
  if (Jarvis.isRecognizing())
    Jarvis.ArtyomWebkitSpeechRecognition.stop()
  else
    Jarvis.obey();

  let btnTalk = document.getElementById('btnActiveRecognizer')

  if (btnTalk.getAttribute('data-freesay') == 'true') {
    let finalRecognizedTxt = null
    Jarvis.ArtyomWebkitSpeechRecognition.stop()
    let dictationSettings = {
      continuous: true, // Don't stop never because i have https connection
      interimResults: false,
      lang: 'es-ES',
      onResult: function (text) {
        // Show the Recognized text in the console
        console.log("Recognized text: ", text);
        let recognizedBox = document.getElementById('recognizedTxtCaption');
        let recognizedTxt = document.getElementById('spanRecognizedTxtCaption');
        recognizedTxt.textContent = capitalizarPrimeraLetra(text);
        recognizedBox.classList.remove('d-none');
        finalRecognizedTxt = text
      },
      onStart: function () {
        console.log("Dictation started by the user");
      },
      onEnd: function () {
        // console.log("Dictation stopped by the user");
        recognizedTxtCaption.classList.add('d-none');
      }
    };

    let UserDictation = Jarvis.newDictation(dictationSettings);
    UserDictation.start();
    document.getElementById('btnTalkLoader').classList.add('d-none')
    document.getElementById('talkBtnBox').classList.add('d-none')
    document.getElementById('microphoneIcon').classList.add('d-none')
    document.getElementById('YesOrNoBox').classList.add('d-none')
    document.getElementById('timerBoxFreeSay').classList.remove('d-none')
    document.getElementById('buttonsBox').classList.remove('d-none')
    timeLeft = 11; // 11

    async function countdown() {
      timeLeft--;
      document.getElementById('timerFreeSay').textContent = timeLeft.toString();
      if (timeLeft > 0) timeouts.push(setTimeout(countdown, 1000))
      else if (timeLeft <= 0) {
        document.getElementById('buttonsBox').classList.add('d-none')
        document.getElementById('YesOrNoBox').classList.remove('d-none')
        btnTalk.removeAttribute('data-freesay')
        delete btnTalk.dataset.freesay;
        freeSayFlag = false

        let random = getRandomArbitrary(1, 2)
        if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
          if (random == 1) mountVideo('byeFirstTrack')
          else mountVideo('byeSecTrack')
        }
        else {
          if (random == 1) mountVideo('byeFirstChicoTrack')
          else mountVideo('byeSecChicoTrack')
        }

        UserDictation.stop();

        setTimeout(() => {
          Jarvis.ArtyomWebkitSpeechRecognition.stop()
        }, 800);

        ask = '¿Cómo te imaginas la feria en 10 años?'
        await postData('storeAnswers', { ask, answer: finalRecognizedTxt })
      }
    };

    timeouts.push(setTimeout(countdown, 1000))
  }
  else {
    if (Jarvis.isRecognizing())
      Jarvis.ArtyomWebkitSpeechRecognition.stop()
    else {
      Jarvis.obey();
      startArtyom("es-ES", 'quick', false);
      Jarvis.obey();
    }
  }
});

document.getElementById('btnGallery').addEventListener('click', function () {

  let random = getRandomArbitrary(1, 8)
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

    if (random == 1) mountVideo('galeriasChicoMasunoSecTrack')
    else if (random == 2) mountVideo('galeriasChicoNuncaFirstTrack')
    else if (random == 3) mountVideo('galeriasChicoNuncaSecTrack')
    else if (random == 4) mountVideo('galeriasChicoOpeningFirstTrack')
    else if (random == 5) mountVideo('galeriasChicoOpeningSecTrack')
    else if (random == 6) mountVideo('galeriasChicoProgramaFirstTrack')
    else if (random == 7) mountVideo('galeriasChicoProgramaSecTrack')
    else mountVideo('galeriasChicoArtistasTrack')

  }

  document.getElementById('btnGallery').classList.add('blueHover');
})

document.getElementById('btnPlaces').addEventListener('click', function () {

  let random = getRandomArbitrary(1, 8)
  if (localStorage.getItem('isGirlAvatarFlag') == 'true') {

    if (random == 1) mountVideo('architectureFundacionFirstTrack')
    else if (random == 2) mountVideo('architectureFundacionSecTrack')
    else if (random == 3) mountVideo('architectureEspaciosFirstTrack')
    else if (random == 4) mountVideo('architectureEspaciosSecTrack')
    else if (random == 5) mountVideo('architectureProgramaTrack')
    else if (random == 6) mountVideo('architectureSalaTrack')
    else if (random == 7) mountVideo('architectureVipTrack')
    else mountVideo('architectureArcoTrack')
  } else {

    if (random == 1) mountVideo('architectureChicoFundacionFirstTrack')
    else if (random == 2) mountVideo('architectureChicoFundacionSecTrack')
    else if (random == 3) mountVideo('architectureChicoEspaciosFirstTrack')
    else if (random == 4) mountVideo('architectureChicoEspaciosSecTrack')
    else if (random == 5) mountVideo('architectureChicoProgramaTrack')
    else if (random == 6) mountVideo('architectureChicoSalaTrack')
    else if (random == 7) mountVideo('architectureChicoVipTrack')
    else mountVideo('architectureChicoArcoTrack')

  }

  ;
})

document.getElementById('btnHistory').addEventListener('click', function () {

  let random = getRandomArbitrary(1, 3)
  if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
    if (random == 1) mountVideo('historyArcoFirstTrack')
    else if (random == 2) mountVideo('historyArcoSecTrack')
    else mountVideo('historyArcoThirdTrack')
  } else {
    if (random == 1) mountVideo('historyChicoArcoFirstTrack')
    else if (random == 2) mountVideo('historyChicoArcoSecTrack')
    else mountVideo('historyChicoArcoThirdTrack')
  }

  document.getElementById('btnHistory').classList.add('blueHover');
})

document.getElementById('btnNew').addEventListener('click', function () {

  let random = getRandomArbitrary(1, 3)
  if (localStorage.getItem('isGirlAvatarFlag') == 'true') {
    if (random == 1) mountVideo('newsFirstTrack')
    else if (random == 2) mountVideo('newsSecTrack')
    else mountVideo('newsThirdTrack')
  } else {
    if (random == 1) mountVideo('newsChicoFirstTrack')
    else if (random == 2) mountVideo('newsChicoSecTrack')
    else mountVideo('newsChicoThirdTrack')
  }

  document.getElementById('btnNew').classList.add('blueHover');
})