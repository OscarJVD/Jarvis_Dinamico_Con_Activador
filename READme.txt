ejecutar npm run dev
abrir ruta en https://my.local.host:50000/

<!-- | -- Recomendaciones -- | -->
<!-- HACER CLIC AL CARGAR LA PÁGINA POR PRIMERA VEZ -->
-- Se necesita establecer un certificado ssl para localhost y un alias para localhost
**SSL y Alias para localhost **

**Alias**
abrir bloc de notas cómo administrador -> dar clic en archivo -> abrir -> Ir a la ruta C:\Windows\System32\drivers\etc\ -> abrir el archivo hosts y colocar lo siguiente 127.0.0.1 my.local.host -> Guardar y cerrar

------------------
**SSL** | Alternativamente puedes seguir este video https://www.youtube.com/watch?v=PttqtI8ml3E
**Abrir PowerShell cómo admin, colocar lo siguiente y dar enter: **New-SelfSignedCertificate -Subject "localhost" -TextExtension @("2.5.29.17={text}DNS=localhost&IPAddress=127.0.0.1&IPAddress=::1")

- Habilitar internet information services con ftp en panel de control -> Programas y caracteristicas -> Activar o desactivar caracteristicas de windows y abrirlo
- Default Web SIte -> bindings -> add -> https -> SSL cert: localhost
- Abrir mmc -> WIN + R -> mmc.exe
- File -> agregar o quitar complemento
- Certificate -> all computer -> ok
- Copiar archivo con CTRL + C y CTRL +V localhost de Personal/localhost a certificate to trusted root certificates y cerrar sin guardar
- iisreset /restart **en Powershell.**

DialogFlow TEST
{
    "languageCode": "es-CO",
    "queryText": "hola",
    "sessionId": "12312sgsdfg"
}







