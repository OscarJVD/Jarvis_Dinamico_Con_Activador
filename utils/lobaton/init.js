const init = async ()=>{
    const elem = document.querySelector("#root-video");
    const { videos, commands } = getConfig()
    const listener = await Reckognition()

    await process(listener,elem)
    // await JarvisConf()
    // await JavisBasicListener()
}

document.addEventListener("DOMContentLoaded", init)
// document.querySelector("#btnActiveRecognizer").addEventListener("click", init)