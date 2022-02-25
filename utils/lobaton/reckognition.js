async function Reckognition() {
    const listener = new Artyom()
    // listener.ArtyomWebkitSpeechRecognition.stop()
    listener.when("ERROR", function (data) {
        console.error(data);
    });

    listener.when("SPEECH_SYNTHESIS_START", function () {
        if (listener.isRecognizing() || listener.isSpeaking()) {
            listener.dontObey();
        }
    });

    listener.when("SPEECH_SYNTHESIS_END", function () {
        if (!listener.isRecognizing() || !listener.isSpeaking()){
            listener.obey();
        }
    });
    // artyom.fatality();
    await listener.initialize({
        lang: "es-ES", // Más lenguajes son soportados, lee la documentación
        continuous: true, // Reconoce 1 solo comando y basta de escuchar
        listen: true, // Iniciar !
        debug: true, // Muestra un informe en la consola
        speed: 1, // talk normally
        volume: 1,
        soundex: false, // Use the soundex algorithm to understand different words
    })
    console.log("Ready to work !");
    return listener

}