<!-- CHICA 👩‍🦰-->

  <!-- REPOSO -->
  
  <!-- preload="auto" -->
  <video class="videoIA" src="/media/Videos/VIDEOSCHICAARCO2022/11.IDLE/IDLE.mp4" muted autoplay loop preload="auto"
  width="100%" id="reposoTrack" data-id="baseTrack" >
    <!-- <source src="https://feria.s3.us-east-2.amazonaws.com/video/chica/reposo_chica/reposo_chica.mp4" type="video/mp4"> -->
    Tu navegador no soporta HTML5 video.
  </video>
  <!-- END REPOSO -->

  <!-- SALUDO -->
  <!-- <video class="videoIA" style="display:none;" src="https://feria.s3.us-east-2.amazonaws.com/video/chica/1.saludos/saludo_chica_1.mp4" preload="auto" width="100%" id="saludoTrack">
    Tu navegador no soporta HTML5 video.
  </video> -->


  <!-- CHICO 👨‍🦰-->

  <!-- REPOSO -->
  <!-- <video class="videoIA" style="display:none;" src="https://feria.s3.us-east-2.amazonaws.com/video/chico/reposo_chico/reposo_chico.mp4" autoplay muted loop preload="auto" width="100%" id="reposoChicoTrack">
    Tu navegador no soporta HTML5 video.
  </video> -->
  <!-- END REPOSO -->


  <!-- END CHICO 👨‍🦰-->

  <canvas id="waves" class="audioViewer" style="overflow: hidden;"></canvas>

  <div class="container-fluid videoMsg d-none p-3 justify-content-center d-flex align-items-center text-center bg-opaco" id="recognizedTxtCaption">
    <span class="spanVideoMsg text-center" id="spanRecognizedTxtCaption">
      Contesta y al final menciona la palabra 'ahora'
    </span>
  </div>

  <div class="container-fluid btnVideoCenter justify-content-center text-center align-items-center d-flex" id="talkBtnBox">

    <img src="/media/gifts/negro_coloreado.gif" id="circleSpectrum" alt="" width="385px">

    <button id="btnActiveRecognizer" class="btn  shadow border border-white" style="cursor: pointer;">
      <div class="loader-03 d-none" id="btnTalkLoader"></div>
      <i class="fas fa-microphone text-white fa-4x p-1 border-fw-black" id="microphoneIcon"></i>
    </button>
  </div>

  <button class="btnResetIA btn btn-dark btn-lg" id="btnReset" disabled>
    <i class="fas fa-solid fa-arrow-rotate-right"></i>
  </button>

  <div class="buttonsBox" id="buttonsBox">
    <div class="container-fluid h-100 align-items-center" style="display: grid;">
      <div class="row justify-content-center text-center">

        <div id="timerBoxFreeSay" class="row justify-content-center text-center d-none align-items-center h-100 d-flex">
          <span class="text-white fw-bolder" style="font-size: 10.5rem;" id="timerFreeSay"></span>
        </div>

        <div id="scoreBox" class="d-none row justify-content-center">

          <div class="col-md-12 d-flex text-center justify-content-center align-items-center h-100">
            <button onclick="postData('storeAnswers', { ask: 'Puntuación', answer: '1' }); document.getElementById('scoreBox').classList.add('d-none'); document.getElementById('buttonsBox').classList.add('d-none'); if(localStorage.getItem('isGirlAvatarFlag') == 'true') mountVideo('openQuestionTrack'); else mountVideo('openQuestionChicoTrack'); document.getElementById('btnActiveRecognizer').disabled = true;" id="btnOne" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 mx-3" width="20%" type="button">1
            </button>

            <button onclick="postData('storeAnswers', { ask: 'Puntuación', answer: '2' }); document.getElementById('scoreBox').classList.add('d-none'); document.getElementById('buttonsBox').classList.add('d-none'); if(localStorage.getItem('isGirlAvatarFlag') == 'true') mountVideo('openQuestionTrack'); else mountVideo('openQuestionChicoTrack'); document.getElementById('btnActiveRecognizer').disabled = true;" id="btnTwo" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 mx-3" width="20%" type="button">2
            </button>

            <button onclick="postData('storeAnswers', { ask: 'Puntuación', answer: '3' }); document.getElementById('scoreBox').classList.add('d-none'); document.getElementById('buttonsBox').classList.add('d-none'); if(localStorage.getItem('isGirlAvatarFlag') == 'true') mountVideo('openQuestionTrack'); else mountVideo('openQuestionChicoTrack'); document.getElementById('btnActiveRecognizer').disabled = true;" id="btnThree" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 mx-3" width="20%" type="button">3
            </button>

            <button onclick="postData('storeAnswers', { ask: 'Puntuación', answer: '4' }); document.getElementById('scoreBox').classList.add('d-none'); document.getElementById('buttonsBox').classList.add('d-none'); if(localStorage.getItem('isGirlAvatarFlag') == 'true') mountVideo('openQuestionTrack'); else mountVideo('openQuestionChicoTrack'); document.getElementById('btnActiveRecognizer').disabled = true;" id="btnFour" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 mx-3" width="20%" type="button">4
            </button>

            <button onclick="postData('storeAnswers', { ask: 'Puntuación', answer: '5' }); document.getElementById('scoreBox').classList.add('d-none'); document.getElementById('buttonsBox').classList.add('d-none'); if(localStorage.getItem('isGirlAvatarFlag') == 'true') mountVideo('openQuestionTrack'); else mountVideo('openQuestionChicoTrack');" id="btnFive" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 mx-3" width="20%" type="button">5
            </button>

          </div>
        </div>

        <div id="YesOrNoBox" class="d-none row justify-content-center">

          <div class="col-md-12 d-flex text-center justify-content-center align-items-center h-100">
            <button id="btnYes" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 w-50 mx-3" type="button">Sí, me gustaría
            </button>

            <button id="btnNo" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 w-50 mx-3" type="button">En otro momento
            </button>
          </div>
        </div>

        <div class="row mb-4" id="buttonsPartOne">
          <div class="col-md-12 d-flex text-center justify-content-evenly align-items-center h-100">

            <button id="btnGallery" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 w-50 mx-3" type="button">Galerías y secciones <img src="https://res.cloudinary.com/solumobil/image/upload/v1644729642/icons/kisspng-computer-icons-photo-gallery-5b21af37aa13d6.9788079415289341996967_oofqzm.png" width="50" class="p-0 m-0" />
            </button>

            <button id="btnPlaces" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 w-50 mx-3" type="button">Espacios y arquitectura <img src="https://res.cloudinary.com/solumobil/image/upload/v1644729643/icons/transparent-handout-icon-print-icon-road-map-icon-5fd3c435816667.12508880160771384553_dcfg3t.png" width="50" class="p-0 m-0" />
            </button>
          </div>
        </div>

        <div class="row" id="buttonsPartBox">
          <div class="col-md-12 d-flex text-center justify-content-evenly align-items-center h-100">

            <button id="btnHistory" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 w-50 mx-3" type="button">Historia de Arco <img src="https://res.cloudinary.com/solumobil/image/upload/v1644729640/icons/kisspng-computer-icons-art-story-5ac43b2e903792.5535584715228096465907_qqktbi.png" width="50" class="p-0 m-0" />
            </button>

            <button id="btnNew" class="btns-ia btn btn-lg text-light bg-dark-blue btn-rounded btn-light-blue zIndexNueveMilCien h-100 w-50 mx-3" type="button">Novedades 2022 <img src="https://res.cloudinary.com/solumobil/image/upload/v1644729640/icons/kisspng-watercolor-painting-drawing-camera-photography-hand-painted-cameras-creative-5a9f7a8e929199.4775883515204010386004_1_qp7ohv.png" width="50" class="p-0 m-0" />
            </button>

          </div>
        </div>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/artyom.window.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="/audioViewer.js"></script>
    <script src="/JarvisVariables.js"></script>
    <script src="/GlobalFunctions.js"></script>
    <script src="/JarvisFunctions.js"></script>
    <script src="/JarvisConf.js"></script>
    <script src="/JarvisNativeListeners.js"></script>
    <script src="/JarvisBasicListeners.js"></script>
    <script src="/JarvisValidations.js"></script>
    <script>
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })

      document.addEventListener('click', () => {
        toggleFullScreen(document.body)
      })
      // // Toast
      // let toast = new Toast({
      //   animation: true,
      //   autohide: true,
      //   delay: 5000,
      // })


      // var toastElList = [].slice.call(document.querySelectorAll('.toast'))
      // var toastList = toastElList.map(function (toastEl) {
      //   // Creates an array of toasts (it only initializes them)
      //   return new bootstrap.Toast(toastEl, {
      //                 animation: true,
      //                 autohide: true,
      //                 delay: 5000,
      //             })
      // });
      // var successToast = toastList[0];
    </script>
