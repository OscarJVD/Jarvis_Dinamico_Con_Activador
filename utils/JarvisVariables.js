// INSTANCIA DE JARVIS
let Jarvis = new Artyom(), respuestaMode = 'quick', timeouts = [], freeSayFlag = false;

const commands = {
  saludos: ['Hola', 'hola', 'Holi', 'Buenos dias', 'Buenas tardes', 'Buenas noches', 'Buenas', 'Hello', 'Hi', 'Good Morning', 'Good afternoon', 'Good night'],
  modoReposo: ['reposo'],
  modoFrasesLentas: ['lento', 'cortas', 'lento'], // En pruebas(versión beta)
  modoFrasesNormales: ['normal', 'normales', 'normal'], // En pruebas(versión beta)
  modoFrasesLargas: ['largo', 'largas', 'rapido'],
  silenciar: ['silencio', 'callate'], // En pruebas(versión beta)
  galeriasysecciones: ['galerias', 'galerias y secciones', 'Galerías', 'Galerías y secciones', 'Secciones'], //7
  siMeGustariaOirMas: ['si me gustaría', 'si gracias', 'Me gustaría'],
  noMeGustariaOirMas: ['En otro momento', 'Mejor luego', 'Por ahora no', 'No, de momento'],
  espaciosyarquitectura: ['Espacios', 'Espacios y arquitectura', 'Arquitectura'], // 11
  historia: ['Historia de Arco', 'Arco', 'Historia'],
  novedadesDosMilVeintiDos: ['Novedades 2022', 'Novedades', '2022'],
  puntuacion: ['Uno', 'dos', 'Tres', 'Cuatro', 'Cinco']
}

// reposoTrack
let videoDinamicSrcArr = [
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/1.saludos/saludo_chica_1.mp4", id: "saludoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/1.saludos/saludo_chica_2.mp4", id: "saludoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/cua_uno/40MASUNO_1.mp4", id: "galeriasMasunoFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/cua_uno/40MASUNO_2.mp4", id: "galeriasMasunoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/nunca_mismo/NUNCA1.mp4", id: "galeriasNuncaFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/nunca_mismo/NUNCA2.mp4", id: "galeriasNuncaSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/opening/OPENING_1.mp4", id: "galeriasOpeningFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/opening/OPENING_2.mp4", id: "galeriasOpeningSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/p.artistas/p.artistas.mp4", id: "galeriasProgramaFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/p.general/p.general.mp4", id: "galeriasProgramaSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/2.galerias/p.general/p.general_2.mp4", id: "galeriasArtistasTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/arco/fundacion_1.mp4", id: "architectureFundacionFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/arco/fundacion_2.mp4", id: "architectureFundacionSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/espacios/espacios_1.mp4", id: "architectureEspaciosFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/espacios/espacios_2_3.mp4", id: "architectureEspaciosSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/p.general/p.general.mp4", id: "architectureProgramaTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/sala_cua_uno/sala_cua_uno.mp4", id: "architectureSalaTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/sala_vip/sala_vip.mp4", id: "architectureVipTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/3.arquitectura/terraza/terraza.mp4", id: "architectureArcoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/4.historia/historia_1.mp4", id: "historyArcoFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/4.historia/historia_2.mp4", id: "historyArcoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/4.historia/historia_3.mp4", id: "historyArcoThirdTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/5.novedades/novedades_1.mp4", id: "newsFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/5.novedades/novedades_2.mp4", id: "newsSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/5.novedades/novedades_3.mp4", id: "newsThirdTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/6.OtraTematicaChica/OtraTematicaChica.mp4", id: "anotherThemeTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/7.respuesta_si/respuesta_si.mp4", id: "listYesChicaTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/8.pregunta_abierta/pregunta_abierta.mp4", id: "openQuestionTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/9.puntuacion/puntuacion.mp4", id: "scoreTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/10.despedidas/despedida_1.mp4", id: "byeFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chica/10.despedidas/despedida_2.mp4", id: "byeSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/reposo_chico/reposo_chico.mp4", id: "reposoChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/1.saludos/saludo_1.mp4", id: "saludoChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/1.saludos/saludo_2.mp4", id: "saludoChicoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/cuarenta_mas_uno/1.mp4", id: "galeriasChicoMasunoFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/cuarenta_mas_uno/2.mp4", id: "galeriasChicoMasunoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/nunca_mismo/NUNCA1.mp4", id: "galeriasChicoNuncaFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/nunca_mismo/NUNCA2.mp4", id: "galeriasChicoNuncaSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/opening/OPENING1.mp4", id: "galeriasChicoOpeningFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/opening/OPENING2.mp4", id: "galeriasChicoOpeningSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/p.general/1.mp4", id: "galeriasChicoProgramaFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/p.general/2.mp4", id: "galeriasChicoProgramaSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/2.galerias/p.artistas/1.mp4", id: "galeriasChicoArtistasTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/arco/FUNDACION1.mp4", id: "architectureChicoFundacionFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/arco/FUNDACION2.mp4", id: "architectureChicoFundacionSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/espacios/ESPACIOS1.mp4", id: "architectureChicoEspaciosFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/espacios/ESPACIOS2Y3.mp4", id: "architectureChicoEspaciosSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/p.general/p.general.mp4", id: "architectureChicoProgramaTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/sala_cuarenta_mas_uno/sala_cua_uno.mp4", id: "architectureChicoSalaTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/sala_vip/sala_vip.mp4", id: "architectureChicoVipTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/3.arquitectura/terraza/terraza.mp4", id: "architectureChicoArcoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/4.historia/historia_1.mp4", id: "historyChicoArcoFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/4.historia/historia_2.mp4", id: "historyChicoArcoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/4.historia/historia_3.mp4", id: "historyChicoArcoThirdTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/5.novedades/novedades_1.mp4", id: "newsChicoFirstTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/5.novedades/novedades_2.mp4", id: "newsChicoSecTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/5.novedades/novedades_3.mp4", id: "newsChicoThirdTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/6.OtraTematicaChico/OtraTematicaChico.mp4", id: "anotherThemeChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/7.respuesta_si/respuesta_siI.mp4", id: "listYesChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/8.pregunta_abierta/pregunta_abierta.mp4", id: "openQuestionChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/9.puntuacion/puntuacion.mp4", id: "scoreChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/10.despedidas/despedida_1.mp4", id: "byeFirstChicoTrack" },
  { src: "https://feria.s3.us-east-2.amazonaws.com/video/chico/10.despedidas/despedida_2.mp4", id: "byeSecChicoTrack" },
]

