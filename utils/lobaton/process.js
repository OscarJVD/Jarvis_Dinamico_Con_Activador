const getParsedElementsX = (elements)=>{
    const elementsIn = Object.entries(elements).map(([key,value])=>{
        return [key, document.getElementById(value)]
    })
    return Object.fromEntries(elementsIn)
}


const printVideo = async(listener,url, elem) => {
    for(let el of elem.children){
        el.remove()
    }
    const video = document.createElement("video")
    video.setAttribute("src",url)
    video.setAttribute("class", "videoIA")
    video.addEventListener("play",()=> listener.dontObey())
    video.addEventListener("pause",()=> listener.obey())
    video.addEventListener("ended",()=> listener.obey())
    await video.play()
    elem.appendChild(video)
    return video
}


function  process(listener,elem) {

    const buttonsMock = [
        {
            button:{
                id: 'btnGallery',
            },
            videos:[
                "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA2.mp4"
            ]
        },
        {
            button:{
                id: 'btnPlaces',
            },
            videos:[
                "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING1.mp4"
            ]
        },

        {
            button:{
                id: 'btnNew',
            },
            videos:[
                "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO2.mp4"
            ]
        },

        {
            button:{
                id: 'btnHistory',
            },
            videos:[
                "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING2.mp4"
            ]
        }
    ];
    const addEventToButtons = (listener, buttons, elem)=>{
        for(let button of buttons){
            const elemButton = getParsedElementsX(button.button)["id"]
            elemButton.addEventListener("click",()=> {
                const video = printVideo(listener,button.videos[0],elem)
                for(let btn of buttons){
                    const elemButton = getParsedElementsX(btn.button)["id"]
                    console.log(elemButton)
                    elemButton.setAttribute("disabled",true)
                    setTimeout(() => {
                        elemButton.removeAttribute("disabled")
                    }, video.duration * 1000);
                }
            })
        }
    };

    const mock =  [
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/11.IDLE/IDLE.mp4", indexes: ['reposo'],
            action: function(){
            printVideo(listener,this.src,this.elem)
            } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/1.SALUDOSYLISTADO/SALUDOCHICA1.mp4", indexes: ['Hola', 'hola', 'Holi', 'Buenos dias', 'Buenas tardes', 'Buenas noches', 'Buenas', 'Hello', 'Hi', 'Good Morning', 'Good afternoon', 'Good night'],
            action: function(){
            printVideo(listener,this.src,this.elem)
            } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/1.SALUDOSYLISTADO/SALUDOCHICA2.mp4", indexes: ['Hola', 'hola', 'Holi', 'Buenos dias', 'Buenas tardes', 'Buenas noches', 'Buenas', 'Hello', 'Hi', 'Good Morning', 'Good afternoon', 'Good night'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/PROYECTOSARTISTAS/PROYECTOSARTISTAS.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERAL1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERAL2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION1.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION2.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS1.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS2Y3.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/PROGRAMAGENERAL/PROGRAMAGENERALARQ.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/SALA40MASUNO/SALA40MASUNO.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/SALAVIP/SALAVIP.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/TERRAZAARCO/TERRAZAARCO.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/4.HISTORIADEARCO/HISTORIADEARCO1.mp4", indexes: ['Historia de Arco', 'Arco', 'Historia'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/4.HISTORIADEARCO/HISTORIADEARCO2.mp4", indexes: ['Historia de Arco', 'Arco', 'Historia'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/5.NOVEDADES2022/NOVEDADES1.mp4", indexes: ['Novedades 2022', 'Novedades', '2022'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/5.NOVEDADES2022/NOVEDADES2.mp4", indexes: ['Novedades 2022', 'Novedades', '2022'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/5.NOVEDADES2022/NOVEDADES1.mp4", indexes: ['Novedades 2022', 'Novedades', '2022'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/6.PREGUNTAPARADECISIONUSUARIO/PREGUNTADECISION.mp4", indexes: ["anotherThemeTrack"],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/7.LISTADODESPUESDERESPUESTASI/LISTADODESPUESDERESPUESTASI.mp4", indexes: ['si me gustaría', 'si gracias', 'Me gustaría'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/8.PREGUNTAENCUESTA/PREGUNTAENCUESTASOBREARCO.mp4", indexes: ['En otro momento', 'Mejor luego', 'Por ahora no', 'No, de momento'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/9.PREGUNTAENCUESTAAVATAR/PREGUNTAENCUESTASOBREAVATAR.mp4", indexes: ['Uno', 'dos', 'Tres', 'Cuatro', 'Cinco'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/10.DESPEDIDAS/DESPEDIDA1.mp4", indexes: ["byeFirstTrack"],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/10.DESPEDIDAS/DESPEDIDA2.mp4", indexes: ["byeSecTrack"],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/11.IDLE/IDLE.mp4", indexes: ['reposo'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/1.SALUDOSYLISTADO/SALUDO1.mp4", indexes: ['Hola', 'hola', 'Holi', 'Buenos dias', 'Buenas tardes', 'Buenas noches', 'Buenas', 'Hello', 'Hi', 'Good Morning', 'Good afternoon', 'Good night'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/1.SALUDOSYLISTADO/SALUDO2.mp4", indexes: ['Hola', 'hola', 'Holi', 'Buenos dias', 'Buenas tardes', 'Buenas noches', 'Buenas', 'Hello', 'Hi', 'Good Morning', 'Good afternoon', 'Good night'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERALGALERIAS1.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERALGALERIAS2.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/PROYECTOSARTISTAS/PROYECTOARTISTAS.mp4", indexes: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION1.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION2.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS1.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS2Y3.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/PROGRAMAGENERAL/PROGRAMAGENERALARQUI.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/SALA40MASUNO/SALA40MASUNO.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/SALAVIP/SALAVIP.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/TERRAZAARCO/TERRAZAARCO.mp4", indexes: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/4.HISTORIADEARCO/HISTORIA1.mp4", indexes: ['Historia de Arco', 'Arco', 'Historia'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/4.HISTORIADEARCO/HISTORIA2.mp4", indexes: ['Historia de Arco', 'Arco', 'Historia'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/5.NOVEDADES2022/NOVEDADES1.mp4", indexes: ['Novedades 2022', 'Novedades', '2022'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/5.NOVEDADES2022/NOVEDADES2.mp4", indexes: ['Novedades 2022', 'Novedades', '2022'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/5.NOVEDADES2022/NOVEDADES3.mp4", indexes: ['Novedades 2022', 'Novedades', '2022'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/6.PREGUNTAPARADECISIONUSUARIO/PREGUNTADECISION.mp4", indexes: ["anotherThemeChicoTrack"],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/7.LISTADODESPUESDERESPUESTASI/LISTADODESPUESDERESPUESTASI.mp4", indexes: ['si me gustaría', 'si gracias', 'Me gustaría'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/8.PREGUNTAENCUESTA/PREGUNTASOBREARCO.mp4", indexes: ['En otro momento', 'Mejor luego', 'Por ahora no', 'No, de momento'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/9.PREGUNTAENCUESTAAVATAR/PREGUNTASOBREAVATAR.mp4", indexes: ['Uno', 'dos', 'Tres', 'Cuatro', 'Cinco'],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/10.DESPEDIDAS/DESPEDIDA1.mp4", indexes: ["byeFirstChicoTrack"],
            action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
        {
            elem: elem,
            src: "/media/Videos/VIDEOSCHICOARCO2022/10.DESPEDIDAS/DESPEDIDA2.mp4", indexes: ["byeSecChicoTrack"], action:  function(){

            printVideo(listener,this.src,this.elem)
       } },
    ];
    addEventToButtons(listener,buttonsMock, elem);
    listener.addCommands(mock)
    // const result = await listener.on(["hola"])

}