let videoDinamicLocalSrcArr = [
  { src: "/media/Videos/VIDEOSCHICAARCO2022/11.IDLE/IDLE.mp4", id: "reposoTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/1.SALUDOSYLISTADO/SALUDOCHICA1.mp4", id: "saludoTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/1.SALUDOSYLISTADO/SALUDOCHICA2.mp4", id: "saludoSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA1.mp4", id: "galeriasMasunoFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA2.mp4", id: "galeriasMasunoSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO1.mp4", id: "galeriasNuncaFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO2.mp4", id: "galeriasNuncaSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING1.mp4", id: "galeriasOpeningFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING2.mp4", id: "galeriasOpeningSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/PROYECTOSARTISTAS/PROYECTOSARTISTAS.mp4", id: "galeriasProgramaFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERAL1.mp4", id: "galeriasProgramaSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERAL2.mp4", id: "galeriasArtistasTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION1.mp4", id: "architectureFundacionFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION2.mp4", id: "architectureFundacionSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS1.mp4", id: "architectureEspaciosFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS2Y3.mp4", id: "architectureEspaciosSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/PROGRAMAGENERAL/PROGRAMAGENERALARQ.mp4", id: "architectureProgramaTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/SALA40MASUNO/SALA40MASUNO.mp4", id: "architectureSalaTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/SALAVIP/SALAVIP.mp4", id: "architectureVipTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/TERRAZAARCO/TERRAZAARCO.mp4", id: "architectureArcoTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/4.HISTORIADEARCO/HISTORIADEARCO1.mp4", id: "historyArcoFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/4.HISTORIADEARCO/HISTORIADEARCO2.mp4", id: "historyArcoThirdTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/5.NOVEDADES2022/NOVEDADES1.mp4", id: "newsFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/5.NOVEDADES2022/NOVEDADES2.mp4", id: "newsSecTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/5.NOVEDADES2022/NOVEDADES1.mp4", id: "newsThirdTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/6.PREGUNTAPARADECISIONUSUARIO/PREGUNTADECISION.mp4", id: "anotherThemeTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/7.LISTADODESPUESDERESPUESTASI/LISTADODESPUESDERESPUESTASI.mp4", id: "listYesChicaTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/8.PREGUNTAENCUESTA/PREGUNTAENCUESTASOBREARCO.mp4", id: "openQuestionTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/9.PREGUNTAENCUESTAAVATAR/PREGUNTAENCUESTASOBREAVATAR.mp4", id: "scoreTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/10.DESPEDIDAS/DESPEDIDA1.mp4", id: "byeFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/10.DESPEDIDAS/DESPEDIDA2.mp4", id: "byeSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/11.IDLE/IDLE.mp4", id: "reposoChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/1.SALUDOSYLISTADO/SALUDO1.mp4", id: "saludoChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/1.SALUDOSYLISTADO/SALUDO2.mp4", id: "saludoChicoSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA1.mp4", id: "galeriasChicoMasunoFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/40MASUNO/40MASUNOGALERIA2.mp4", id: "galeriasChicoMasunoSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO1.mp4", id: "galeriasChicoNuncaFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/NUNCALOMISMO/NUNCALOMISMO2.mp4", id: "galeriasChicoNuncaSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING1.mp4", id: "galeriasChicoOpeningFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/OPENING/OPENING2.mp4", id: "galeriasChicoOpeningSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERALGALERIAS1.mp4", id: "galeriasChicoProgramaFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/PROGRAMAGENERAL/PROGRAMAGENERALGALERIAS2.mp4", id: "galeriasChicoProgramaSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/2.GALERIASYSECCIONES/PROYECTOSARTISTAS/PROYECTOARTISTAS.mp4", id: "galeriasChicoArtistasTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION1.mp4", id: "architectureChicoFundacionFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/FUNDACIONARCO/FUNDACION2.mp4", id: "architectureChicoFundacionSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS1.mp4", id: "architectureChicoEspaciosFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICAARCO2022/3.ESPACIOSYARQUITECTURA/OTROSESPACIOS/ESPACIOS2Y3.mp4", id: "architectureChicoEspaciosSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/PROGRAMAGENERAL/PROGRAMAGENERALARQUI.mp4", id: "architectureChicoProgramaTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/SALA40MASUNO/SALA40MASUNO.mp4", id: "architectureChicoSalaTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/SALAVIP/SALAVIP.mp4", id: "architectureChicoVipTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/3.ESPACIOSYARQUITECTURA/TERRAZAARCO/TERRAZAARCO.mp4", id: "architectureChicoArcoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/4.HISTORIADEARCO/HISTORIA1.mp4", id: "historyChicoArcoFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/4.HISTORIADEARCO/HISTORIA2.mp4", id: "historyChicoArcoThirdTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/5.NOVEDADES2022/NOVEDADES1.mp4", id: "newsChicoFirstTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/5.NOVEDADES2022/NOVEDADES2.mp4", id: "newsChicoSecTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/5.NOVEDADES2022/NOVEDADES3.mp4", id: "newsChicoThirdTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/6.PREGUNTAPARADECISIONUSUARIO/PREGUNTADECISION.mp4", id: "anotherThemeChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/7.LISTADODESPUESDERESPUESTASI/LISTADODESPUESDERESPUESTASI.mp4", id: "listYesChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/8.PREGUNTAENCUESTA/PREGUNTASOBREARCO.mp4", id: "openQuestionChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/9.PREGUNTAENCUESTAAVATAR/PREGUNTASOBREAVATAR.mp4", id: "scoreChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/10.DESPEDIDAS/DESPEDIDA1.mp4", id: "byeFirstChicoTrack" },
  { src: "/media/Videos/VIDEOSCHICOARCO2022/10.DESPEDIDAS/DESPEDIDA2.mp4", id: "byeSecChicoTrack" },
]


































































